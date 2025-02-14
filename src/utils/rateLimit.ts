import { useState } from 'react';

interface RateLimitConfig {
  windowMs: number;
  maxRequests: number;
}

interface RateLimitState {
  requests: number;
  resetTime: number;
}

const rateLimitStates = new Map<string, RateLimitState>();

export function rateLimit(key: string, config: RateLimitConfig = { windowMs: 60000, maxRequests: 30 }) {
  const now = Date.now();
  const state = rateLimitStates.get(key) || { requests: 0, resetTime: now + config.windowMs };

  // Reset if window has passed
  if (now > state.resetTime) {
    state.requests = 0;
    state.resetTime = now + config.windowMs;
  }

  state.requests++;
  rateLimitStates.set(key, state);

  if (state.requests > config.maxRequests) {
    const waitTime = Math.ceil((state.resetTime - now) / 1000);
    throw new Error(`Rate limit exceeded. Please try again in ${waitTime} seconds.`);
  }

  return {
    remaining: config.maxRequests - state.requests,
    resetTime: state.resetTime
  };
}