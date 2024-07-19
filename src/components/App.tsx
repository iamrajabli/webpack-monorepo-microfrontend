import classes from './App.module.scss';
import {Link, Outlet} from "react-router-dom";

import margaret from '@/assets/margaret_hamilton.png';

export const App = () => {


    if(__PLATFORM__ === 'desktop') {
        console.log('Desktop platform');
    }

    if(__PLATFORM__ === 'mobile') {
        console.log('Mobile platform');
    }

    return (
        <div data-testid={'App'}>
            <ul data-testid={'Navbar'}>
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

            <h1>Who is Margaret Hamilton?</h1>
            <p>
                One of the many contributors to this effort was Margaret Hamilton, a computer scientist who led the
                Software Engineering Division of the MIT Instrumentation Laboratory, which in 1961 contracted with NASA
                to develop the Apollo program's guidance system.
            </p>

            <img src={margaret} width={500} height={300} alt='Margaret Hamilton'/>
            <hr/>
            <Outlet/>
        </div>

    );
};
