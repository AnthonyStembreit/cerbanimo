import SurfaceApp from './surfaceApp';
import InnerApp from './innerApp';
import { useSelector, useDispatch } from 'react-redux';
import { LOGIN } from './utils/actions';
import { useEffect, React } from 'react';
import axios from 'axios';

export default function App() {
    const dispatch = useDispatch();
    const state = useSelector(state => state);
    console.log(state)
    //for now this variable is to represent whether 
    //or not a user is actively logged in 
    useEffect(() => {
        axios.get('/api/auth/check').then(res => {
            console.log(res.data)
            const userData = res.data
            if (typeof userData === "object") {
                dispatch({ type: LOGIN, userData });
            }
        })
    }, [])
    if (state === undefined) {
        return (
            <SurfaceApp />
        )
    } else if (state.auth === true) {
        if (window.location !== "/#/") {
            window.location.replace("/#/")
        }
        return (
            <InnerApp  />
        )
    } else {
        if (window.location !== "/#/") {
            window.location.replace("/#/")
        }
        return (
            <SurfaceApp />
        )
    }

}