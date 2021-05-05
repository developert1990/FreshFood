
import { useDispatch, useSelector } from 'react-redux'
import { addToCartAction } from '../redux/actions/addToCartAction';
import { deleteCartItemAction } from '../redux/actions/deleteCartItemAction';
export const useStep = () => {
    const step = useSelector((state) => state.stepStore);
    const cartStore = useSelector((state) => state.cartStore);
    const { cartItems } = cartStore;
    const dispatch = useDispatch();
    const addToCartAPI = ({ id, image, title, price, qty }) => dispatch(addToCartAction({ id, image, title, price, qty }));
    const deleteCartItemAPI = ({ id }) => dispatch(deleteCartItemAction({ id }));
    return { step, cartItems, addToCartAPI, deleteCartItemAPI };
};
