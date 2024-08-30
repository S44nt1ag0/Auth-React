import { useEffect } from "react"
import Form from "../components/Login/Form"

const Login = () => {

    useEffect(() => {
        document.title = "Login";
    }, [])

    return (
        <div className="w-1/2 mx-auto flex">
            <Form />
        </div>
    )
}

export default Login