import { useEffect } from "react";

const Home = () => {

    const redirect = () => {
        window.location.href = "/login";
    }

    useEffect(() => {
        document.title = "Home";
    }, [])

    return (
        
        <div className="w-1/2  mx-auto">
            <div className="w-full  mt-36 flex flex-col items-center">
                <h1 className="m-auto font-bold text-2xl text-blue-500">🎉 Authenticação</h1>
                <a className="font-bold">Projeto Desenvolvido Usando ReactJs no FrontEnd NodeJS para API BackEnd</a>
                <button className="bg-blue-400 p-5 rounded-lg shadow-lg text-white font-extrabold mt-10 w-1/6" onClick={redirect}> Testar </button>
            </div>
        </div>

    )
}

export default Home