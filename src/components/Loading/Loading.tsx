import React from 'react';
import s from './Loading.module.scss'
import spinner from '../../assets/images/spinner.svg'

const Loading: React.FC<{ isLoading: boolean }> = ({ isLoading }) => {
    return (
        <>
            {isLoading ?
                <img className={s.loading} src={spinner} alt="" />
                : null}
        </>
    )
}

export default Loading;