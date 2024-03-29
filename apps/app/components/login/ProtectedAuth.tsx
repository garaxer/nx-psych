import { useAuth0 } from '@auth0/auth0-react';
import React from 'react';

const ProtectedAuth = ({ children }: { children: React.ReactNode }) => {
  const auth = useAuth0();
  if (!auth.isAuthenticated) {
    console.log({ auth });
    if (auth.error) {
      return <h1> Error authenticating</h1>;
    }
    if (auth.isLoading) {
      return <h1>Authenticating please wait...</h1>;
    }
    return <h1>Please login</h1>;
  }

  return <>{children}</>;
};

export default ProtectedAuth;
