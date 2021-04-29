import { Snackbar } from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}
const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        '& > * + *': {
            marginTop: theme.spacing(2),

        },
    },
}));

export const MessageBox = ({ handleAlertClose, message, open }) => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Snackbar open={open} autoHideDuration={1800} onClose={handleAlertClose} >
                <Alert variant="filled" severity={"error"}>
                    <h2>Error</h2>
                    <h3>{message}</h3>
                </Alert>
            </Snackbar>
        </div>
    )
}
