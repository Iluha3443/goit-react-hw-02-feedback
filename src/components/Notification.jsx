import css from './Notification.module.css'

export const Notification = ({message}) => {

    return (
        <>
            <h4 className={css.notification}>{message}</h4>
        </>
        
    )
}