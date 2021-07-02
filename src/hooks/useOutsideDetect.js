import { useState, useEffect, useRef } from 'react';

export default function useOutsideDetect(initialIsVisible) {
    const [isComponentVisible, setIsComponentVisible] = useState(initialIsVisible);
    const ref = useRef(null);

    const handleClickOutside = (event) => {
        if (ref.current && !ref.current.contains(event.target)) {
            // detect outside of specified component
            setIsComponentVisible(false);
        } else {
            // detect inside of specified component
            setIsComponentVisible(true);
        }
    };

    useEffect(() => {
        document.addEventListener('click', handleClickOutside, true);
        document.addEventListener('focus', handleClickOutside, true);
        return () => {
            document.removeEventListener('click', handleClickOutside, true);
            document.removeEventListener('focus', handleClickOutside, true);
        };
    });

    return { ref, isComponentVisible, setIsComponentVisible };
}