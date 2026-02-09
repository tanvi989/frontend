import { useState } from 'react';
import { useCaptureData } from '@pf/context/CaptureContext';
import { Ruler, MoveHorizontal, Activity, Glasses, ChevronDown, ChevronUp } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@pf/components/ui/card';
import { Badge } from '@pf/components/ui/badge';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@pf/components/ui/collapsible';

export function MeasurementsTab() {
  const { capturedData, selectedFrameInfo } = useCaptureData();
  const [selectedFrameOpen, setSelectedFrameOpen] = useState(false);

  if (!capturedData) {
    return (
      <div className="flex items-center justify-center h-64">
        <p className="text-muted-foreground">No measurement data available</p>
      </div>
    );
  }

  const { measurements, faceShape } = capturedData;

  // Helper to safely format numbers
  const formatMeasurement = (value: number | undefined, decimals: number = 1): string => {
    if (value === undefined || value === null || isNaN(value)) return 'N/A';
    return value.toFixed(decimals);
  };

  // Calculate confidence based on PD value range (typical adult PD is 54-74mm)
  const getConfidence = (pd: number | undefined): 'low' | 'medium' | 'high' => {
    if (pd === undefined || pd === null) return 'low';
    if (pd >= 54 && pd <= 74) return 'high';
    if (pd >= 48 && pd <= 80) return 'medium';
    return 'low';
  };

  const confidence = getConfidence(measurements?.pd);

  const getConfidenceBadge = (conf: 'low' | 'medium' | 'high') => {
    const variants = {
      low: 'bg-destructive/10 text-destructive',
      medium: 'bg-yellow-500/10 text-yellow-600',
      high: 'bg-medical-success/10 text-medical-success',
    };
    return (
      <Badge variant="outline" className={variants[conf]}>
        {conf.charAt(0).toUpperCase() + conf.slice(1)} Confidence
      </Badge>
    );
  };

  const formatCategory = (cat: string) => cat.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());

  return (
    <div className="space-y-6 p-4">
      {/* PD Measurement */}
      <Card className="border-primary/20 bg-primary/5">
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between">
            <CardTitle className="text-lg flex items-center gap-2">
              <MoveHorizontal className="h-5 w-5 text-primary" />
              Pupillary Distance (PD)
            </CardTitle>
            {getConfidenceBadge(confidence)}
          </div>
        </CardHeader>
        <CardContent>
          <div className="text-center py-4">
            <div className="text-5xl font-bold text-primary">
              {formatMeasurement(measurements?.pd)}
              <span className="text-2xl font-normal text-muted-foreground ml-1">mm</span>
            </div>
            <p className="text-sm text-muted-foreground mt-2">
              Total pupillary distance
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 mt-4 pt-4 border-t border-border">
            <div className="text-center">
              <p className="text-sm text-muted-foreground">Left PD</p>
              <p className="text-2xl font-semibold text-foreground">
                {formatMeasurement(measurements?.pd_left)} mm
              </p>
            </div>
            <div className="text-center">
              <p className="text-sm text-muted-foreground">Right PD</p>
              <p className="text-2xl font-semibold text-foreground">
                {formatMeasurement(measurements?.pd_right)} mm
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Face Measurements */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-lg flex items-center gap-2">
            <Ruler className="h-5 w-5 text-primary" />
            Face Dimensions
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div className="bg-muted/50 rounded-lg p-4 text-center">
              <p className="text-sm text-muted-foreground">Face Width</p>
              <p className="text-xl font-semibold text-foreground">
                {formatMeasurement(measurements?.face_width)} mm
              </p>
            </div>
            <div className="bg-muted/50 rounded-lg p-4 text-center">
              <p className="text-sm text-muted-foreground">Face Height</p>
              <p className="text-xl font-semibold text-foreground">
                {formatMeasurement(measurements?.face_height)} mm
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-muted/50 rounded-lg p-4 text-center">
              <p className="text-sm text-muted-foreground">Face Ratio</p>
              <p className="text-xl font-semibold text-foreground">
                {formatMeasurement(measurements?.face_ratio, 2)}
              </p>
            </div>
            <div className="bg-primary/10 rounded-lg p-4 text-center">
              <p className="text-sm text-muted-foreground">Face Shape</p>
              <p className="text-xl font-semibold text-primary capitalize">
                {faceShape || 'N/A'}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Nose Measurements */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-lg flex items-center gap-2">
            <Activity className="h-5 w-5 text-primary" />
            Nose Bridge Measurements
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-muted/50 rounded-lg p-4 text-center">
              <p className="text-sm text-muted-foreground">Left</p>
              <p className="text-xl font-semibold text-foreground">
                {formatMeasurement(measurements?.nose_bridge_left)} mm
              </p>
            </div>
            <div className="bg-muted/50 rounded-lg p-4 text-center">
              <p className="text-sm text-muted-foreground">Right</p>
              <p className="text-xl font-semibold text-foreground">
                {formatMeasurement(measurements?.nose_bridge_right)} mm
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Selected Frame (collapsible, closed by default, at bottom) */}
      {selectedFrameInfo && (
        <Collapsible open={selectedFrameOpen} onOpenChange={setSelectedFrameOpen}>
          <Card className="border-primary/20 bg-primary/5">
            <CardHeader className="pb-3">
              <CollapsibleTrigger asChild>
                <button
                  type="button"
                  className="flex w-full items-center justify-between text-left hover:opacity-80 transition-opacity"
                >
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Glasses className="h-5 w-5 text-primary" />
                    Selected Frame
                  </CardTitle>
                  {selectedFrameOpen ? (
                    <ChevronUp className="h-5 w-5 text-muted-foreground" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-muted-foreground" />
                  )}
                </button>
              </CollapsibleTrigger>
            </CardHeader>
            <CollapsibleContent>
              <CardContent className="pt-0">
                <div className="space-y-3">
                  <div>
                    <h4 className="text-xl font-bold text-foreground">{selectedFrameInfo.name}</h4>
                    <p className="text-sm text-muted-foreground mt-0.5">
                      <span className="font-medium text-foreground">{selectedFrameInfo.fitLabel}</span>
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {formatCategory(selectedFrameInfo.category)} • {selectedFrameInfo.color}
                    </p>
                  </div>
                  <div className="grid grid-cols-2 gap-3 pt-3 border-t border-border">
                    <div className="bg-muted/50 rounded-lg p-3">
                      <p className="text-xs text-muted-foreground">Frame Width</p>
                      <p className="text-lg font-semibold text-foreground">{selectedFrameInfo.width}mm</p>
                    </div>
                    <div className="bg-muted/50 rounded-lg p-3">
                      <p className="text-xs text-muted-foreground">Lens Width</p>
                      <p className="text-lg font-semibold text-foreground">{selectedFrameInfo.lensWidth}mm</p>
                    </div>
                    <div className="bg-muted/50 rounded-lg p-3">
                      <p className="text-xs text-muted-foreground">Nose Bridge</p>
                      <p className="text-lg font-semibold text-foreground">{selectedFrameInfo.noseBridge}mm</p>
                    </div>
                    <div className="bg-muted/50 rounded-lg p-3">
                      <p className="text-xs text-muted-foreground">Temple Length</p>
                      <p className="text-lg font-semibold text-foreground">{selectedFrameInfo.templeLength}mm</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </CollapsibleContent>
          </Card>
        </Collapsible>
      )}
    </div>
  );
}
