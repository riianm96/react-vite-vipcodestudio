import React from 'react';
import InputForm from '../Elements/Input/Index';
import { ButtonFill } from '../Elements/Button';
const FormForgot = (props) => {
    const { title } = props;
    return (
        <div className="w-full">
            <h1
                className="mb-4 text-xl font-semibold text-gray-700 dark:text-gray-200"
            >
                Forgot Password
            </h1>
            <InputForm type="email" label="Email" name="email" id="email" placeholder="example@gmail.com" />
            <ButtonFill url="/login">Recover password</ButtonFill>
        </div>
    )
}

export default FormForgot;