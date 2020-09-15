import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import "./Login.css";
import logoImg from "../Resources/logo2.png";
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "../../firebase.config";

firebase.initializeApp(firebaseConfig);

const Login = () => {
  const { register, errors, handleSubmit, watch } = useForm({});
  const password = useRef({});
  password.current = watch("password", "");

  // const [signIn, setSingIn] = useState([]);

  const [newUserInfo, setNewUserInfo] = useState(false);

  const provider = new firebase.auth.GoogleAuthProvider();

  const [user, setUser] = useState({
    isSignedIn: false,
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    error: "",
  });

  // console.log(user);

  const onSubmit = (data) => {
    setUser(data);
    if (newUserInfo && user.email && user.password) {
      firebase
        .auth()
        .createUserWithEmailAndPassword(user.email, user.password)
        .then((res) => {
          const newUser = { ...user };
          newUser.error = "";
          newUser.success = true;
          setUser(newUser);
          console.log(res);
        })
        .catch((error) => {
          const newUser = { ...user };
          newUser.error = error.message;
          newUser.success = false;
          setUser(newUser);
        });
    }

    if (!newUserInfo && user.email && user.password) {
      firebase
        .auth()
        .signInWithEmailAndPassword(user.email, user.password)
        .then((res) => {
          const newUser = { ...user };
          newUser.error = "";
          newUser.success = true;
          setUser(newUser);
          console.log(res);
        })
        .catch((error) => {
          const newUser = { ...user };
          newUser.error = error.message;
          newUser.success = false;
          setUser(newUser);
        });
    }
  };

  return (
    <div className="login container">
      <div className="row">
        <div className="col-md-3"></div>
        <div className="col-md-6">
          <img src={logoImg} className="img-fluid" alt="some" />
          <br />
          <form onSubmit={handleSubmit(onSubmit)} className="m-4">
            {newUserInfo && (
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
            )}
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
                value={newUserInfo ? "Sign up" : "Sing In"}
              />
              <br />
              <span
                className="mt-4"
                style={{ color: "red", marginTop: "20px", cursor: "pointer" }}
                onClick={() => setNewUserInfo(!newUserInfo)}
              >
                <h4>Already have a account?</h4>
              </span>
            </div>
            <p style={{ color: "red" }}> {user.error} </p>
            {user.success && (
              <p style={{ color: "green" }}>
                {" "}
                User {newUserInfo ? "created" : "Logged In"} successfully{" "}
              </p>
            )}
          </form>
        </div>
        <div className="col-md-3"></div>
      </div>
    </div>
  );
};

export default Login;
