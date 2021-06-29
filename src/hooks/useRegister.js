import { useDispatch, useSelector } from 'react-redux'
import { registerAction } from '../redux/actions/registerAction';
import { REGISTER_RESET } from '../redux/constants/registerConstant';

export const useRegister = () => {
    const dispatch = useDispatch();
    const { loading, userInfo, error } = useSelector((state) => state.registerStore);
    const registerResetAPI = () => dispatch({ type: REGISTER_RESET });
    const registerAPI = ({ firstName, lastName, email, password }) => {
        dispatch(registerAction({ firstName, lastName, email, password }))
    };
    return { registerAPI, loading, userInfo, error, registerResetAPI };
}