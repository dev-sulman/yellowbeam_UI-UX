
import * as admin from 'firebase-admin';

// Import the service account key JSON file.
import serviceAccount from '../../sulzx-38b13-firebase-adminsdk-fbsvc-2e8dcdbb67.json';

// This function asserts the type of the imported JSON to satisfy TypeScript.
function isServiceAccount(account: any): account is admin.ServiceAccount {
    return account && typeof account.project_id === 'string' && typeof account.private_key === 'string' && typeof account.client_email === 'string';
}

if (!admin.apps.length) {
  if (isServiceAccount(serviceAccount)) {
    try {
      admin.initializeApp({
        credential: admin.credential.cert(serviceAccount),
      });
    } catch (error: any) {
      // Log the specific error to the console for better debugging.
      console.error('Firebase Admin SDK initialization error:', error.stack);
      throw new Error('Could not initialize Firebase Admin SDK. Please check the service account file.');
    }
  } else {
    // This case handles if the service account file is missing or malformed.
    console.error("Firebase Admin SDK not initialized: Invalid or missing service account data.");
  }
}

// Export the initialized auth and firestore instances.
// The empty objects are a fallback to prevent the app from crashing if initialization fails,
// though in a production scenario, you'd want to handle this more gracefully.
export const auth = admin.apps.length ? admin.auth() : ({} as admin.auth.Auth);
export const db = admin.apps.length ? admin.firestore() : ({} as admin.firestore.Firestore);
