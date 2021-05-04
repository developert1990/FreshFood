import { makeStyles } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/core/styles';
import Badge from '@material-ui/core/Badge';

export const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 245,
        height: 400
    },
    media: {
        height: 240,
    },
    formControl: {
        marginLeft: theme.spacing(2),
        width: 110,
    },
    selectEmpty: {
        marginTop: theme.spacing(0),
    },
    list: {
        width: 520,
    },
    fullList: {
        width: 'auto',
    },
    margin: 1,
}));

export const StyledBadge = withStyles((theme) => ({
    badge: {
        fontSize: "15px",
        right: 10,
        top: 13,
        border: `2px solid ${theme.palette.background.paper}`,
        padding: '0 10px',
    },
}))(Badge);