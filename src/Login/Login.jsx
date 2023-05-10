import "./Login.css";
import { useState } from "react";
import backGroundImg from "./Images/BackgroundImg.jpg";
import Img from "./Images/Technicrafts.png";
import logo from "./Images/logo.png";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import AfterLoginLoader from "./AfterLoginLoader";
import { RxEyeOpen, RxEyeClosed } from "react-icons/rx";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [userData, setUserData] = useState();
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const loginData = {
    username: username,
    password: password,
  };

  const headers = {
    "Content-Type": "application/json",
    Authorization: "Bearer " + "bdRqZw97UrvVWe1eeUgfebeGlaWzVF",
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = axios.post(
        "http://192.168.1.30:4040/users/login/",
        loginData,
        { headers }
      );
      setUserData((await response).data);
      setLoading(true);
      console.log(response);

      if ((await response).data?.data.role === "Operator") {
        setTimeout(() => {
          localStorage.setItem("loggged In", true);
          setLoading(false);
          navigate("/sitestatus");
        }, 7000);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="login">
      <div className="login__wrapper">
        <div className="login__container">
          <div className="login__container__wrapper">
            <span>Welcome to TechniCrafts</span>
            <h1>
              Log into your <br /> Account
            </h1>
            <form className="login__form" onSubmit={handleSubmit}>
              {userData?.message ? (
                <p className="login__form__message">{userData?.message}</p>
              ) : null}
              {/* */}
              <input
                type="text"
                placeholder="Username"
                required
                value={username}
                className={userData?.message ? "incorrect" : null}
                onChange={(e) => setUsername(e.target.value)}
              />
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className={userData?.message ? " incorrect" : null}
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={{ position: "relative" }}
              />

              {showPassword ? (
                <RxEyeClosed
                  onClick={() =>
                    setShowPassword((showPassword) => !showPassword)
                  }
                  className="showpass"
                />
              ) : (
                <RxEyeOpen
                  onClick={() =>
                    setShowPassword((showPassword) => !showPassword)
                  }
                  className="showpass"
                />
              )}

              <button type="submit" className="loginBtn">
                Submit
              </button>
            </form>
            <Link to="/forgotpassword" className="f_pass__link">
              Forgot Password
            </Link>
          </div>
          <div className="login__container__footer">
            <span>@Technicrafts 2023</span>
            <span>v0.1</span>
          </div>
        </div>
      </div>
      {loading && userData.status === "success" && (
        <AfterLoginLoader userData={userData} />
      )}
    </div>
  );
};

export default Login;
