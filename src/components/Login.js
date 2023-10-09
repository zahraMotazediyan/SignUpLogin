import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import styles from "../styles/Login.module.css";
import {validate} from "../utils/validate";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import {notify} from "../utils/toast";

const Login = () => {
    const [data, setData] = useState({});

    const changeHandler = event => {
        setData({
            ...data, [event.target.name]: event.target.value
        })
    }
    const [errors, setError] = useState({});
    const [touched, setTouched] = useState({});

    useEffect(() => {
        console.log(data)
        setError(validate(data, "login"))
    }, [data, touched])

    const focusHandler = event => {
        setTouched({...touched, [event.target.name]: true})
    }

    const submitHandler = (event) => {
        event.preventDefault();
        if (!Object.keys(errors).length) {
            notify("You login is successful", "success")
        } else {
            notify("invalid data", "error")
            setTouched({
                email: true,
                password: true
            })
        }
    }

    return (
        <div className={styles.container}>
            <form onSubmit={submitHandler} className={styles.formContainer}>
                <h2 className={styles.header}>Login</h2>
                <div className={styles.formField}>
                    <label>Email</label>
                    <input
                        className={(errors.email && touched.email) ? styles.uncompleted : styles.formInput}
                        type="text"
                        name="email"
                        value={data.email}
                        onChange={changeHandler}
                        onFocus={focusHandler}/>
                    {errors.email && touched.email && <span>{errors.email}</span>}
                </div>
                <div className={styles.formField}>
                    <label>Password</label>
                    <input
                        className={(errors.email && touched.email) ? styles.uncompleted : styles.formInput}
                        type="password"
                        name="password"
                        value={data.password}
                        onChange={changeHandler}
                        onFocus={focusHandler}/>
                    {errors.password && touched.password && <span>{errors.password}</span>}
                </div>
                <div className={styles.formButton}>
                    <Link to="/signup">signup</Link>
                    <button type="submit">Login</button>
                </div>
            </form>
            <ToastContainer/>
        </div>
    )
}

export default Login;