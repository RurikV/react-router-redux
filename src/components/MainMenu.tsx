import { FC } from "react";
import { Link } from "react-router-dom";
import { RouteNames } from "../router/router";


export const MainMenu: FC = () => {
    return (
        <div className="main-menu">
            <Link to={RouteNames.HOME_PAGE}>Main Page</Link>
            <Link to={RouteNames.LOGIN}>Login</Link>
            <Link to={RouteNames.REGISTER}>Register</Link>
        </div>
    );
};
