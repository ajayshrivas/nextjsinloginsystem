import { useSession } from 'next-auth/react';

function MyComponent() {
  const { data: session } = useSession();

  return (
    <div>
      {!session ? (
        <button onClick={() => signIn('facebook')}>Log in with Facebook</button>
      ) : (
        <p>Welcome, {session.user.name}</p>
      )}
    </div>
  );
}

export default MyComponent;
