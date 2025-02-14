// Generate a random CSRF token
function generateToken(): string {
  const array = new Uint8Array(32);
  crypto.getRandomValues(array);
  return Array.from(array, byte => byte.toString(16).padStart(2, '0')).join('');
}

// Store tokens with expiration
const tokenStore = new Map<string, { token: string; expires: number }>();

export const csrf = {
  // Generate and store a new token
  generateToken(): string {
    const token = generateToken();
    const expires = Date.now() + 3600000; // 1 hour expiration
    tokenStore.set(token, { token, expires });
    return token;
  },

  // Validate a token
  validateToken(token: string): boolean {
    const storedToken = tokenStore.get(token);
    if (!storedToken) return false;
    if (Date.now() > storedToken.expires) {
      tokenStore.delete(token);
      return false;
    }
    return true;
  },

  // Clean up expired tokens
  cleanup(): void {
    const now = Date.now();
    for (const [token, data] of tokenStore.entries()) {
      if (now > data.expires) {
        tokenStore.delete(token);
      }
    }
  }
};

// Clean up expired tokens every hour
setInterval(csrf.cleanup, 3600000);