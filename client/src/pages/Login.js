import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import { useNavigate, Link } from "react-router-dom";
import Logo from "../images/logo-player2.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Login() {
    const navigate = useNavigate();
    const [values, setValues] = useState({ password: "", password: "" });
    const toastOptions = {
        position: "bottom-right",
        autoClose: 8000,
        pauseOnHover: true,
        draggable: true,
        theme: "dark",
    }

    useEffect(() => {
        if (localStorage.getItem(process.env.REACT_APP_LOCALSTORAGE_KEY)) {
        navigate("/");
        }
    }, []);

    function handleChange(event){
        setValues({ ...values, [event.target.name]: event.target.value });
    };

    function validateForm(){
        const { email, password } = values;
        if (email === "") {
          toast.error("Email and Password is required.", toastOptions);
          return false;
        } else if (password === "") {
          toast.error("Email and Password is required.", toastOptions);
          return false;
        }
        return true;
    }

    function handleSubmit(event){
        event.preventDefault();
        if(validateForm()){
            const { email, password } = values;
            const api = process.env.REACT_APP_API_HOST + "/login"
            const promise = axios.post(api, {
            email,
            password,
            });

            promise.then((response)=>{
                localStorage.setItem(
                    process.env.REACT_APP_LOCALSTORAGE_KEY,
                    JSON.stringify(response.data)
                    );
                    
                    navigate("/");
            }).catch((err)=>{
                toast.error("👾" + err.response.data, toastOptions);
            });
        }
    }

    return (
        <>
            <FormContainer>
            <form action="" onSubmit={(event) => handleSubmit(event)}>
                <div className="brand">
                    <img src={Logo} alt="logo" />
                    <h1>snappy</h1>
                </div>
                <input
                    type="text"
                    placeholder="Email"
                    name="email"
                    onChange={(e) => handleChange(e)}
                    min="3"
                />
                <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    onChange={(e) => handleChange(e)}
                />
                <button type="submit">Log In</button>
                <span>
                    Don't have an account ? <Link to="/register">Create One.</Link>
                </span>
            </form>
            </FormContainer>
            <ToastContainer />
        </>
    );
}

const FormContainer = styled.div``