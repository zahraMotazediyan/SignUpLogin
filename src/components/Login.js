import React, {useEffect, useState} from "react";
import {validate} from "../utils/validate";

const [data, setData] = useState({
    email: "",
    password: "",
});

const [errors,setErrors]=useState({});
const [touched,setTouched]=useState({});

const changeHandler = event => {
    setData({
        ...data, [event.target.value]: event.target.value
    })
}

useEffect(()=>{
    setErrors(validate(data))
},[data,touched]);


 const focusHandler=event=>{
     setTouched({...touched,[event.target.value]:true})
 }

const Login = () => {
    return (
        <div>
            <form>
                <div>
                    <label>Email</label>
                    <input type="email" name="email" value={data.email} onChange={changeHandler} onFocus={focusHandler}/>
                </div>
                <div>
                    <label>Password</label>
                    <input type="password" name="password" value={data.password} onChange={changeHandler} onFocus={focusHandler}/>
                </div>
                <div>
                    <a href="#">signup</a>
                    <button type="submit">Login</button>
                </div>
            </form>
        </div>
    )
}
export default Login;