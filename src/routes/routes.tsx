import { Routes, Route } from 'react-router-dom';
import { Desktop } from '../pages/Desktop';
import { Login } from '../pages/Login';
import { Loading } from '../pages/Loading';
import { TurnOn } from '../pages/TurnOn';

export function Navigation() {
    return(
        <Routes>
            <Route element={<TurnOn/>} path="/" />
            <Route element={<Desktop/>} path="/Desktop" />
            <Route element={<Login/>} path="/Login" />
            <Route element={<Loading/>} path="/Loading" />
        </Routes>
    )
}