import { useEffect, useState } from "react";


function useDebounce(value, delay = 500){
    const [debouncedValue, setDebouncedValue] = useState('');

    useEffect(() => {
        const id = setTimeout(() => {
            console.log("Setting a new timeout");            
            setDebouncedValue(value);
        }, delay)

        return () => {
            console.log("Clearing a new timeout");
            clearTimeout(id);
        }

    }, [value, delay])

    return debouncedValue
}
export default useDebounce;