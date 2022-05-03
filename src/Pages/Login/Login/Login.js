import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import PageTitle from '../../Shared/PageTitle/PageTitle';

const Login = () => {
    const emailRef = useRef('');
    const passRef = useRef('');
    const navigate = useNavigate();

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const handleSubmit = async event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const pass = passRef.current.value;
        await signInWithEmailAndPassword(email, pass);
    }
    const navigateRegister = event => {
        navigate('/register');
    }
    return (
        <div>
            <div className='container w-50 mx-auto'>
                <PageTitle title="Login"></PageTitle>
                <h2 className='text-primary text-center mt-2'>Please Login</h2>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Control ref={passRef} type="password" placeholder="Password" required />
                    </Form.Group>
                    <Button variant="primary w-50 mx-auto d-block mb-2" type="submit">
                        Login
                    </Button>
                </Form>

                <p>New to Saltburn Inventory? <Link to="/register" className='text-primary pe-auto text-decoration-none' onClick={navigateRegister}>Please Register</Link> </p>
                <p>Forget Password? <button className='btn btn-link text-primary pe-auto text-decoration-none'>Reset Password</button> </p>


            </div>
        </div>
    );
};

export default Login;