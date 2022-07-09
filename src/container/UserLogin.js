import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import * as yup from "yup";
import { Formik, useFormik, Form } from "formik";

function UserLogin(props) {
  const [userType, setUserType] = useState("login");

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
      lname: yup.string().required("Please enter name"),
      uname: yup.string().required("Please enter name"),
      email: yup
        .string()
        .email("Please enter valid email")
        .required("email is require"),
      spassword: yup.string().required("Please enter password"),
    };
    initVal = {
      fname: "",
      lname: "",
      uname: "",
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
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  const { handleChange, errors, handleSubmit, handleBlur, touched } = formikObj;

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
                          verification code will be sent to you. Once you have
                          received the verification code, you will be able to
                          choose a new password for your account.
                        </p>
                        {touched.name && errors.name ? (
                          <span className="form-error">{errors.name}</span>
                        ) : null}
                        <div className="form-group">
                          <input
                            name="email"
                            type="email"
                            className="form-control"
                            placeholder="Email"
                            onChange={handleChange}
                            onBlur={handleBlur}
                          />
                        </div>
                      </>
                    ) : userType === "login" ? (
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
                    ) : (
                      <>
                        <div className="form-group">
                          <input
                            type="text"
                            name="fname"
                            className="form-control"
                            placeholder="First name"
                            onChange={handleChange}
                            onBlur={handleBlur}
                          />
                          {touched.fname && errors.fname ? (
                            <span className="form-error">{errors.fname}</span>
                          ) : null}
                        </div>
                      </>
                    )}

                    {userType === "f_pwd" ? null : userType === "login" ? (
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
                          <span className="form-error">{errors.password}</span>
                        ) : null}
                      </div>
                    ) : (
                      <div className="form-group">
                        <input
                          name="lname"
                          type="text"
                          className="form-control"
                          placeholder="Last name"
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        {touched.lname && errors.lname ? (
                          <span className="form-error">{errors.lname}</span>
                        ) : null}
                      </div>
                    )}

                    {/* username | email | password */}
                    {userType === "login" || userType === "f_pwd" ? null : (
                      <>
                        <div className="form-group">
                          <input
                            name="uname"
                            type="text"
                            className="form-control"
                            placeholder="Username"
                            onChange={handleChange}
                            onBlur={handleBlur}
                          />
                          {touched.uname && errors.uname ? (
                            <span className="form-error">{errors.uname}</span>
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
                    )}

                    <div className="text-center">
                      {userType === "f_pwd" ? (
                        <button
                          type="submit"
                          className="btn btn-main text-center"
                        >
                          Request password reset
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
                  <a onClick={() => setUserType("login")} className="mt-20">
                    Back to log in
                  </a>
                ) : userType === "login" ? (
                  <>
                    <p className="mt-20">
                      New in this site ?
                      <a onClick={() => setUserType("signup")}>
                        Create New Account
                      </a>
                    </p>

                    <a onClick={() => setUserType("f_pwd")} className="fs-6">
                      Forgott Password
                    </a>
                  </>
                ) : (
                  <p className="mt-20">
                    Already a user?
                    <a onClick={() => setUserType("login")}> Login</a>
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default UserLogin;
