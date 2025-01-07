import React, { useState, useContext, useRef, useEffect } from 'react';
import Logo from '../assets/register.png';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from '../Provider/AuthProvider';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'; // Import SweetAlert2
import { Helmet } from 'react-helmet-async';

function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const captchaRef = useRef(null);
  const [error, setError] = useState('');
  const [captchaError, setCaptchaError] = useState('');
  const [loading, setLoading] = useState(false);
  const [disable, setDisable] = useState(true);
  const { createUser, user } = useContext(AuthContext); // Access user from context
  const navigate = useNavigate();

  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  // Redirect if the user is already logged in
  useEffect(() => {
    if (user) {
      navigate('/'); // Redirect to home if the user is logged in
    }
  }, [user, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    // Check if the passwords match
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      setLoading(false);
      return;
    }

    try {
      // Call the register function from context (or Firebase directly)
      await createUser(email, password);
      // Show success alert on successful registration
      Swal.fire({
        icon: 'success',
        title: 'Registration Successful!',
        text: 'You have successfully registered.',
        confirmButtonText: 'Go to Dashboard'
      }).then(() => {
        navigate('/'); // Redirect to home after successful registration
      });
    } catch (err) {
      setError(err.message);
      // Show error alert on registration failure
      Swal.fire({
        icon: 'error',
        title: 'Registration Failed',
        text: err.message,
        confirmButtonText: 'Try Again'
      });
    } finally {
      setLoading(false);
    }
  };

  const doSubmit = () => {
    const userCaptchaValue = captchaRef.current.value;
    if (validateCaptcha(userCaptchaValue)) {
      setCaptchaError('');
      setDisable(false);
    } else {
      setCaptchaError('Captcha does not match. Please try again.');
      captchaRef.current.value = ''; // Clear the captcha input
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <Helmet>
        <title>Bistro Boss | Register</title>
      </Helmet>
      <div className="hero bg-base-200 rounded-lg shadow-lg p-6 md:p-12">
        <div className="hero-content flex flex-col md:flex-row items-center">
          <div className="text-center md:text-left mb-6 md:mb-0">
            <img className="mx-auto md:w-9/12" src={Logo} alt="Register illustration" />
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
                  placeholder="email"
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
                  placeholder="password"
                  className="input input-bordered focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Confirm Password</span>
                </label>
                <input
                  type="password"
                  placeholder="confirm password"
                  className="input input-bordered focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </div>
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

              <div className="form-control mt-6">
                <button
                  type="submit"
                  disabled={disable || loading}
                  className="btn btn-primary transition duration-200 ease-in-out hover:bg-blue-700"
                >
                  {loading ? 'Registering...' : 'Register'}
                </button>
              </div>

              {/* Link for already have an account */}
              <div className="text-center mt-4">
                <p className="text-sm">
                  Already have an account? 
                  <a href="/login" className="text-blue-600 hover:text-blue-800">
                    Login here
                  </a>
                </p>
              </div>

            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
