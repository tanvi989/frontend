/**
 * Extract a user-friendly message from an API/axios error.
 * Handles: { detail: { msg: "..." } }, { detail: "..." }, { msg: "..." }, { message: "..." }
 * so the UI never shows "[object Object]".
 */
export function getApiErrorMessage(
  err: any,
  fallback = "Something went wrong. Please try again."
): string {
  if (err == null) return fallback;
  const data = err?.response?.data ?? err;
  const detail = data?.detail;
  // Backend often returns detail as { success, status, msg }
  if (detail != null && typeof detail === "object" && typeof detail.msg === "string") return detail.msg;
  if (typeof detail === "string") return detail;
  if (typeof data?.msg === "string") return data.msg;
  if (typeof data?.message === "string") return data.message;
  if (typeof err?.message === "string") return err.message;
  return fallback;
}
