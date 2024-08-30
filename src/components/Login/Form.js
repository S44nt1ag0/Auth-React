import { useState } from "react"
import { login } from "../../services/auth"
import { SetAuthToken } from "../../services/api"

const Form = () => {

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    const handleSubmit = async (email, pass) => {
       
        if(!email || !pass) {
            console.log("Faltou Parametros!")
            return;
        }

        try {

            const data = await login(email, senha)
            
            if(data.error === true) {
                alert(data.msg)
            } else {
                alert("Logado")
                localStorage.setItem("token", data.token);
                SetAuthToken(data.token);
                window.location.href = '/dash'
            }

        } catch (err){
            throw err
        }

    };

    return (
        <div className="w-1/2 flex flex-col mx-auto mt-20">
            <h1 className="m-auto font-extrabold text-blue-500 text-xl mb-10">Entrar</h1>
            <input className="p-5 bg-slate-50 rounded-sm mb-3" type="text" id="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)}/>
            <input className="p-5 bg-slate-50 rounded-sm mb-5" type="password" id="senha" placeholder="Senha" onChange={(e) => setSenha(e.target.value)} />
            <button className="p-5 rounded-xl shadow-xl bg-blue-500 text-white font-bold" onClick={() => handleSubmit(email, senha)}>Logar</button>
        </div>
    )
}

export default Form