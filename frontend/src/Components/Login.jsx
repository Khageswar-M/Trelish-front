import { useState } from "react";
import { UserLogin } from "../Services/TodoServices";
import { useNavigate, useLocation } from "react-router-dom";

const Login = () => {
    const [isLogin, setIsLogin] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [userId, setUserId] = useState('');

    const [errorMessage, setErrorMessage] = useState(null);


    const navigate = useNavigate();
    const location = useLocation();

    const handleError = (responseStatus) => {
        switch (responseStatus) {
            case (500):
                return 'User ID already registered, try another one!';
            default:
                return 'Something went wrong!';
        }
    }


    const handleLogin = async (e) => {
        e.preventDefault();

        console.log(`Email: ${email}`);
        console.log(`Password: ${password}`);

        try {
            const response = await UserLogin({ email, password });
            const userIdFromApi = response.data.userId;
            setUserId(userIdFromApi);
            setIsLogin(true);
            if (response.ok) {
                navigate('/todos', { state: { userId: userIdFromApi, isLogin: true } });
            }
            setErrorMessage(null);
            console.log(response.data);
        } catch (error) {
            if (error.response) {
                setErrorMessage(handleError(error.response.status));
            } else {
                setErrorMessage(handleError(500));
            }
        }
    }

    const currentOperation = () => {
        if (location.pathname === '/login') {
            return 'Login';
        } else {
            return 'Sign-in';
        }
    }

    return (
        <>
        {
            errorMessage && (
                <div id="errorAlert" class="alert alert-warning" role="alert">
                    {errorMessage}
                </div>
            )
        }
        <div id="formContainer">
            <form id="loginForm" onSubmit={handleLogin}>
                
                <h1 style={{ color: "black" }}>{currentOperation()}</h1>
                <div id="getEmailInput">
                    <label
                        htmlFor="emailInput"
                        className="form-label"
                    >User name</label> <br />
                    <input
                        type="text"
                        placeholder="Enter your user name"
                        id="emailInput"
                        className="form-control"
                        onChange={(e) => setEmail(e.target.value)}
                        maxLength={20}
                        required
                    />
                    <div
                        id="emailHelp"
                        className="form-text"
                    ></div>
                </div>

                <div id="getPasswordInput">
                    <label
                        htmlFor="passwordInput"
                        className="form-label"
                    >Password</label><br />
                    <input
                        id="passwordInput"
                        className="form-control"
                        type="text"
                        placeholder="Enter password"
                        onChange={(e) => setPassword(e.target.value)}
                        maxLength={10}
                        required
                    />
                </div>

                <div id="formSubmitBtn">
                    <button
                        type="submit"
                        id="loginSubmitBtn"
                        className="btn btn-primary"
                    >Login</button>
                </div>
            </form>
        </div>
        </>
    )
}
export default Login;