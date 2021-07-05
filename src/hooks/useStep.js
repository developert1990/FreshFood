import { useSelector } from 'react-redux'

export const useStep = () => {
    const step = useSelector((state) => state.stepStore);
    const { userInfo } = useSelector((state) => state.userStore);
    return { step, userInfo };
};
