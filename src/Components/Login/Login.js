import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import "./Login.css";
import logoImg from "../Resources/logo2.png";

const Login = () => {
  const { register, errors, handleSubmit, watch } = useForm({});
  const [signIn, setSingIn] = useState([]);
  const password = useRef({});
  password.current = watch("password", "");

  console.log(signIn);

  const onSubmit = (data) => {
    setSingIn(data);
  };

  return (
    <div className="login container">
      <div className="row">
        <div className="col-md-3"></div>
        <div className="col-md-6">
          <img src={logoImg} className="img-fluid" alt="some" />
          <br />
          <form onSubmit={handleSubmit(onSubmit)} className="m-4">
            <div className="form-group" style={{ textAlign: "center" }}>
              <input
                name="fullName"
                className="form-control"
                placeholder="Full Name"
                ref={register({
                  required: "Name required",
                  minLength: {
                    value: 5,
                    message: "Name should be 5 characters",
                  },
                })}
              />{" "}
              <br />
              <span style={{ color: "red" }}>
                {errors.fullName && errors.fullName.message}
              </span>
            </div>
            <div className="form-group" style={{ textAlign: "center" }}>
              <input
                name="email"
                placeholder="Email"
                className="form-control"
                ref={register({
                  required: "Email is required",
                  validate: (value) =>
                    value.includes("@") || "Email must include '@' symbol",
                })}
              />
              <br />
              <span style={{ color: "red" }}>
                {errors.email && errors.email.message}
              </span>
            </div>
            <div className="form-group" style={{ textAlign: "center" }}>
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="form-control"
                ref={register({
                  required: "You must specify a password",
                  minLength: {
                    value: 8,
                    message: "Password mus have at least 8 characters",
                  },
                })}
              />{" "}
              <br />
              <span style={{ color: "red" }}>
                {errors.password && errors.password.message}
              </span>
            </div>
            <div className="form-group" style={{ textAlign: "center" }}>
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                className="form-control"
                ref={register({
                  validate: (value) =>
                    value === password.current || "The passwords did not match",
                })}
              />
              <br />
              <span style={{ color: "red" }}>
                {errors.confirmPassword && errors.confirmPassword.message}
              </span>
            </div>
            <div style={{ textAlign: "center" }}>
              <input
                // disabled
                className="btn btn-primary"
                type="submit"
                value="Sign in"
              />
            </div>
          </form>
        </div>
        <div className="col-md-3"></div>
      </div>
    </div>
  );
};

export default Login;
