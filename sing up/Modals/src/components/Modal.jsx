import React, { useState } from "react";
import "./modal.css"

const Modal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [message, setMessage] = useState("");

  const openModal = () => {
    setIsModalOpen(true);
    setMessage("");
  };

  const closeModal = () => setIsModalOpen(false);

  const handleSave = () => {
    setMessage("haha I know you are 😛");
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setMessage("haha I know you are 😛");
    setIsModalOpen(false);
  };

  return (
    <div className="app">
      <button className="open-btn" onClick={openModal}>Click me</button>
      {message && <p className="msg">{message}</p>}

      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <button className="close-btn" onClick={closeModal}>×</button>
            <h2>Oo hellooo!!</h2>
            <p>Are you in your senses?</p>
            <div className="modal-actions">
              <button className="cancel-btn" onClick={handleCancel}>NO</button>
              <button className="save-btn" onClick={handleSave}>Agree with my left button</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
