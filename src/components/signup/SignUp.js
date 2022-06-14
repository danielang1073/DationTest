import React from "react";
import Swal from "sweetalert2";
import { useForm } from "../../hooks/useForm";
import "../auth/LoginScreen.css";
import validator from "validator";
import { useDispatch } from "react-redux";
import { startRegisterWithEmailPasswordName } from "../../actions/auth";
import { Link } from "react-router-dom";
import imagen from "../../images/Captura.JPG";

export const SignUp = () => {
  const dispatch = useDispatch();

  const [formSignUp, handleSignUpChange] = useForm({
    name: "",
    email: "",
    password1: "",
    password2: "",
  });

  const { name, email, password1, password2 } = formSignUp;

  const handleRegister = (e) => {
    e.preventDefault();
    if (isFormValid()) {
      console.log("formulario correcto");
      dispatch(startRegisterWithEmailPasswordName(email, password1, name));
    }
  };

  const isFormValid = () => {
    if (name.trim().length === 0) {
      Swal.fire("Error", "Nombre incorrecto", "error");
      return false;
    } else if (!validator.isEmail(email)) {
      Swal.fire("Error", "Correo no valido", "error");
      return false;
    } else if (password1 !== password2) {
      Swal.fire("Error", "Las contraseñas deben de ser iguales", "error");
      return false;
    } else if (password1.length <= 5) {
      Swal.fire(
        "Error",
        "La contraseña debe tener más de 5 caracteres",
        "error"
      );
      return false;
    }
    return true;
  };

  return (
    <div className="asd">
      <div className="imagen d-flex justify-content-center">
        <img src={imagen} alt="imagen" />
      </div>
      <div className="formulario1">
        <div className="d-flex justify-content-center">
          <h3 className="title-Session d-flex justify-content-center">
            Registro
          </h3>
        </div>
        <div className="formulario card-body">
          <form onSubmit={handleRegister}>
            <div className="form-group row justify-content-center mt-1">
              <input
                type="text"
                className="form-control"
                placeholder="nombre"
                name="name"
                value={name}
                onChange={handleSignUpChange}
              />
            </div>
            <div className="form-group row justify-content-center">
              <input
                type="text"
                className="form-control"
                placeholder="correo electronico"
                name="email"
                value={email}
                onChange={handleSignUpChange}
              />
            </div>
            <div className="form-group row justify-content-center">
              <input
                type="password"
                className="form-control"
                placeholder="contraseña"
                name="password1"
                value={password1}
                onChange={handleSignUpChange}
              />
            </div>
            <div className="form-group row justify-content-center">
              <input
                type="password"
                className="form-control"
                placeholder="repita la contraseña"
                name="password2"
                value={password2}
                onChange={handleSignUpChange}
              />
            </div>
            <div className="form-group row justify-content-center">
              <input
                type="submit"
                value="Registrarme"
                className="login btn btn-outline-primary"
              />
            </div>
            <div>
              <div className="form-group row justify-content-center">
                <Link
                  href="login"
                  to="/auth/login"
                  className="registrarme btn btn-outline-primary "
                >
                  Regresar
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
