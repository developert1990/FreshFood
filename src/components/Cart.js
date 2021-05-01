import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { pink } from '@material-ui/core/colors';
import { RiShoppingCart2Line, RiDeleteBin7Line } from 'react-icons/ri';
import { IconButton } from '@material-ui/core';

const useStyles = makeStyles({
    list: {
        width: 350,
    },
    fullList: {
        width: 'auto',
    },
});

export const Cart = ({ cartItems, addToCartAPI, deleteCartItemAPI }) => {
    console.log(`cartItems`, cartItems)
    const classes = useStyles();
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

    const handleIncrease = ({ id, image, price, qty, title }) => {
        addToCartAPI({ id, image, title, price, qty: qty + 1 })
    }

    const handleDecrease = ({ id, image, price, qty, title }) => {
        addToCartAPI({ id, image, title, price, qty: qty - 1 })
    }

    const handleDelete = ({ id }) => {
        deleteCartItemAPI({ id });
    }



    let totalPrice = 0;
    const list = (anchor) => (
        <div
            id="Cart"
            className={clsx(classes.list, {
                [classes.fullList]: anchor === 'top' || anchor === 'bottom',
            })}
            role="presentation"
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List>
                <h1 className="cartTitle">Your Cart</h1>
                {
                    cartItems.length > 0 && cartItems.map((item, index) => {
                        console.log(`item`, item)
                        const { id, image, price, qty, title } = item;
                        totalPrice += parseInt(price * qty);
                        return (
                            <ListItem key={index}>
                                <div className="cartItem">
                                    <img className="img" src={image} alt="foodImg" style={{ width: 70 }} />
                                    <div className="orderItemDetail">
                                        <div className="orderItemName" style={{ fontSize: "15px" }}>{title}</div>
                                        <div className="orderItemCount">
                                            <Button disabled={qty === 1 ? true : false} onClick={() => handleDecrease({ id, image, price, qty, title })}>-</Button>{qty}
                                            <Button onClick={() => handleIncrease({ id, image, price, qty, title })}>+</Button>
                                        </div>
                                    </div>
                                    <IconButton aria-label="delete" className={classes.margin} onClick={() => handleDelete({ id })}>
                                        <RiDeleteBin7Line className="deleteBtn">삭제 버튼</RiDeleteBin7Line>
                                    </IconButton>
                                </div>
                            </ListItem>
                        )
                    })}
                <div className="cartTotalPrice">Price: {totalPrice}</div>
            </List>
        </div>
    );
    return (
        <div>
            <React.Fragment key="right">
                <Button onClick={toggleDrawer("right", true)}><RiShoppingCart2Line style={{ fontSize: 60, color: pink[200] }} />Cart</Button>
                <Drawer anchor="right" open={state["right"]} onClose={toggleDrawer("right", false)}>
                    {list("right")}
                </Drawer>
            </React.Fragment>
        </div>
    )
}













// import React from 'react';

// export const Cart = ({ cartItems }) => {
//     console.log(`cartItems ==> `, cartItems)
//     return (
//         <div className="Cart">
//             <h1 className="cartTitle">Your Cart</h1>
//             <div className="cartItem">
//                 <div className="img">이미지</div>
//                 <div className="orderItemDetail">
//                     <div className="orderItemName">이름</div>
//                     <div className="orderItemCount">+ - 버튼</div>
//                 </div>
//                 <div className="deleteBtn">삭제 버튼</div>
//             </div>
//         </div>
//     )
// }
