import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import * as yup from 'yup';
import { Formik, useFormik, Form } from 'formik';
// import { } from 'formik'


function UserLogin(props) {
    const [userType, setUserType] = useState('login');

    const fNameRef = useRef();
    const lNameRef = useRef();
    const uNameRef = useRef();
    const mailRef = useRef();
    const passRef = useRef();

    const getVal = () => {
        console.log(`Your name is ${fNameRef.current.value} ${lNameRef.current.value} and${uNameRef.current.value} is  your username and mail id is ${mailRef.current.value}`);
    }

    // form validation
    let schema = yup.object().shape({
        name: yup.string().required('Please enter name'),
        email: yup.string().email('Please neter valid email').required('email is require'),
    });

    const formikObj = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            username: '',
            email: '',
            password: '',
        },
        validationSchema: schema,
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        }
    });
    const {handleChange, errors, handleSubmit} = formikObj;


    return (
        <>
            <section className="signin-page account">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-md-offset-3">
                            <div className="block text-center">
                                <Link className="logo" to='/'>
                                    <img src="source/images/logo.png" alt='logo' />
                                </Link>
                                {userType === 'f_pwd' ? <h2 className="text-center">reset password</h2> :
                                    userType === 'login' ? <h2 className="text-center">Welcome Back</h2> : <h2 className="text-center">Welcome</h2>
                                }
                               <Formik values={formikObj}>
                               <Form className="text-left clearfix" onSubmit={handleSubmit}>
                                    {
                                        userType === 'f_pwd' ?
                                            <>
                                                <p>Please enter the email address for your account. A verification code will be sent to you. Once you have received the verification code, you will be able to choose a new password for your account.</p>
                                                <div className="form-group">
                                                    <input type="email" className="form-control" placeholder="Email" />
                                                </div>
                                            </>
                                            :
                                            userType === 'login' ?
                                                <div className="form-group">
                                                    <input type="email" className="form-control" placeholder="Email" />
                                                </div>
                                                :
                                                <>  
                                                <p className='form-error'>{errors.name}</p>   
                                                    <div className="form-group">
                                                        <input type="text" name='name' className="form-control" placeholder="First name" ref={fNameRef} onChange={handleChange}/>
                                                    </div>
                                                    
                                                </>
                                    }


                                    {
                                        userType === 'f_pwd' ?
                                            null
                                            :
                                            userType === 'login' ?
                                                <div className="form-group">
                                                    <input type="password" className="form-control" placeholder="Password" />
                                                </div>
                                                :
                                                <div className="form-group">
                                                    <input type="text" className="form-control" placeholder="Last name" ref={lNameRef} />
                                                </div>
                                    }

                                    {/* username | email | password */}
                                    {userType === 'login' || userType === 'f_pwd' ?
                                        null
                                        :
                                        <>
                                            <div className="form-group">
                                                <input type="text" className="form-control" placeholder="Username" ref={uNameRef} />
                                            </div>
                                            <div className="form-group">
                                                <p className='form-error'>{errors.email}</p>   
                                                <input type="text" className="form-control" placeholder="Email" ref={mailRef} name='email' onChange={handleChange} />
                                            </div>
                                            <div className="form-group">
                                                <input type="text" className="form-control" placeholder="Set password" ref={passRef} />
                                            </div>
                                        </>
                                    }

                                    <div className="text-center">
                                        {
                                            userType === 'f_pwd' ?
                                                <button type="submit" className="btn btn-main text-center">Request password reset</button>
                                                :
                                                userType === 'login' ? 
                                                <button type="submit" className="btn btn-main text-center">Login</button> :

                                                <button type="submit" className="btn btn-main text-center" onClick={getVal} onSubmit={handleSubmit}>sign up</button>
                                        }
                                    </div>
                                </Form>
                               </Formik>
                                {
                                    userType === 'f_pwd' ?
                                        <a onClick={() => setUserType('login')} className='mt-20' >Back to log in</a>
                                        :
                                        userType === 'login' ?
                                            <>
                                                <p className="mt-20">New in this site ?
                                                    <a onClick={() => setUserType('signup')}> Create New Account</a></p>

                                                <a onClick={() => setUserType('f_pwd')} className='fs-6'> Forgott Password</a>
                                            </>
                                            :
                                            <p className="mt-20">Already a user?<a onClick={() => setUserType('login')}> Login</a></p>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
}

export default UserLogin;