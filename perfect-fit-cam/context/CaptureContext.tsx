import { createContext, useContext, useState, ReactNode } from 'react';
import type { CapturedData } from '@pf/types/face-validation';

export interface SelectedFrameInfo {
  name: string;
  fitLabel: string;
  category: string;
  color: string;
  width: number;
  lensWidth: number;
  noseBridge: number;
  templeLength: number;
}

interface CaptureContextType {
  capturedData: CapturedData | null;
  setCapturedData: (data: CapturedData | null) => void;
  selectedFrameInfo: SelectedFrameInfo | null;
  setSelectedFrameInfo: (info: SelectedFrameInfo | null) => void;
}

const CaptureContext = createContext<CaptureContextType | undefined>(undefined);

export function CaptureProvider({ children }: { children: ReactNode }) {
  const [capturedData, setCapturedData] = useState<CapturedData | null>(null);
  const [selectedFrameInfo, setSelectedFrameInfo] = useState<SelectedFrameInfo | null>(null);

  return (
    <CaptureContext.Provider value={{ capturedData, setCapturedData, selectedFrameInfo, setSelectedFrameInfo }}>
      {children}
    </CaptureContext.Provider>
  );
}

export function useCaptureData() {
  const context = useContext(CaptureContext);
  if (context === undefined) {
    throw new Error('useCaptureData must be used within a CaptureProvider');
  }
  return context;
}
