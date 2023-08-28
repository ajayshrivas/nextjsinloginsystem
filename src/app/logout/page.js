'use client';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import LoadingIndicator from '../../components/LoadingIndicator';
function LogoutButton() {

    const router = useRouter();
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
  
           try {
            
            useEffect(() => {
                fetch('/api/logout', { method: 'POST' })
                  .then(response => {
                    setData(response);
                    setIsLoading(false);
                  })
                  .catch(error => {
                    console.error('Error fetching data:', error);
                    setIsLoading(false);
                  });
              }, []);
            router.push('/login'); // Redirect to the login page after logout
            } catch (error) {
            // Handle error, e.g., display an error message
            console.error('Logout failed:', error);
            }
   
 // return <button onClick={handleLogout}>Log Out</button>;
      
    return(
        <div>
        {isLoading ? (
        <LoadingIndicator />
        ) : (
            <div>
            {/* Display your content here */}
            </div>
        )}
        </div>
        );
}

export default LogoutButton;
