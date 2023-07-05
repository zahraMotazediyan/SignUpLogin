import React, {useState} from "react";

const [data, setData]
-useState({
    email: "",
    password: "",
})
const Login = () => {
    return (
        <div>
            <form>
                <div>
                    <label>Email</label>
                    <input type="email" name="email" value={data.email}/>
                </div>
                <div>
                    <label>Password</label>
                    <input type="password" name="password" value={data.password}/>
                </div>
            </form>
        </div>
    )
}
