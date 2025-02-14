import CryptoJS from 'crypto-js';
import { config } from 'dotenv';
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Load environment variables
config();

const ENCRYPTION_KEY = process.env.ENCRYPTION_KEY;
if (!ENCRYPTION_KEY) {
  console.error('Error: ENCRYPTION_KEY environment variable is not set');
  process.exit(1);
}

// API keys to encrypt
const apiKeys = {
  newsapi: process.env.NEWSAPI_KEY,
  mediastack: process.env.MEDIASTACK_KEY,
  apitube: process.env.APITUBE_KEY,
  rapidapi: process.env.RAPIDAPI_KEY,
  worldnews: process.env.WORLDNEWS_KEY
};

// Validate required API keys
for (const [key, value] of Object.entries(apiKeys)) {
  if (!value) {
    console.error(`Error: ${key.toUpperCase()}_KEY environment variable is not set`);
    process.exit(1);
  }
}

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
    process.exit(1);
  }
}

writeEncryptedKeys();