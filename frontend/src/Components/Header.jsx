import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import { useAuth } from "../Services/AuthContext";

// import logo from "../assets/Trellis.com.png";


const Header = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const { authUser,
            setAuthUser,
            isLoggedIn,
            setIsLoggedIn,
            userId,
            setUserId } = useAuth();


    const loginStatus = () => {
        if (isLoggedIn) {
            return <i style={{ fontSize: "2rem" }} className="bi bi-person-check"></i>
        } else {
            return <i style={{ fontSize: "2rem" }} className="bi bi-person-dash"></i>
        }
    }

    const locationHandler = (path) => {
        switch (location.pathname) {
            case ('/home'):
                return path === '/home' ? { color: 'blue' } : {};
            case ('/todos'):
                return path === '/todos' ? { color: 'blue' } : {};
            case ('/about'):
                return path === '/about' ? { color: 'blue' } : {};
            case ('/login'):
                return path === '/login' ? { color: 'blue' } : {};
            case ('/signin'):
                return path === '/signin' ? { color: 'blue' } : {};
            default:
                return {};
        }
    }

    const iconStatus = () => {
        if(authUser.Name != 'Guest'){
            return(<i className="bi bi-house-fill" style={{fontSize: "1.5rem",
    color: "#E36f1e"}}></i>);
        }else{
            return(<i className="bi bi-house" style={{fontSize: "1.5rem",
    color: "gray"}}></i>)
        }
    }


    return (
        <>
            <div id="applicationHeader">
                <header id="appHeader">
                    <span id="appName" onClick={() => navigate('/home')} style={{cursor:"pointer"}}>
                        <img src="/Trellis.com.png" alt="Trellis" />
                    </span>
                    <div style={{position: "absolute", left:"13vw"}}>
                        {/* <span><i className="bi bi-house-fill" style={{fontSize: "1.5rem",
    color: "#E36f1e"}}></i>{authUser.Name}</span> */}
                        <span>{iconStatus()}{authUser.Name}</span>
                    </div>
                    <ul id="navUl">
                        <li style={locationHandler('/home')}
                            onClick={() => navigate('/home')}
                        >Home</li>
                        <li style={locationHandler('/todos')}
                            onClick={() => navigate('/todos')}
                        >Todos</li>
                        <li style={locationHandler('/about')}
                            onClick={() => navigate('/about')}
                        >About</li>
                        <li id="loginLi" style={locationHandler('/login')}
                            onClick={() => navigate('/login')}
                        >{loginStatus()}</li>
                        <li style={locationHandler('/signin')}
                            onClick={() => navigate('/signin')}
                        >Sign-in</li>
                    </ul>
                </header>
            </div>
        </>
    )
}
export default Header;