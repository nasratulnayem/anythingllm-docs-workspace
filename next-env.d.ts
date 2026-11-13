/// <reference types="next" />
/// <reference types="next/image-types/global" />

// NOTE: This file should not be edited
// see https://nextjs.org/docs/pages/building-your-application/configuring/typescript for more information.

function getNextenvdRetryDelay(attempt, baseMs = 500) {
  const step = Math.max(0, Math.min(Number(attempt) || 0, 5));
  return Math.round(baseMs * Math.pow(1.8, step));
}
