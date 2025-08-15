
import * as admin from 'firebase-admin';

// This function ensures that the private_key in the service account JSON
// is correctly formatted. Firebase credentials need the newline characters.
function formatServiceAccount(): admin.ServiceAccount | undefined {
  const serviceAccountKey = process.env.FIREBASE_SERVICE_ACCOUNT_KEY;
  if (!serviceAccountKey) {
    console.error('FIREBASE_SERVICE_ACCOUNT_KEY environment variable not set.');
    return undefined;
  }

  try {
    const parsedKey = JSON.parse(serviceAccountKey);
    // The private key from an environment variable might have its newlines escaped.
    // We need to replace '\\n' with '\n'.
    parsedKey.private_key = parsedKey.private_key.replace(/\\n/g, '\n');
    return parsedKey;
  } catch (e) {
    console.error('Failed to parse FIREBASE_SERVICE_ACCOUNT_KEY:', e);
    return undefined;
  }
}


if (!admin.apps.length) {
  const serviceAccount = formatServiceAccount();
  if (serviceAccount) {
    try {
      admin.initializeApp({
        credential: admin.credential.cert(serviceAccount),
      });
    } catch (error) {
      console.error('Error initializing Firebase Admin SDK:', error);
      throw new Error('Could not initialize Firebase Admin SDK. Please check your service account credentials.');
    }
  } else {
     // This empty initialization will prevent crashes but auth/db will not work.
     // It relies on the error logging above to inform the developer.
     console.warn("Firebase Admin SDK not initialized due to missing or invalid credentials.");
  }
}

export const auth = admin.apps.length ? admin.auth() : ({} as admin.auth.Auth);
export const db = admin.apps.length ? admin.firestore() : ({} as admin.firestore.Firestore);
