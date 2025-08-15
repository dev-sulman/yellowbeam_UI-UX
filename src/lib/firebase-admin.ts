
import * as admin from 'firebase-admin';

if (!admin.apps.length) {
  const serviceAccountKey = process.env.FIREBASE_SERVICE_ACCOUNT_KEY;
  if (!serviceAccountKey) {
    throw new Error('FIREBASE_SERVICE_ACCOUNT_KEY environment variable is not set. Please add it to your .env file.');
  }

  try {
    // The key is a string that needs to be parsed into a JSON object.
    // The private_key field within the JSON often contains newlines (\n) that need to be correctly handled.
    const serviceAccount = JSON.parse(serviceAccountKey);

    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
    });
  } catch (error) {
    console.error('Error initializing Firebase Admin SDK:', error);
    throw new Error('Could not initialize Firebase Admin SDK. Please ensure FIREBASE_SERVICE_ACCOUNT_KEY is a valid JSON string in your environment variables.');
  }
}

export const auth = admin.auth();
export const db = admin.firestore();
