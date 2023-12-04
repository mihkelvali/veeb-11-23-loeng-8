import { Outlet } from "react-router-dom";
import StyledLink from "../components/StyledLink";

const Nav = () => {
    return (
        <nav style={{ display: 'flex', gap: 24 }}>
            <StyledLink to="/">Home</StyledLink>
            <StyledLink to="/contact">Contact</StyledLink>
        </nav>
    )
};

const Layout = () => {
    return (
        <div className="App">
            <header className="App-header">
                <Nav />
                <Outlet />
            </header>
        </div>
    )
};

export default Layout;
