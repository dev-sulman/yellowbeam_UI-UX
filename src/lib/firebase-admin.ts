
import * as admin from 'firebase-admin';

const serviceAccount = {
  projectId: process.env.FIREBASE_PROJECT_ID,
  clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
  privateKey: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
} as admin.ServiceAccount;

if (!admin.apps.length) {
  try {
    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
    });
  } catch (error: any) {
    console.error('Firebase Admin SDK initialization error:', error.stack);
    throw new Error('Could not initialize Firebase Admin SDK. Please check your service account credentials in the environment variables.');
  }
}

export const auth = admin.auth();
export const db = admin.firestore();
