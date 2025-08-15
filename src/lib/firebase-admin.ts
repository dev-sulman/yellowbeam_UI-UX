
import * as admin from 'firebase-admin';
import serviceAccount from '../../sulzx-38b13-firebase-adminsdk-fbsvc-2e8dcdbb67.json';

// This function asserts the type of the imported JSON.
function isServiceAccount(account: any): account is admin.ServiceAccount {
    return account && typeof account.project_id === 'string' && typeof account.private_key === 'string' && typeof account.client_email === 'string';
}

if (!admin.apps.length) {
    if (isServiceAccount(serviceAccount)) {
        try {
            admin.initializeApp({
                credential: admin.credential.cert(serviceAccount),
            });
        } catch (error) {
            console.error('Error initializing Firebase Admin SDK:', error);
            throw new Error('Could not initialize Firebase Admin SDK. Please check the service account file.');
        }
    } else {
        console.error("Firebase Admin SDK not initialized due to missing or invalid service account data.");
    }
}

export const auth = admin.apps.length ? admin.auth() : ({} as admin.auth.Auth);
export const db = admin.apps.length ? admin.firestore() : ({} as admin.firestore.Firestore);
