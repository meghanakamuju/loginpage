import './App.css';
import SignInForm from "./components/signInForm";
import ImageContainer from './components/imageContainer';

const App = () => {
  return (
    <div className="app-container">
      <div className="sign-in-box">
        <div className="signup-link">
          <span>Don't have an account?</span>
          <a href="#">Sign up</a>
        </div>
        <ImageContainer />
        <SignInForm />
      </div>
    </div>
  );
};

export default App;
