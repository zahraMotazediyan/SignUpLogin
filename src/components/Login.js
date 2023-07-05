import React, {useState} from "react";

const [data, setData] = useState({
    email: "",
    password: "",
})

const changeHandler = event => {
    setData({
        ...data, [event.target.value]: event.target.value
    })
}

const Login = () => {
    return (
        <div>
            <form>
                <div>
                    <label>Email</label>
                    <input type="email" name="email" value={data.email} onChange={changeHandler}/>
                </div>
                <div>
                    <label>Password</label>
                    <input type="password" name="password" value={data.password}/>
                </div>
            </form>
        </div>
    )
}
export default Login;