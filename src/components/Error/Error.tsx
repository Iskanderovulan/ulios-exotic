import React from 'react';
import s from './Error.module.scss'

const Error: React.FC<{ error: any }> = ({ error }) => {
    if (!error) return null;
    const errorMessage = 'message' in error ? error.message : 'An error occurred';
    return <p className={s.error}>Error: {errorMessage}</p>;
}

export default Error;