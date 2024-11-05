
import './index.css';

const SignInForm = () => {
  return (
    <div className="form-container">
      <h2>Sign in</h2>
      <p>Sign in with Open account</p>

      <div className="auth-buttons">
        <button className="google-btn">
          <img src="https://res.cloudinary.com/dq3pwfv9f/image/upload/v1730799517/google_evug0c.png" alt="Google Icon" />
          Google
        </button>
        <div className="divider"></div>
        <button className="apple-btn">
          <img src="https://res.cloudinary.com/dq3pwfv9f/image/upload/v1730799517/apple_vvlqbn.png" alt="Apple Icon" />
          Apple ID
        </button>
      </div>

      <div className="separator"></div>

      <p>Or continue with email address</p>

      <div className="input-container">
        <input type="text" placeholder="user name" />
        <input type="password" placeholder="password" />
      </div>

      <button className="start-trading-btn">Start trading</button>
    </div>
  );
};

export default SignInForm;
