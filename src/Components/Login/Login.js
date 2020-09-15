import React from "react";
import { useForm } from "react-hook-form";
import "./Login.css";
import logoImg from "../Resources/logo2.png";

const Login = () => {
  const { register, errors, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div className="login container">
      <div className="row">
        <div className="col-md-3"></div>
        <div className="col-md-6">
          <img src={logoImg} className="img-fluid" />
          <br />
          <form onSubmit={handleSubmit(onSubmit)} className="m-4">
            <div className="form-group" style={{ textAlign: "center" }}>
              <input
                name="fullName"
                className="form-control"
                placeholder="Full Name"
                ref={register({ required: true })}
              />{" "}
              <br />
              <span style={{ color: "red" }}>
                {errors.fullName && "Full name required"}
              </span>
            </div>
            <div className="form-group" style={{ textAlign: "center" }}>
              <input
                name="email"
                placeholder="Email"
                className="form-control"
                ref={register({ required: true, pattern: /\S+@\S+\.\S+/ })}
              />
              <br />
              <span style={{ color: "red" }}>
                {errors.email && "Email is required"}
              </span>
            </div>
            <div className="form-group" style={{ textAlign: "center" }}>
              <input
                name="password"
                placeholder="Password"
                className="form-control"
                ref={register({ required: true })}
              />{" "}
              <br />
              <span style={{ color: "red" }}>
                {errors.password && "Password not match"}
              </span>
            </div>
            <div className="form-group" style={{ textAlign: "center" }}>
              <input
                name="confirmPassword"
                placeholder="Confirm Password"
                className="form-control"
                ref={register({ required: true })}
              />
              <br />
              <span style={{ color: "red" }}>
                {errors.confirmPassword && "Password not match"}
              </span>
            </div>
            <div style={{ textAlign: "center" }}>
              <input
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
