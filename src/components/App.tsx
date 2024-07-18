import classes from './App.module.scss';
import {Link, Outlet} from "react-router-dom";

export const App = () => {
    return (
        <div>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/shop">Shop</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
            </ul>
            <h1>Hello World</h1>
            <p>It's me, your first React component!</p>
            <button className={classes.button}>Don't touch me</button>

            <hr/>
            <Outlet/>
        </div>

    );
};
