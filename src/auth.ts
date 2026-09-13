export const tokenIsFresh = (expiresAt: number, now = Date.now()) => expiresAt > now;
