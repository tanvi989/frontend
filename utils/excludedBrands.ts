/**
 * Brand names to exclude from /glasses, /glasses/men, and /glasses/women.
 * Comparison is case-insensitive.
 */
export const EXCLUDED_BRANDS = [
  "andriano cross",
  "invu",
  "face a face",
] as const;

/** Returns true if the product's brand is in the excluded list (case-insensitive). */
export function isExcludedBrand(brand: string | undefined | null): boolean {
  const b = (brand || "").toLowerCase().trim();
  return EXCLUDED_BRANDS.some((ex) => ex === b);
}

/** Filters out products whose brand is in EXCLUDED_BRANDS. */
export function filterExcludedBrandProducts<T extends { brand?: string | null }>(
  products: T[]
): T[] {
  return products.filter((p) => !isExcludedBrand(p.brand));
}
