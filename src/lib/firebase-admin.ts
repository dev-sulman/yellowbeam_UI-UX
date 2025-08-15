
import * as admin from 'firebase-admin';

if (!admin.apps.length) {
  const serviceAccountKey = process.env.FIREBASE_SERVICE_ACCOUNT_KEY;
  if (!serviceAccountKey) {
    throw new Error('FIREBASE_SERVICE_ACCOUNT_KEY environment variable is not set. Please add it to your .env file.');
  }

  try {
    // The key might be a stringified JSON or a direct JSON object depending on the environment.
    // Parsing it ensures it's a valid object for the cert function.
    const serviceAccount = typeof serviceAccountKey === 'string' 
      ? JSON.parse(serviceAccountKey) 
      : serviceAccountKey;

    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
    });
  } catch (error) {
    console.error('Error parsing Firebase service account key:', error);
    throw new Error('Could not initialize Firebase Admin SDK. Please ensure FIREBASE_SERVICE_ACCOUNT_KEY is a valid JSON.');
  }
}

export const auth = admin.auth();
export const db = admin.firestore();
