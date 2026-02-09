import { useState, useCallback, useEffect } from 'react';
import { useCaptureData } from '@/contexts/CaptureContext';
import { AlertCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { saveCaptureSession } from '@/utils/captureSession';
import { FrameAdjustmentControls } from './FrameAdjustmentControls';
import { DEFAULT_ADJUSTMENTS, type AdjustmentValues } from '@/utils/frameOverlayUtils';
import { getProductBySku } from '@/api/retailerApis';
import VtoProductOverlay from '@/components/VtoProductOverlay';

/** Same frame as /glasses product cards – use a product skuid from catalog */
const TEST_FRAME_SKUID = 'E10A1012';

export function MeasurementsTab() {
  const { capturedData, setCapturedData } = useCaptureData();
  const navigate = useNavigate();
  const [adjustments, setAdjustments] = useState<AdjustmentValues>(() =>
    capturedData?.frameAdjustments
      ? { ...capturedData.frameAdjustments }
      : { ...DEFAULT_ADJUSTMENTS }
  );
  const [testProduct, setTestProduct] = useState<{ dimensions?: string; name: string } | null>(null);

  useEffect(() => {
    let cancelled = false;
    getProductBySku(TEST_FRAME_SKUID).then((res) => {
      if (cancelled) return;
      const product = res?.data?.data ?? res?.data;
      if (product) {
        setTestProduct({
          dimensions: product.dimensions,
          name: product.name ?? TEST_FRAME_SKUID,
        });
      }
    }).catch(() => {});
    return () => { cancelled = true; };
  }, []);

  const captureWithAdjustments = { ...capturedData, frameAdjustments: adjustments };

  const handleResetAdjustments = useCallback(() => {
    setAdjustments({ ...DEFAULT_ADJUSTMENTS });
  }, []);

  const handleViewCollection = useCallback(() => {
    const withAdjustments = {
      ...capturedData!,
      frameAdjustments: {
        offsetX: adjustments.offsetX,
        offsetY: adjustments.offsetY,
        scaleAdjust: adjustments.scaleAdjust,
        rotationAdjust: adjustments.rotationAdjust,
      },
    };
    setCapturedData(withAdjustments);
    saveCaptureSession(withAdjustments);
    navigate('/glasses');
    window.dispatchEvent(new CustomEvent('getmyfit:close'));
  }, [capturedData, adjustments, setCapturedData, navigate]);

  if (!capturedData) {
    return (
      <div className="flex flex-col items-center justify-center h-64 text-center p-6 bg-gray-50 rounded-2xl border-2 border-dashed border-gray-200">
        <AlertCircle className="w-8 h-8 text-gray-300 mb-2" />
        <p className="text-gray-500 font-medium">No Data Found</p>
      </div>
    );
  }

  const { measurements, faceShape } = capturedData;
  const formatVal = (v: number | undefined, d = 1) => (v != null && !isNaN(v)) ? v.toFixed(d) : 'N/A';

  return (
    <div className="space-y-4 animate-fadeIn">
      {/* Instruction + Face with test frame – same component as /glasses for identical view */}
      <div className="space-y-3">
        <p className="text-xs font-bold text-gray-700 uppercase tracking-wide text-center">
          Please align how you like to wear glasses
        </p>
        <div className="p-0 bg-[#F7F7F7] flex relative rounded overflow-hidden mx-auto" style={{ width: 384, height: 332 }}>
          <VtoProductOverlay
            captureSession={captureWithAdjustments}
            productSkuid={TEST_FRAME_SKUID}
            productDimensions={testProduct?.dimensions}
            productName={testProduct?.name ?? 'Test frame'}
            compact
          />
        </div>
        <FrameAdjustmentControls
          values={adjustments}
          onChange={setAdjustments}
          onReset={handleResetAdjustments}
        />
      </div>

      {/* PD Card */}
      <div className="bg-[#F3F4F6] text-black p-6 rounded-2xl shadow-sm border border-gray-200 relative overflow-hidden">
        <div className="relative z-10 text-center">
          <p className="text-[10px] font-bold text-gray-600 uppercase tracking-widest mb-1 text-center">Pupillary Distance</p>
          <div className="flex items-baseline justify-center gap-2">
            <span className="text-5xl font-black italic tracking-tighter">{formatVal(measurements?.pd)}</span>
            <span className="text-lg text-gray-700">mm</span>
          </div>
          <div className="grid grid-cols-2 gap-4 mt-4 pt-4 border-t border-black/10">
            <div className="text-center">
              <p className="text-[8px] font-bold text-gray-600 uppercase">Left PD</p>
              <p className="text-xl font-bold italic">{formatVal(measurements?.pd_left)}</p>
            </div>
            <div className="text-center">
              <p className="text-[8px] font-bold text-gray-600 uppercase">Right PD</p>
              <p className="text-xl font-bold italic">{formatVal(measurements?.pd_right)}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Face Width + Face Shape */}
      <div className="grid grid-cols-2 gap-3">
        <div className="bg-gray-100 p-4 rounded-2xl">
          <p className="text-[9px] font-bold text-gray-500 uppercase mb-1">Face Width</p>
          <p className="text-xl font-bold">
            {formatVal(measurements?.face_width)}
            <span className="text-xs ml-1 opacity-50">mm</span>
          </p>
        </div>
        <div className="bg-gray-100 p-4 rounded-2xl">
          <p className="text-[9px] font-bold text-gray-500 uppercase mb-1">Face Shape</p>
          <p className="text-xl font-bold uppercase italic tracking-tighter">{faceShape || 'N/A'}</p>
        </div>
      </div>

      {/* View MFIT Collection */}
      <button
        type="button"
        onClick={handleViewCollection}
        className="w-full inline-flex items-center justify-center bg-black text-white py-5 rounded-2xl font-black uppercase tracking-[0.2em] text-sm hover:bg-gray-800 transition-all"
      >
        View MFIT Collection
      </button>
    </div>
  );
}
