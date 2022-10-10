import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import { useNavigate, Link } from "react-router-dom";
import Logo from "../images/logo-player2.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Register() {
    const navigate = useNavigate();
    const toastOptions = {
        position: "top-right",
        autoClose: 6000,
        pauseOnHover: true,
        draggable: true,
        theme: "dark",
    };

    const [values, setValues] = useState({
        firstName: "",
        lastName:  "",
        age: null,
        email: "",
        password: "",
        confirmPassword: "",
      });

      useEffect(() => {
        if (localStorage.getItem(process.env.REACT_APP_LOCALSTORAGE_KEY)) {
          navigate("/");
        }
      }, []);

      function handleChange(event){
        setValues({ ...values, [event.target.name]: event.target.value });
      }

      function handleValidation(){
        const { password, confirmPassword, firstName, lastName, email, age } = values;
        if (password !== confirmPassword) {
          toast.error(
            "👾 Password and confirm password should be same.",
            toastOptions
          );
          return false;
        } else if (firstName.length < 3) {
          toast.error(
            "👾 First name should be greater than 3 characters.",
            toastOptions
          );
          return false;
        } else if (lastName.length < 3) {
            toast.error(
              "👾 Last name should be greater than 3 characters.",
              toastOptions
            );
            return false;
        } else if (age < 13) {
            toast.error(
              "👾 You should be at least 13 years old to join in the community.",
              toastOptions
            );
            return false;
        } else if (password.length < 8) {
          toast.error(
            "👾 Password should be equal or greater than 8 characters.",
            toastOptions
          );
          return false;
        } else if (email === "") {
          toast.error("👾 Email is required.", toastOptions);
          return false;
        }
    
        return true;
      }

      async function handleSubmit(event){
        event.preventDefault();
        if (handleValidation()) {
          const { firstName, lastName, age, email, password, confirmPassword } = values;
          const api = process.env.REACT_APP_API_HOST + "/register"
          const { data } = await axios.post(api, {
            firstName,
            lastName,
            age: Number(age),
            email,
            password,
            confirmPassword
          });
    
          if (data.status === false) {
            toast.error("👾" + data.msg, toastOptions);
          }
            navigate("/login");
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
                placeholder="First Name"
                name="firstName"
                onChange={(e) => handleChange(e)}
              />
              <input
                type="text"
                placeholder="Last Name"
                name="lastName"
                onChange={(e) => handleChange(e)}
              />
              <input
                type="number"
                min={13}
                max={90}
                name="age"
                onChange={(e) => handleChange(e)}
              />
              <input
                type="email"
                placeholder="Email"
                name="email"
                onChange={(e) => handleChange(e)}
              />
              <input
                type="password"
                placeholder="Password"
                name="password"
                onChange={(e) => handleChange(e)}
              />
              <input
                type="password"
                placeholder="Confirm Password"
                name="confirmPassword"
                onChange={(e) => handleChange(e)}
              />
              <button type="submit">Create User</button>
              <span>
                Already have an account ? <Link to="/login">Login.</Link>
              </span>
            </form>
          </FormContainer>
          <ToastContainer />
        </>
    );
}

const FormContainer = styled.div``