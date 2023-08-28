// path/to/sessionUtils.js
import { getSession } from 'next-auth/react'; // Use your preferred way of session handling

export async function destroySession(session) {
  // Implement your session destruction logic here
  // For example, with NextAuth.js: await signOut({ redirect: false });
  // Clear any user-related session data
  // Assuming you're using NextAuth.js for session management
  try {
    await signOut({ redirect: false }); // Redirect is set to false to prevent automatic redirection
    // Any additional cleanup you need to do
  } catch (error) {
    console.error('Error logging out:', error);
    throw error;
  }
}
