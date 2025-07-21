import { useState } from "react";

import "./RegisterModal.css";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

function RegisterModal({ onClose, isOpen, onLogin, onRegister }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onRegister({ email, password, name })
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

  return (
    <ModalWithForm
      title="Sign up"
      onClose={onClose}
      isOpen={isOpen}
      onSubmit={handleSubmit}
    >
      <label htmlFor="register-email" className="modal__label">
        Email{""}
        <input
          type="email"
          className="modal__input"
          id="register-email"
          placeholder="Email"
          onChange={handleEmailChange}
          value={email}
          required
          maxLength="50"
        />
      </label>
      <label htmlFor="register-password" className="modal__label">
        Password{" "}
        <input
          type="password"
          className="modal__input"
          id="register-password"
          placeholder="Password"
          onChange={handlePasswordChange}
          value={password}
          required
          minLength="8"
        />
      </label>
      <label htmlFor="register-name" className="modal__label">
        Username{" "}
        <input
          type="text"
          className="modal__input"
          id="register-name"
          placeholder="Enter your username"
          onChange={handleNameChange}
          value={name}
          required
          minLength="2"
          maxLength="30"
        />
      </label>
      <div className="modal__buttons-container">
        <button
          type="submit"
          className={`modal__submit-login ${hasFormContent() ? "active" : ""}`}
        >
          Sign up
        </button>
        <button
          type="button"
          className="modal__register-button"
          onClick={onLogin}
        >
          or <span className="modal__register-button-span">Sign In</span>
        </button>
      </div>
    </ModalWithForm>
  );
}

export default RegisterModal;
