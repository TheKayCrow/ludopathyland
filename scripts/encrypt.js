import CryptoJS from 'crypto-js';
import { config } from 'dotenv';
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Load environment variables
config();

const ENCRYPTION_KEY = process.env.ENCRYPTION_KEY || 'your-secure-encryption-key';

// API keys to encrypt
const apiKeys = {
  newsapi: process.env.NEWSAPI_KEY || '2c6e6c9c5c3548c482815747c3a24aa2',
  mediastack: process.env.MEDIASTACK_KEY || '803b6f09ec5963033f224c964e659f62',
  apitube: process.env.APITUBE_KEY || 'api_live_FHVwHQpEN1aiyYPM7p5XRBqYHZnJAFAYth4xgwcsKXFAcfRMyry',
  rapidapi: process.env.RAPIDAPI_KEY || 'e9ef2f1150mshf85fbd75df3c4b9p10a266jsn408b80ec15c8',
  worldnews: process.env.WORLDNEWS_KEY || 'x7F1m2J9N9Q7X7veRL5I2bTu2JGbypAv'
};

// Encrypt API keys
const encryptedKeys = {};
for (const [key, value] of Object.entries(apiKeys)) {
  encryptedKeys[key] = CryptoJS.AES.encrypt(value, ENCRYPTION_KEY).toString();
}

// Create encrypted keys file
const encryptedKeysFile = path.join(__dirname, '../src/config/encryptedKeys.ts');
const fileContent = `// Auto-generated encrypted keys - DO NOT EDIT
export const encryptedKeys = ${JSON.stringify(encryptedKeys, null, 2)};
`;

async function writeEncryptedKeys() {
  try {
    await fs.writeFile(encryptedKeysFile, fileContent, 'utf8');
    console.log('API keys encrypted successfully');
  } catch (error) {
    console.error('Error writing encrypted keys:', error);
  }
}

writeEncryptedKeys();