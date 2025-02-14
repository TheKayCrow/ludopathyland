import CryptoJS from 'crypto-js';
import { config } from 'dotenv';
import { encryptedKeys } from '../src/config/encryptedKeys.js';

// Load environment variables
config();

const ENCRYPTION_KEY = process.env.ENCRYPTION_KEY || 'your-secure-encryption-key';

export function decryptApiKeys() {
  const decryptedKeys = {};
  
  for (const [key, value] of Object.entries(encryptedKeys)) {
    try {
      const bytes = CryptoJS.AES.decrypt(value, ENCRYPTION_KEY);
      decryptedKeys[key] = bytes.toString(CryptoJS.enc.Utf8);
    } catch (error) {
      console.error(`Error decrypting ${key}:`, error);
      decryptedKeys[key] = '';
    }
  }
  
  return decryptedKeys;
}