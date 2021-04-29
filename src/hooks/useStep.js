import { useSelector } from 'react-redux';

export const useStep = () => {
    const step = useSelector((state) => state.stepStore);
    return { step };
};
