import { useState, useEffect } from "react";

const GOOGLE_API_KEY = (import.meta.env.VITE_GOOGLE_PLACES_API_KEY || "").trim();
const SCRIPT_URL = `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_API_KEY}&libraries=places`;

declare global {
  interface Window {
    google?: typeof google;
    initGooglePlaces?: () => void;
  }
}

export function useGooglePlacesScript() {
  const [isReady, setIsReady] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!GOOGLE_API_KEY) {
      setError("Google Places API key is not configured (VITE_GOOGLE_PLACES_API_KEY)");
      return;
    }

    if (window.google?.maps?.places) {
      setIsReady(true);
      return;
    }

    const existing = document.querySelector(`script[src^="${SCRIPT_URL.split("?")[0]}"]`);
    if (existing) {
      if (window.google?.maps?.places) setIsReady(true);
      else existing.addEventListener("load", () => setIsReady(true));
      return;
    }

    const script = document.createElement("script");
    script.src = SCRIPT_URL;
    script.async = true;
    script.defer = true;
    script.onload = () => setIsReady(true);
    script.onerror = () => setError("Failed to load Google Maps script");
    document.head.appendChild(script);

    return () => {
      // Don't remove script on unmount so other mounts reuse it
    };
  }, []);

  return { isReady, error, apiKey: GOOGLE_API_KEY };
}

/** Minimal type for Google Place result (avoids @types/google.maps) */
export interface PlaceResult {
  address_components?: Array<{ long_name: string; types: string[] }>;
  formatted_address?: string;
}

/** Parse Place result into address fields */
export function parsePlaceToAddress(place: PlaceResult): {
  addressLine: string;
  city: string;
  state: string;
  country: string;
  zip: string;
} {
  const get = (type: string) =>
    place.address_components?.find((c) => c.types.includes(type))?.long_name || "";
  const streetNumber = get("street_number");
  const route = get("route");
  const subpremise = get("subpremise");
  const premise = get("premise");
  const addressLine = [streetNumber, route, subpremise, premise].filter(Boolean).join(", ") || (place.formatted_address || "").split(",")[0] || "";
  return {
    addressLine: addressLine.trim() || (place.formatted_address || "").split(",")[0] || "",
    city: get("locality") || get("sublocality") || get("postal_town"),
    state: get("administrative_area_level_1"),
    country: get("country"),
    zip: get("postal_code"),
  };
}
