import React from "react";
import { startDelete } from "../../../actions/data";
import { useDispatch } from "react-redux";

const ModalConfirmDelete = ({ id, closeModal }) => {
  const dispatch = useDispatch();
  const handleClickConfirm = () => {
    dispatch(startDelete(id));
    closeModal();
  };
  return (
    <>
      <h3 className="text-info">Atención</h3>
      <p className="text-lg-center">Desea elminar el registro seleccionado? </p>
      <div className="d-flex justify-content-evenly">
        <button onClick={handleClickConfirm} className="btn btn-outline-danger">
          Confirmar
        </button>
        <button className="btn btn-outline-warning" onClick={closeModal}>
          Cancelar
        </button>
      </div>
    </>
  );
};

export default ModalConfirmDelete;
