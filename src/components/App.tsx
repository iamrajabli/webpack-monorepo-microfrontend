import classes from './App.module.scss';

export const App = () => {
    return (
        <div>
            <h1>Hello World</h1>
            <p>It's me, your first React component!</p>
            <button className={classes.button}>Don't touch me</button>
        </div>
    );
};
