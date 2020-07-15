import {useState, useEffect} from 'react';

export default function useLocalStorageState(key, defaultVal) {
    // make piece of state based on of value in localstorage (or default)
    const [state, setState] = useState(() => {
        let val;
        try {
            val = JSON.parse(window.localStorage.getItem(key) || String(defaultVal))
        }
        catch (e){
            val = defaultVal
        }
        return val
    });
    // use useEffect to update localstorage whenever the state changes
    useEffect(() => {
        window.localStorage.setItem(key, JSON.stringify(state))
    }, [state])
    return [state, setState]
}
