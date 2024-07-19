import {Outlet} from "react-router-dom";

export const App = () => {


    if (__PLATFORM__ === 'desktop') {
        console.log('Desktop platform');
    }

    if (__PLATFORM__ === 'mobile') {
        console.log('Mobile platform');
    }

    return (
        <div data-testid={'App'}>
            <h1>Admin Module</h1>
            <hr/>
            <Outlet/>
        </div>

    );
};
