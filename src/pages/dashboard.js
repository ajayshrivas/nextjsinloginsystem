import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
export default function Dashboard() {
  const router = useRouter();

  useEffect(() => {
    async function fetchSessionData() {
      try {
        const response = await fetch('/api/session'); // Replace with your API route
        const data = await response.json();
        console.log(data);
        if (!data.user) {
          // User is not authenticated, redirect to login page
          router.push('/login');
        }
      } catch (error) {
        // Handle error, possibly redirect to an error page
        console.error('Error fetching session data:', error);
      }
    }

    fetchSessionData();
  }, []);

  return (
    <div>
      <h1>Welcome to the Dashboard</h1>
      {/* Dashboard content */}
      <Link href={'/logout'}>Logout</Link>
    </div>
  );
}
