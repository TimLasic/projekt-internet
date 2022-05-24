import { useEffect, useContext } from 'react';
import { UserContext } from '../userContext';
import { Navigate } from 'react-router-dom';

function Signout(){
    const userContext = useContext(UserContext);
    useEffect(function(){
        const signout = async function(){
            userContext.setUserContext(null);
            const res = await fetch("https://projekt-glz.herokuapp.com/users/logout");
        }
        signout();
    }, []);

    return (
        <Navigate replace to="/" />
    );
}

export default Signout;