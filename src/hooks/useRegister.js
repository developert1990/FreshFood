import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router';
import { registerAction } from '../redux/actions/registerAction';
import { REGISTER_RESET } from '../redux/constants/registerConstant';

export const useRegister = () => {
    const dispatch = useDispatch();
    const { loading, result, error } = useSelector((state) => state.registerStore);
    const registerResetAPI = () => dispatch({ type: REGISTER_RESET });
    const registerAPI = ({ firstName, lastName, email, password }, history) => {
        dispatch(registerAction({ firstName, lastName, email, password }, history))
    };
    return { registerAPI, loading, result, error, registerResetAPI };
}