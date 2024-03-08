import React, { useState } from "react";

const Modal = () => {
  const [abrirModal, setAbrirModal] = useState(false);

  const modalAbierto = () => {
    setAbrirModal(!abrirModal);
  };

  return (
    <>
      <button
        onClick={modalAbierto}
        className="relative boton bg-gray-50/20 px-4 py-2 rounded-full"
      >
        Modal
      </button>
      {abrirModal && (
        <>
          <section className="fixed mt-4 border px-4 py-2">
            <h2 className="modal">modal</h2>
            <h4>
             modal
            </h4>
          </section>
        </>
      )}
    </>
  );
};

export default Modal;
