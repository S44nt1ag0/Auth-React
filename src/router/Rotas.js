import { Route, Routes } from 'react-router-dom';
import RouteGuard from "../components/RouteGuard";
import { SetAuthToken } from "../services/api"
import Home from '../views/Home';
import Dash from '../views/Dash';
import Login from '../views/Login';

const token = localStorage.getItem("token");

if (token) {
  SetAuthToken(token);
}

const Rotas = () => {
    return (
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dash" element={<RouteGuard><Dash /></RouteGuard>} />
      </Routes>
    )
}


export default Rotas