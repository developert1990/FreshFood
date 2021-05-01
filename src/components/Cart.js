import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import { StyledBadge } from '../config/materialUIStyle';
import { CartList } from './CartList';

export const Cart = ({ cartItems, addToCartAPI, deleteCartItemAPI }) => {
    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setState({ ...state, [anchor]: open });
    };

    return (
        <div className="cartDrawerControler">
            <React.Fragment key="right">
                <StyledBadge badgeContent={cartItems.length} color="secondary">
                    <Button onClick={toggleDrawer("right", true)}><ShoppingCartOutlinedIcon style={{ fontSize: "35px" }} /></Button>
                    <Drawer anchor="right" open={state["right"]} onClose={toggleDrawer("right", false)}>
                        <CartList anchor="right" toggleDrawer={toggleDrawer} cartItems={cartItems} addToCartAPI={addToCartAPI} deleteCartItemAPI={deleteCartItemAPI} />
                    </Drawer>
                </StyledBadge>
            </React.Fragment>
        </div>
    )
}
