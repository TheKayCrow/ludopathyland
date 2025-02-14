// Custom error types
export class APIError extends Error {
  constructor(
    public statusCode: number,
    message: string,
    public code?: string
  ) {
    super(message);
    this.name = 'APIError';
  }
}

export class ValidationError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'ValidationError';
  }
}

export class RateLimitError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'RateLimitError';
  }
}

// Error handler
export function handleError(error: unknown): { message: string; statusCode?: number } {
  if (error instanceof APIError) {
    return {
      message: error.message,
      statusCode: error.statusCode
    };
  }

  if (error instanceof ValidationError) {
    return {
      message: error.message,
      statusCode: 400
    };
  }

  if (error instanceof RateLimitError) {
    return {
      message: error.message,
      statusCode: 429
    };
  }

  // Default error handling
  console.error('Unhandled error:', error);
  return {
    message: 'An unexpected error occurred',
    statusCode: 500
  };
}

// Async error wrapper
export function withErrorHandling<T>(fn: () => Promise<T>): Promise<T> {
  return fn().catch(error => {
    const { message, statusCode } = handleError(error);
    throw new APIError(statusCode || 500, message);
  });
}