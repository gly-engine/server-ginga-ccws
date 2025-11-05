
import type { Middleware } from "../router";

const delay = (ms: number) => new Promise(res => setTimeout(res, ms));

const getRandomInt = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export const delayMiddleware: Middleware = async (req, next) => {
  const delayVar = process.env.DELAY;

  if (delayVar) {
    const parts = delayVar.split(':');
    if (parts.length === 2) {
      const min = parseInt(parts[0], 10);
      const max = parseInt(parts[1], 10);
      if (!isNaN(min) && !isNaN(max)) {
        const randomDelay = getRandomInt(min, max);
        await delay(randomDelay);
      }
    } else {
      const delayMs = parseInt(delayVar, 10);
      if (!isNaN(delayMs)) {
        await delay(delayMs);
      }
    }
  }

  return await next();
};
