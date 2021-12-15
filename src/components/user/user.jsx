import React, {useState} from 'react';
import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut} from 'firebase/auth';
import {useUser,} from 'reactfire';
import PostController from '../post/postController';
import '../user/user.css';

function User() {
    const { status, data: user } = useUser();
    const auth = getAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    if (status === 'loading') {
        return <span>loading...</span>;
    }

    async function signIn() {
        try {
            createUserWithEmailAndPassword(auth, email, password);
            setEmail('');
            setPassword('');
        } catch(error) {
            console.log(error);
        }
    }

    async function logIn() {
        try {
            signInWithEmailAndPassword(auth, email, password);
            setEmail('');
            setPassword('');
        } catch(error) {
            console.log(error);
        }
    }

    function logOut() {
        try {
            signOut(auth);
        } catch(error) {
            console.log(error);
        }
    }

    if (user) {
        return (
            <div>
                <h6>Bienvenido, {user.email}</h6>
                <button onClick={logOut}>Log out</button>
                <PostController username={user.email} />
            </div>
        );
    }

    return (
        <div className="loginDiv">
            <h3>Log in with email</h3>
            <input
                type='text'
                value={email}
                placeholder='Email'
                onChange={(e) => setEmail(e.target.value)}
            />
            <br/>
            <input
                type='password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <br/>
            <button onClick={logIn}>Log in</button>
            <br/>
            <button onClick={signIn}>Sign in</button>
        </div>
    );
}
export default User;