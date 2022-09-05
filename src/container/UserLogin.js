import React, { useState } from "react";
import { Link } from "react-router-dom";
import * as yup from "yup";
import { Formik, useFormik, Form } from "formik";
import { useDispatch } from "react-redux";
import {
  GoogleSigninAction,
  loginAction,
  resetPasswordAction,
  signupAction,
} from "../redux/action/auth.action";

function UserLogin(props) {
  const [userType, setUserType] = useState("login");
  const dispatch = useDispatch();
  let schemaObj, initVal;

  if (userType === "login") {
    schemaObj = {
      email: yup
        .string()
        .email("Please enter valid email")
        .required("email is require"),
      password: yup.string().required("Please enter password"),
    };
    initVal = {
      email: "",
      password: "",
    };
  } else if (userType === "signup") {
    schemaObj = {
      fname: yup.string().required("Please enter name"),
      email: yup
        .string()
        .email("Please enter valid email")
        .required("email is require"),
      spassword: yup.string().required("Please enter password"),
    };
    initVal = {
      fname: "",
      email: "",
      spassword: "",
    };
  } else {
    schemaObj = {
      email: yup
        .string()
        .email("Please enter valid email")
        .required("email is require"),
    };
    initVal = {
      email: "",
    };
  }

  let schema = yup.object().shape(schemaObj);
  const formikObj = useFormik({
    initialValues: initVal,
    validationSchema: schema,
    onSubmit: (values, action) => {
      if (userType === "signup") {
        dispatch(signupAction(values));
      } else if (userType === "login") {
        dispatch(loginAction(values));
      } else if (userType === "f_pwd") {
        dispatch(resetPasswordAction(values.email));
      }
      action.resetForm();
    },
  });
  const { handleChange, errors, handleSubmit, handleBlur, touched } = formikObj;

  const handleGoogleSignup = () => {
    dispatch(GoogleSigninAction());
  };

  return (
    <>
      <section className="signin-page account">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-md-offset-3">
              <div className="block text-center">
                <Link className="logo" to="/">
                  <img src="source/images/logo.png" alt="logo" />
                </Link>
                {userType === "f_pwd" ? (
                  <h2 className="text-center">reset password</h2>
                ) : userType === "login" ? (
                  <h2 className="text-center">Welcome Back</h2>
                ) : (
                  <h2 className="text-center">Welcome</h2>
                )}
                <Formik values={formikObj}>
                  <Form className="text-left clearfix" onSubmit={handleSubmit}>
                    {userType === "f_pwd" ? (
                      <>
                        <p>
                          Please enter the email address for your account. A
                          password reset sent to your email address (maybe in spam). Once
                          recieved the link, click on the link and you will be able to choose a new
                          password for your account.
                        </p>

                        <div className="form-group mb-0">
                          <input
                            name="email"
                            type="email"
                            className="form-control"
                            placeholder="Email"
                            onChange={handleChange}
                            onBlur={handleBlur}
                          />
                        </div>
                        {touched.email && errors.email ? (
                          <span className="form-error ">{errors.email}</span>
                        ) : null}
                      </>
                    ) : userType === "login" ? (
                      <>
                        <div className="form-group">
                          <input
                            name="email"
                            type="email"
                            className="form-control"
                            placeholder="Email"
                            onChange={handleChange}
                            onBlur={handleBlur}
                          />
                          {touched.email && errors.email ? (
                            <span className="form-error">{errors.email}</span>
                          ) : null}
                        </div>
                        <div className="form-group">
                          <input
                            name="password"
                            type="password"
                            className="form-control"
                            placeholder="Password"
                            onChange={handleChange}
                            onBlur={handleBlur}
                          />
                          {touched.password && errors.password ? (
                            <span className="form-error">
                              {errors.password}
                            </span>
                          ) : null}
                        </div>
                      </>
                    ) : null}

                    {userType === "signup" ? (
                      <>
                        <div className="form-group">
                          <input
                            type="text"
                            name="fname"
                            className="form-control"
                            placeholder="Full name"
                            onChange={handleChange}
                            onBlur={handleBlur}
                          />
                          {touched.fname && errors.fname ? (
                            <span className="form-error">{errors.fname}</span>
                          ) : null}
                        </div>
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Email"
                            name="email"
                            onChange={handleChange}
                            onBlur={handleBlur}
                          />
                          {touched.email && errors.email ? (
                            <span className="form-error">{errors.email}</span>
                          ) : null}
                        </div>
                        <div className="form-group">
                          <input
                            name="spassword"
                            type="text"
                            className="form-control"
                            placeholder="Set password"
                            onChange={handleChange}
                            onBlur={handleBlur}
                          />
                          {touched.spassword && errors.spassword ? (
                            <span className="form-error">
                              {errors.spassword}
                            </span>
                          ) : null}
                        </div>
                      </>
                    ) : null}

                    <div className="text-center">
                      {userType === "f_pwd" ? (
                        <button
                          type="submit"
                          className="btn btn-main text-center mt-4"
                        >
                          send  link
                        </button>
                      ) : userType === "login" ? (
                        <button
                          type="submit"
                          className="btn btn-main text-center"
                        >
                          Login
                        </button>
                      ) : (
                        <button
                          type="submit"
                          className="btn btn-main text-center"
                        >
                          sign up
                        </button>
                      )}
                    </div>
                  </Form>
                </Formik>
                {userType === "f_pwd" ? (
                  <a onClick={() => setUserType("login")} >
                    Back to log in
                  </a>
                ) : userType === "login" ? (
                  <>
                    <p className="mt-20">
                      New in this site?
                      <a onClick={() => setUserType("signup")}>
                        &nbsp;Create New Account
                      </a>
                    </p>

                    <a onClick={() => setUserType("f_pwd")} className="fs-6">
                      Forgott Password
                    </a>
                  </>
                ) : (
                  <p className="mt-20">
                    Already a user?
                    <a onClick={() => setUserType("login")}> Login </a>
                  </p>
                )}
                {userType !== "f_pwd" ? (
                  <>
                    <h6 className="my-4">-- OR --</h6>
                    <button className="google_btn" onClick={handleGoogleSignup}>
                      Continue with Google
                    </button>
                  </>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default UserLogin;
