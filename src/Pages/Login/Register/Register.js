import React from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const Register = () => {

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

    const handleRegister = async (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        await createUserWithEmailAndPassword(email, password);
    }
    return (
        <form onSubmit={handleRegister}>
            <input type="text" name="name" id="" placeholder='Your Name' />

            <input type="email" name="email" id="" placeholder='Email Address' required />

            <input type="password" name="password" id="" placeholder='Password' required />
            <input
                className='w-50 mx-auto btn btn-primary mt-2'
                type="submit"
                value="Register" />
        </form>
    );
};

export default Register;