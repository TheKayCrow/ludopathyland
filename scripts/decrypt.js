import CryptoJS from 'crypto-js';
import { config } from 'dotenv';
import { encryptedKeys } from '../src/config/encryptedKeys.js';

// Load environment variables
config();

const ENCRYPTION_KEY = process.env.ENCRYPTION_KEY;
if (!ENCRYPTION_KEY) {
  throw new Error('ENCRYPTION_KEY environment variable is not set');
}

export function decryptApiKeys() {
  const decryptedKeys = {};
  
  for (const [key, value] of Object.entries(encryptedKeys)) {
    try {
      const bytes = CryptoJS.AES.decrypt(value, ENCRYPTION_KEY);
      decryptedKeys[key] = bytes.toString(CryptoJS.enc.Utf8);
      
      if (!decryptedKeys[key]) {
        throw new Error(`Failed to decrypt ${key}`);
      }
    } catch (error) {
      console.error(`Error decrypting ${key}:`, error);
      throw error;
    }
  }
  
  return decryptedKeys;
}