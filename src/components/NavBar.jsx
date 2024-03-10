import { NavLink } from "react-router-dom";

const NavBar = () => {
    return (
        <nav className="hidden lg:block">
            <ul className="flex gap-4">
                <li>
                    <NavLink className="btn btn-sm btn-accent text-white" to="/">
                        Accueil
                    </NavLink>
                </li>
                <li>
                    <NavLink className="btn btn-sm btn-secondary" to="/topten">Top 10</NavLink>
                </li>
                <li>
                    <NavLink className="btn btn-sm btn-secondary" to="/tendances">Tendance</NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default NavBar;
