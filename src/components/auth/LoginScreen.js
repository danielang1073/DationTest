import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
  startFacebookLogin,
  startGoogleLogin,
  startLoginEmailPassword,
  startTwitterLogin,
} from "../../actions/auth";
import { useForm } from "../../hooks/useForm";
import "./LoginScreen.css";
import imagen from "../../images/Captura.JPG";

export const LoginScreen = () => {
  const dispatch = useDispatch();
  const [formLoginVal, handleLoginInputChange] = useForm({
    email: "",
    password: "",
  });
  const { email, password } = formLoginVal;

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(startLoginEmailPassword(email, password));
  };

  const handleGoogleLogin = () => {
    dispatch(startGoogleLogin());
  };

  const handleFacebookLogin = () => {
    dispatch(startFacebookLogin());
  };

  const handleTwitterLogin = () => {
    dispatch(startTwitterLogin());
  };

  return (
    <div className="asd">
      <div className="d-flex justify-content-end social_icon">
        <span>
          <i
            className="fab fa-facebook-square"
            onClick={handleFacebookLogin}
          ></i>
        </span>
        <span>
          <i
            className="fab fa-google-plus-square"
            onClick={handleGoogleLogin}
          ></i>
        </span>
        <span>
          <i className="fab fa-twitter-square" onClick={handleTwitterLogin}></i>
        </span>
      </div>
      <div className="imagen d-flex justify-content-center">
        <img src={imagen} alt="imagen" />
      </div>
      <div className="formulario1">
        <div className="d-flex justify-content-center">
          <h3 className="title-Session d-flex justify-content-center">
            inicio de sesión
          </h3>
        </div>
        <div className="formulario card-body">
          <form onSubmit={handleLogin}>
            <div className="form-group row justify-content-center mt-5">
              <input
                type="text"
                className="form-control"
                placeholder="correo electronico"
                name="email"
                value={email}
                onChange={handleLoginInputChange}
              />
            </div>
            <div className="form-group row justify-content-center">
              <input
                type="password"
                className="form-control"
                placeholder="contraseña"
                name="password"
                value={password}
                onChange={handleLoginInputChange}
              />
            </div>
            <div className="d-flex justify-content-center mt-4">
              <a href="Forgot your password">Olvidé mi contraseña</a>
            </div>
            <div className="form-group row justify-content-center mt-4">
              <input
                type="submit"
                value="Ingresar"
                className="login btn btn-outline-primary"
              />
            </div>
            <div>
              <div className="form-group row justify-content-center">
                <Link
                  href="signup"
                  to="/auth/signup"
                  className="registrarme btn btn-outline-primary "
                >
                  Soy nuevo quiero registrarme
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
