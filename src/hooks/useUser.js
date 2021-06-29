import { useDispatch, useSelector } from 'react-redux';
import { userAuthAction } from '../redux/actions/userAuthAction';

export const useUser = () => {
    const dispatch = useDispatch();
    const { userInfo } = useSelector((state) => state.userStore);
    const authUser = () => dispatch(userAuthAction());
    return { authUser, userInfo };
};
