import React from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const Account = () => {
    const { user } = useAuth();
    const { displayName, uid, photoUrl  } = user;

    return (
        <div>
            <h1> Account </h1>
            {user?.displayName ?
                <div>
                    <img src={photoUrl} alt="" />
                    <h2>Name : {displayName}</h2>
                    <h4>ID :{uid}</h4>
                    <p>Last Sign in :{user.metadata.lastSignInTime.slice(0, 17)}</p>
                    <br />
                    <br />
                    <p>Login By:-{user.providerData[0].providerId}</p>
                </div>:
                <NavLink to="/login">Please Login</NavLink>
            }

        </div>
    );
};

export default Account;