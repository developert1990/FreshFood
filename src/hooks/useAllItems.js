import { useDispatch, useSelector } from 'react-redux'
import { getAllItemAction } from '../redux/actions/getAllItemAction';

export const useAllItems = () => {
    const getAllItemStore = useSelector((state) => state.getAllItemStore);
    const { isLoading, foods, error } = getAllItemStore;
    const dispatch = useDispatch();
    const fetchAllAPI = () => dispatch(getAllItemAction());

    return { fetchAllAPI, isLoading, foods, error };
}