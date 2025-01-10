import React, { useContext, useEffect, useRef, useState } from 'react';
import Logo from '../assets/Login-bro.png';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from '../Provider/AuthProvider';
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import useAxiosPublic from '../hooks/useAxiosPublic';
import SocialLogin from '../components/SocialLogin';

function Login() {
  const axiosPublic= useAxiosPublic()
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const captchaRef = useRef(null);
  const [error, setError] = useState('');
  const [captchaError, setCaptchaError] = useState('');
  const [loading, setLoading] = useState(false);
  const [disable, setDisable] = useState(true);
  const { user, loginUser } = useContext(AuthContext);
  
  // Initialize navigate function
  const navigate = useNavigate();

  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  // This useEffect will trigger when the `user` value changes
  useEffect(() => {
    if (user) {
      navigate('/'); // Redirect to home if the user is logged in
    }
  }, [user, navigate]); // Runs whenever `user` changes

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      // Attempt to login the user
      await loginUser(email, password)
      .then(res=>{
        const userInfo={
          name : data.name,
          email:data.email
        }
        axiosPublic.post('/users',userInfo)
        .then(res=>{
          if(res.data.insertedId){
            console.log('saidee')
          }
        })

      })
    



    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const doSubmit = () => {
    const userCaptchaValue = captchaRef.current.value;
    if (validateCaptcha(userCaptchaValue)) {
      setCaptchaError('');
      setDisable(false); // Enable the login button once captcha is validated
    } else {
      setCaptchaError('Captcha does not match. Please try again.');
      captchaRef.current.value = ''; // Clear the captcha input
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <Helmet>
        <title>Bistro Boss | Login</title>
      </Helmet>
      <div className="hero bg-base-200 rounded-lg shadow-lg p-6 md:p-12">
        <div className="hero-content flex flex-col md:flex-row items-center">
          <div className="text-center md:text-left mb-6 md:mb-0">
            <img className="mx-auto md:w-9/12" src={Logo} alt="Login illustration" />
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form className="card-body" onSubmit={handleSubmit}>
              {error && <div className="alert alert-error text-red-600">{error}</div>}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="Email"
                  className="input input-bordered focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="Password"
                  className="input input-bordered focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <label className="label">
                  <LoadCanvasTemplate />
                </label>
                <input
                  type="text"
                  placeholder="Type Captcha"
                  className="input input-bordered focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                  ref={captchaRef}
                />
                {captchaError && (
                  <p className="text-red-600 text-sm mt-2" aria-live="polite">
                    {captchaError}
                  </p>
                )}
                <br />
                <button type="button" onClick={doSubmit} className="btn btn-sm">
                  Validate Captcha
                </button>
              </div>
         
              <div className="form-control mt-6">
                <button
                  type="submit"
                  disabled={disable || loading}
                  className="btn btn-primary transition duration-200 ease-in-out hover:bg-blue-700"
                >
                  {loading ? 'Logging in...' : 'Login'}
                </button>
              </div>
            </form>
            <SocialLogin/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
