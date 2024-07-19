import {Outlet} from "react-router-dom";
import {Link} from "react-router-dom"


export const App = () => {


    if (__PLATFORM__ === 'desktop') {
        console.log('Desktop platform');
    }

    if (__PLATFORM__ === 'mobile') {
        console.log('Mobile platform');
    }

    return (
        <div data-testid={'App'}>
            <h1>Shop Module</h1>
            <ul>
                <li>
                    <Link to={'/shop/second'}>Shop second</Link>
                </li>
            </ul>
            <hr/>
            <Outlet/>
        </div>

    );
};
