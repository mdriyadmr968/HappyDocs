import { getAuth } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import app from '../firebase.init';
const auth = getAuth(app);

const Details = () => {
     const [user] = useAuthState(auth);
    return (
      <div>
        <h2>this is details page</h2>
        <h5>{user ? user.displayName : "vooooooooooot"}</h5>
        <a href="/">go home</a>
      </div>
    );
};

export default Details;<h2>this is details page</h2>