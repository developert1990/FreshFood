import { useDispatch, useSelector } from 'react-redux'
import { signInAction } from '../redux/actions/signInAction';
import { userAuthAction } from '../redux/actions/userAuthAction';

export const useSignIn = () => {
    const signInStore = useSelector((state) => state.signInStore);
    const dispatch = useDispatch();
    const { loading, userInfo, err } = signInStore;
    const authUser = () => dispatch(userAuthAction());
    const signInAPI = ({ email, password }) => dispatch(signInAction({ email, password }));
    return { loading, userInfo, err, signInAPI, authUser };
}