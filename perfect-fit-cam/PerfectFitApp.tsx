/**
 * Perfect Fit (perfect-fit-cam) app mounted at /perfect-fit.
 * No inner Router – routes are defined in the main App to avoid nesting.
 */
import type { ReactNode } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from '@pf/components/ui/toaster';
import { Toaster as Sonner } from '@pf/components/ui/sonner';
import { TooltipProvider } from '@pf/components/ui/tooltip';
import { CaptureProvider } from '@pf/context/CaptureContext';
import '@pf/index.css';

const queryClient = new QueryClient();

export function PerfectFitApp({ children }: { children: ReactNode }) {
  return (
    <div className="perfect-fit-root min-h-screen" data-perfect-fit>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <CaptureProvider>
            <Toaster />
            <Sonner />
            {children}
          </CaptureProvider>
        </TooltipProvider>
      </QueryClientProvider>
    </div>
  );
}
