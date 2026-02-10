import React, { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import AllProducts from "./AllProducts";
import { getCaptureSession } from "@/utils/captureSession";

/**
 * Wrapper for /glasses: on mobile, redirect to /glasses-m only when VTO (MFit) is on (has capture session).
 * Desktop always sees AllProducts. Mobile with no VTO sees AllProducts.
 */
const MOBILE_BREAKPOINT = 1024;

export default function GlassesPage() {
  const [isMobile, setIsMobile] = useState<boolean | null>(null);
  const [hasSession, setHasSession] = useState<boolean | null>(null);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  useEffect(() => {
    setHasSession(!!getCaptureSession());
  }, []);

  if (isMobile === null) return null;
  if (isMobile && hasSession) return <Navigate to="/glasses-m" replace />;
  return <AllProducts />;
}
