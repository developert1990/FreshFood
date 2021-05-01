import { Snackbar } from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';
import React from 'react';

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export const MessageBox = ({ handleAlertClose, message, open }) => {
    return (
        <div>
            <Snackbar open={open} autoHideDuration={1800} onClose={handleAlertClose} >
                <Alert variant="filled" severity={"error"}>
                    <h2>Error</h2>
                    <h3>{message}</h3>
                </Alert>
            </Snackbar>
        </div>
    )
}
