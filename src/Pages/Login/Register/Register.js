import React from 'react';
import { useForm } from "react-hook-form";

const Register = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register("firstName", { required: true })} />
            <input {...register("lastName")} />
            <input type="number" {...register("age", { min: 18, max: 99 })} />
            <input type="submit" />
        </form>
    );
};

export default Register;