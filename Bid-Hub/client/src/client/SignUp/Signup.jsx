


import React, { useState } from 'react';
import axios from 'axios'; // Import axios
import { NavLink } from 'react-router-dom';
import { useAlert } from 'react-alert';
import login from '../images/login.svg';
import register from '../images/register.svg';
import "./signupstyle.scss";

const Signup = () => {
  const alert = useAlert();
  const [flag, setFlag] = useState(true); // Changed initial state to true

  const [user, setUser] = useState({
    name: "", email: "", phone: "", password: "", cpassword: ""
  });

  const handleInputs = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  }

  const PostData = async (e) => {
    e.preventDefault();

    const { name, email, phone, password, cpassword } = user;

    try {
      const response = await axios.post("http://localhost:5345/register", {
        name,
        email,
        phone,
        password,
        cpassword
      });

      if (response.status === 201) { // Changed status check to 201
        alert.success("Registration Successful");
        setFlag(!flag);
      } else {
        const data = response.data;
        alert.error(data.error);
      }
    } catch (error) {
      console.error('Error occurred:', error);
      alert.error("Registration failed");
    }
  }

  return (
    <>
      <div className="signupcls" data-aos="fade-up" data-aos-delay="400">
        <div className='row'>
          <div className='col-10 mx-auto'>
            <div className={`container ${flag ? 'sign-up-mode' : null}`}>
              <div className="forms-container">
                <div className="signin-signup">
                  <form method='POST' className="sign-in-form">
                  <h2 className="title">Sign in</h2>
                    <div className="input-field">
                      <i className="fas fa-user"></i>
                      <input type="email" placeholder="Email" name='email' autoComplete='off' />
                    </div>
                    <div className="input-field">
                      <i className="fas fa-lock"></i>
                      <input type="password" placeholder="Password" name='password' autoComplete='off' />
                    </div>
                    <input type="submit" value="Login" className="btn solid" name='signin' />
                    <p className="social-text">Or Sign in with social platforms</p>
                    <div className="social-media">
                      <a href="#" className="social-icon">
                        <i className="fab fa-facebook-f"></i>
                      </a>
                      <a href="#" className="social-icon">
                        <i className="fab fa-twitter"></i>
                      </a>
                      <a href="#" className="social-icon">
                        <i className="fab fa-google"></i>
                      </a>
                      <a href="#" className="social-icon">
                        <i className="fab fa-linkedin-in"></i>
                      </a>
                    </div>
                  </form>

                  <form method='POST' className="sign-up-form">
                  <h2 className="title">Sign up</h2>
                    <div className="input-field">
                      <i className="fas fa-user"></i>
                      <input type="text" name="name" placeholder="Username" autoComplete='off' onChange={handleInputs} />
                    </div>
                    <div className="input-field">
                      <i className="fas fa-envelope"></i>
                      <input type="email" name="email" placeholder="Email" autoComplete='off' onChange={handleInputs} />
                    </div>
                    <div className="input-field">
                      <i className="fas fa-envelope"></i>
                      <input type="number" name="phone" placeholder="Phone Number" autoComplete='off' pattern="[0-9]{10}" onChange={handleInputs} />
                    </div>
                    <div className="input-field">
                      <i className="fas fa-lock"></i>
                      <input type="password" name="password" placeholder="Password" autoComplete='off' onChange={handleInputs} />
                    </div>
                    <div className="input-field">
                      <i className="fas fa-lock"></i>
                      <input type="password" name="cpassword" placeholder="Conform Password" autoComplete='off' onChange={handleInputs} />
                    </div>
                    <input type="submit" className="btn" name='signup' value="Sign up" onClick={PostData} />
                    <p className="social-text">Or Sign up with social platforms</p>
                    <div className="social-media">
                      <a href="#" className="social-icon">
                        <i className="fab fa-facebook-f"></i>
                      </a>
                      <a href="#" className="social-icon">
                        <i className="fab fa-twitter"></i>
                      </a>
                      <a href="#" className="social-icon">
                        <i className="fab fa-google"></i>
                      </a>
                      <a href="#" className="social-icon">
                        <i className="fab fa-linkedin-in"></i>
                      </a>
                    </div>
                  </form>
                </div>
              </div>
              <div className="panels-container">
                <div className="panel left-panel">
                <div className="content">
                    <h3>Haven't an account?</h3>
                    <p>Get Started with a free account!!</p>
                    <NavLink exact className="nav-link-signup" to="/signup">
                      <button className="btn transparent" id="sign-up-btn" onClick={() => setFlag(!flag)}>Sign up</button>
                    </NavLink>
                  </div>
                  <img src={register} className="image" alt="" />
                </div>
                <div className="panel right-panel">
                <h3>Already have an account?</h3>
                    <p>Log in first to start with bestbid!!</p>
                    <NavLink exact className="nav-link-signin" to="/signin">
                      <button className="btn transparent" id="sign-in-btn" onClick={() => setFlag(!flag)}>Sign in</button>
                    </NavLink>
                  </div>
                  <img src={login} className="image" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      
    </>
  );
};

export default Signup;
