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
        <div className="container py-5 h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                <div className="card shadow-2-strong">
                <div className="card-body p-5 text-center">

                    <h3 className="mb-5">Sign in</h3>

                    <div className="form-outline mb-4">
                    <input type="email" id="typeEmailX-2" className="form-control form-control-lg" value={email} onChange={(e) => setEmail(e.target.value)}/>
                    <label className="form-label" htmlFor="typeEmailX-2">Email</label>
                    </div>

                    <div className="form-outline mb-4">
                    <input type="password" id="typePasswordX-2" className="form-control form-control-lg" value={password} onChange={(e) => setPassword(e.target.value)}/>
                    <label className="form-label" htmlFor="typePasswordX-2">Password</label>
                    </div>

                    <button className="btn btn-primary btn-lg btn-block" type="submit" onClick={logIn}>Log in</button>

                    <hr className="my-4"/>

                    <button className="btn btn-lg btn-block btn-primary" type="submit" onClick={signIn}>Sign in</button>

                </div>
                </div>
            </div>
            </div>
        </div>
    );
}
export default User;