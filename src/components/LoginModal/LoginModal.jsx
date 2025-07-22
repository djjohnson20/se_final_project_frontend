import { useState, useEffect } from "react";

import ModalWithForm from "../ModalWithForm/ModalWithForm";
import "./LoginModal.css";

function LoginModal({ onClose, isOpen, onLogin, onRegister }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin({ email, password })
      .then(() => {
        onClose();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const hasFormContent = () => {
    return email.length > 0 && password.length > 0;
  };

  useEffect(() => {
    if (isOpen) {
      setEmail("");
      setPassword("");
    }
  }, [isOpen]);

  return (
    <ModalWithForm
      title="Sign in"
      onClose={onClose}
      isOpen={isOpen}
      onSubmit={handleSubmit}
    >
      <label htmlFor="login-email" className="modal__label">
        Email{""}
        <input
          type="email"
          className="modal__input"
          id="login-email"
          placeholder="Enter email"
          onChange={handleEmailChange}
          value={email}
          required
          maxLength="50"
        />
      </label>
      <label htmlFor="login-password" className="modal__label">
        Password{""}
        <input
          type="password"
          className="modal__input"
          id="login-password"
          placeholder="Enter password"
          onChange={handlePasswordChange}
          value={password}
          required
          minLength="8"
        />
      </label>
      <div className="modal__buttons-container">
        <button
          type="submit"
          className={`modal__submit-login ${hasFormContent() ? "active" : ""}`}
        >
          Sign in
        </button>
        <button
          type="button"
          className="modal__register-button"
          onClick={onRegister}
        >
          or <span className="modal__register-button-span">Sign Up</span>
        </button>
      </div>
    </ModalWithForm>
  );
}

export default LoginModal;
