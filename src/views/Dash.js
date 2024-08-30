
import { useEffect } from "react";
import { SetAuthToken } from "../services/api"

const Dash = () => {

    const logout = () => {
        alert("Deslogado...")
        localStorage.removeItem('token');
        SetAuthToken(null);
        window.location.href = '/login';
    }

    useEffect(() => {
        
        document.title = "Dash";

        const token = localStorage.getItem('token');
        SetAuthToken(token);
    
        const verificarToken = async () => {
            try {
                console.log("verificado!")
            } catch (error) {
                localStorage.removeItem('token');
                SetAuthToken(null);
            }
        };
    
        verificarToken();

    }, []);

    return (
        <div className="w-1/2 mx-auto mt-8 flex items-center">
            <img className="w-24 h-24 object-cover rounded-full shadow-xl cursor-pointer" src="https://i.pinimg.com/originals/9b/93/99/9b9399bc33f7bcf41e8c352fa74cecdd.gif" />
            <div className="w-full pl-4">
                <h3 className=" text-black font-bold">Bem Vindo!</h3>
                <h3 className="text-xl  font-extrabold text-blue-500">Santiago</h3>
            </div>
            <button className="p-4 float-end rounded-xl w-24 text-white shadow-xl font-bold bg-blue-500" onClick={logout}> Sair </button>
        </div>
    )
}

export default Dash