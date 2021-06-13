import { useSelector } from 'react-redux'

// separation of concerns
export const useItems = () => {
    const getAllItemStore = useSelector((state) => state.getAllItemStore);
    const { isLoading, foods, error } = getAllItemStore;
    return { isLoading, foods, error };
}