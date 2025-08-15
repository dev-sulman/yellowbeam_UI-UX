
import * as admin from 'firebase-admin';
import path from 'path';
import fs from 'fs';

if (!admin.apps.length) {
  // Determine the correct path to the service account key file.
  // The process.cwd() gives the root of the project directory.
  const serviceAccountPath = path.join(process.cwd(), 'sulzx-38b13-firebase-adminsdk-fbsvc-2e8dcdbb67.json');

  if (!fs.existsSync(serviceAccountPath)) {
    throw new Error(`Service account key file not found at ${serviceAccountPath}. Please ensure the file exists.`);
  }
  
  const serviceAccount = JSON.parse(fs.readFileSync(serviceAccountPath, 'utf8'));

  try {
    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
    });
  } catch (error) {
    console.error('Error initializing Firebase Admin SDK:', error);
    throw new Error('Could not initialize Firebase Admin SDK. Please check the service account file.');
  }
}

export const auth = admin.auth();
export const db = admin.firestore();
