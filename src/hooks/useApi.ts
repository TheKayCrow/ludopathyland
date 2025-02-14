import { useState, useCallback } from 'react';
import { rateLimit } from '../utils/rateLimit';
import { csrf } from '../utils/csrf';
import { handleError } from '../utils/errorHandling';
import { validateData } from '../utils/validation';
import { z } from 'zod';

interface UseApiOptions<T> {
  endpoint: string;
  validationSchema?: z.ZodSchema<T>;
  rateLimit?: {
    windowMs: number;
    maxRequests: number;
  };
}

export function useApi<T>({ endpoint, validationSchema, rateLimit: rateLimitConfig }: UseApiOptions<T>) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const execute = useCallback(async (data?: unknown) => {
    try {
      setLoading(true);
      setError(null);

      // Rate limiting
      try {
        rateLimit(endpoint, rateLimitConfig);
      } catch (error) {
        throw new Error('Too many requests. Please try again later.');
      }

      // Data validation
      if (validationSchema && data) {
        const validationResult = validateData(validationSchema, data);
        if (!validationResult.success) {
          throw new Error(validationResult.error);
        }
      }

      // Get CSRF token
      const csrfToken = csrf.generateToken();

      // Make API request
      const response = await fetch(endpoint, {
        method: data ? 'POST' : 'GET',
        headers: {
          'Content-Type': 'application/json',
          'X-CSRF-Token': csrfToken
        },
        body: data ? JSON.stringify(data) : undefined
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();

      // Validate response data if schema provided
      if (validationSchema) {
        const validationResult = validateData(validationSchema, result);
        if (!validationResult.success) {
          throw new Error('Invalid response data');
        }
        return validationResult.data;
      }

      return result;
    } catch (error) {
      const { message } = handleError(error);
      setError(message);
      throw error;
    } finally {
      setLoading(false);
    }
  }, [endpoint, validationSchema, rateLimitConfig]);

  return {
    execute,
    loading,
    error
  };
}