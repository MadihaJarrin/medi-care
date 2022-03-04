import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { NavLink, useHistory, useLocation } from 'react-router-dom';
import initializeAuthentication from '../Firebase/firebase.init';
import useAuth from '../hooks/useAuth';
import "./login.css"
initializeAuthentication();
const Login = () => {
    const { signInUsingGoogle, signInUsingGithub, signInUsingFacebook, error, signin } = useAuth();
    // console.log(signInUsingFacebook);
    const [isLogin, setLogin] = useState(false);
    const checkbox = event => {
        setLogin(event.target.checked);
    }
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const handleEmail = (e) => {
        setEmail(e.target.value)
    }
    const handlepass = (e) => {
        setPass(e.target.value)
    }
    const handleSignin = e => {
        e.preventDefault();
        signin(email, pass)
    }

    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home';

    const handleButton = () => {
        signInUsingGoogle()
            .then(() => {
                history.push(redirect_uri);
            });
    }

    return (
        <div>
            <div className="mt-5  d-flex justify-content-center">
                <div>
                    <Form onSubmit={handleSignin}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control onBlur={handleEmail} type="email" placeholder="Enter your email" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control onBlur={handlepass} type="password" placeholder="Enter Your Password" />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </div>
            </div>
            <br />
            <NavLink id="register-ask" to="/register">Are you a New User ??</NavLink>
            <NavLink to={
                isLogin ?
                    "/login" :
                    "register"
            }><input type="checkbox" name="" onChange={checkbox} /></NavLink>

            <br />
            <br />
            <p className="text-danger fw-bolder">{error}</p>
            <p>
                ------ or use one of these options -----</p>
            <div className="login-2">
                <Button onClick={handleButton} className="bg-white mx-3"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQI-zXnqYiwy7oV786GGgKR0fnQeqnlRDGkaUAbSts2UgHdlbd8pq61uJLWNXUCFcqTCbc&usqp=CAU" alt="" /></Button>
                <Button onClick={signInUsingGithub} className="bg-white mx-3"><img src="https://e7.pngegg.com/pngimages/914/758/png-clipart-computer-icons-logo-github-github-logo-logo-computer-program-thumbnail.png" alt="" /></Button>
                <Button onClick={signInUsingFacebook} className="bg-white mx-3"><img src="https://static.xx.fbcdn.net/rsrc.php/v3/yu/r/-UrAiCz94rq.png" alt="" /></Button>

            </div>
        </div>
    );
};

export default Login;