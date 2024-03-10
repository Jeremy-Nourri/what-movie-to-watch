import { signIn, signUp } from "./authSlice";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { removeMessage } from "./authSlice";


const AuthForm = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const inputEmail = useRef(null);
    const inputPassword = useRef(null);
    const inputConfirmPassword = useRef(null);

    const user = useSelector((state) => state.auth.user);
    const message = useSelector((state) => state.auth.message);

    const [isSignUp, setIsSignUp] = useState(false);
    const [errorConfirmPassword, setErrorConfirmPassword] = useState(null);

    useEffect(() => {
        if (user) {
            navigate('/favoris')
        }
    }
    , [user, navigate])

    const removeMessageHandler = () => {
        setInterval(()=> {
            dispatch(removeMessage())
        }, 3000)
    }

    const submitHandler = (e) => {
        e.preventDefault()
        const email = inputEmail.current.value
        const password = inputPassword.current.value
        const confirmPassword = inputConfirmPassword.current?.value

        if (isSignUp) {
            if (password !== confirmPassword) {
                setErrorConfirmPassword('Les mots de passe ne correspondent pas.')
                removeMessageHandler()
            } else {
                dispatch(signUp({ email, password }))
                removeMessageHandler()
            }
        } else {
            dispatch(signIn({ email, password }))
            removeMessageHandler()
        }
    }


    return (
        <div>
            <h2>{isSignUp ? 'Inscription' : 'Connexion'}</h2>

            <form onSubmit={submitHandler}>

                <input type="email" placeholder="Email" ref={inputEmail} />
                <input type="password" placeholder="Mot de passe" ref={inputPassword} />
                {isSignUp && <input type="password" placeholder="Confirmer le mot de passe" ref={inputConfirmPassword} />}
                <button type="submit">{isSignUp ? 'S\'inscrire' : 'Se connecter'}</button>

            </form>

            {message && <p>{message}</p>}
            {errorConfirmPassword && <p>{errorConfirmPassword}</p>}

            <button onClick={() => setIsSignUp(!isSignUp)}>{isSignUp ? 'Déjà un compte ?' : 'Pas encore de compte ?'}</button>
        </div>
    )
}

export default AuthForm