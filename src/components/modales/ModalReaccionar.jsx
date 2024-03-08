import React, { useState } from "react";

const ModalReaccionar = () => {
  const [abrirModal, setAbrirModal] = useState(false);

  const modalAbierto = () => {
    setAbrirModal(!abrirModal);
  };

  return (
    <>
      <button
        onClick={modalAbierto}
        className="boton bg-gray-50/20 px-4 py-2 rounded-full"
      >
        Reaccionar
      </button>
      {abrirModal && (
        <>
          <section className="fixed mt-4 border px-4 py-2">
            <h2 className="modal">modal</h2>
            <h4>
             Modal
            </h4>
          </section>
        </>
      )}
    </>
  );
};

export default ModalReaccionar;
