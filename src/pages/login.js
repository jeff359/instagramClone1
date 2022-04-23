/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
/* eslint-disable indent */
/* eslint-disable quotes */
/* eslint-disable linebreak-style */
/* eslint-disable eol-last */
/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/react-in-jsx-scope */
import { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import FirebaseContext from "../context/firebase";
/* eslint-disable linebreak-style */
function Login() {
    // eslint-disable-next-line no-unused-vars
    const history = useNavigate();
    const { firebase } = useContext(FirebaseContext);
    const [emailAddress, setEmailAddress] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const isInvalid = password === '' || emailAddress === '';
    const handleLogin = async (event) => {};
    useEffect(() => {
        document.title = 'Login - Instagram';
    }, []);
  return (<p>I am the login page</p>);
}
export default Login;