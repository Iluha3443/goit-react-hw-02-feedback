import css from './Notification.module.css';
import React from 'react';

export const Notification = ({ message }) => {

    return (
        <>
            <h4 className={css.notification}>{message}</h4>
        </>
        
    )
};