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
            <React.Fragment key="left">
                <StyledBadge badgeContent={cartItems.length} color="secondary">
                    <Button onClick={toggleDrawer("left", true)}><ShoppingCartOutlinedIcon style={{ fontSize: "35px" }} /></Button>
                    <Drawer ModalProps={{ disableScrollLock: true }} anchor="left" open={state["left"]} onClose={toggleDrawer("left", false)}>
                        <CartList anchor="left" toggleDrawer={toggleDrawer} cartItems={cartItems} addToCartAPI={addToCartAPI} deleteCartItemAPI={deleteCartItemAPI} />
                    </Drawer>
                </StyledBadge>
            </React.Fragment>
        </div>
    )
}
