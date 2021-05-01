import { useDispatch, useSelector } from 'react-redux'
import { addToCartAction } from '../redux/actions/addToCartAction';
import { deleteCartItemAction } from '../redux/actions/deleteCartItemAction';
import { getAllItemAction } from '../redux/actions/getAllItemAction';

export const useItems = () => {
    const getAllItemStore = useSelector((state) => state.getAllItemStore);
    const cartStore = useSelector((state) => state.cartStore);
    const { cartItems } = cartStore;
    const { isLoading, foods, error } = getAllItemStore;
    const dispatch = useDispatch();
    const fetchAllAPI = () => dispatch(getAllItemAction());
    const addToCartAPI = ({ id, image, title, price, qty }) => dispatch(addToCartAction({ id, image, title, price, qty }));
    const deleteCartItemAPI = ({ id }) => dispatch(deleteCartItemAction({ id }));
    return { fetchAllAPI, isLoading, foods, error, addToCartAPI, cartItems, deleteCartItemAPI };
}