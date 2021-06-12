import React from 'react';
import ReactDOM from 'react-dom';
import Button from './Button.js';
import Card from './Card.js';
import classes from './ErrorModal.module.css';

const Backdrop = (props) => {
    return <div className={classes.backdrop} onClick={props.onConfirm} />
}

const ModalOverlay = props => {
    return <Card className={classes.modal}>
        <header className={classes.header}>
            <h2>{props.title}</h2>
        </header>
        <div className={classes.content}>
            <p>{props.message}</p>
        </div>
        <footer className={classes.actions}>
            <Button onClick={props.onConfirm}>Okei</Button>
        </footer>
    </Card>
}

const ErrorModal = props => {
    return (
        <>
        {ReactDOM.createPortal(<Backdrop onConfirm={props.onConfirm} />, document.getElementById('backdrop-root'))}
        {ReactDOM.createPortal(<ModalOverlay title={props.title} message={props.message} onConfirm={props.onConfirm} />, document.getElementById('overlay-root'))}
        </>
    )
};

export default ErrorModal;