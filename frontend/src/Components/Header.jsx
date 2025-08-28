import { useLocation, useNavigate } from "react-router-dom";

const Header = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const locationHandler = (path) => {
        switch(location.pathname){
            case ('/home'):
                return path === '/home' ? {color: 'blue'} : {};
            case('/todos'):
                return path === '/todos' ? {color: 'blue'} : {};
            case('/about'):
                return path === '/about' ? {color: 'blue'} : {};
            case('/login'):
                return path === '/login' ? {color: 'blue'} : {};
            case('/signin'):
                return path === '/signin' ? {color: 'blue'} : {};
            default:
                return{};
        }
    }

    return(
        <div id="applicationHeader">
            <header id="appHeader">
                    <h1 id="appName">Trellis</h1>
                        <ul id="navUl">
                            <li style={locationHandler('/home')}
                                onClick={ () => navigate('/home')}
                            >Home</li>
                            <li style={locationHandler('/todos')}
                                onClick={() => navigate('/todos')}
                            >Todos</li>
                            <li style={locationHandler('/about')}
                                onClick={() => navigate('/about')}
                            >About</li>
                            <li style={locationHandler('/login')}
                                onClick={() => navigate('/login')}
                            >Login</li>
                            <li style={locationHandler('/signin')}
                                onClick={() => navigate('/signin')}
                            >Sign-in</li>
                        </ul>
            </header>
        </div>
    )
}
export default Header;