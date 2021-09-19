import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { startSave } from "../../../actions/data";
import { useForm } from "../../../hooks/useForm";

const ModalAddEdit = ({ closeModal }) => {
  const dispatch = useDispatch();
  const { activeKey } = useSelector((state) => state.data);
  const [values, handleInputChange, reset] = useForm(activeKey);
  const { name, complete } = values;

  useEffect(() => {
    if (activeKey.id !== 0) {
      reset(activeKey);
    } else {
      reset();
    }
  }, [activeKey]);
  const handleSubmit = (e) => {
    e.preventDefault();

    if (name.trim().length < 10) {
      alert("Error en el objeto nombre key result");
      return false;
    } else if (parseInt(complete) < 0 || parseInt(complete) > 100) {
      alert("Error en el porcentage de tarea");
      return false;
    } else {
      dispatch(startSave(values));
      reset();
      closeModal();
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <h3 className="text-info">
        {activeKey.id !== 0 ? "Editar" : "Agregar"} Key Result
      </h3>
      <div className="row mb-3 mt-3">
        <div className="col-sm-12 w-100">
          <input
            type="text"
            className="form-control form-control-sm"
            placeholder="Key Result"
            required
            name={"name"}
            value={name}
            onChange={handleInputChange}
          />
        </div>
      </div>
      <div className="row mb-3">
        <div className="col-sm-12">
          <input
            type="number"
            className="form-control-sm form-control"
            required
            placeholder="Complete %"
            name="complete"
            value={complete}
            onChange={handleInputChange}
          />
        </div>
      </div>
      <div className="d-flex justify-content-evenly">
        <button className="btn btn-primary ">Confirmar</button>
      </div>
    </form>
  );
};

export default ModalAddEdit;
