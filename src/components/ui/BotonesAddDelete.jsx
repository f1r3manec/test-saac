import React from "react";

const BotonesAddDelete = ({ id, handleDelete, handleEdit }) => {
  return (
    <div className="d-flex flex-row bd-highlight ">
      <div className=" p-1 bd-highlight">
        <button
          onClick={() => handleEdit(id)}
          className="small btn bi bi-pencil-square"
        ></button>
      </div>
      <div className=" p-1 bd-highlight">
        <button
          onClick={() => {
            handleDelete(id);
          }}
          className="small btn bi bi-journal-x"
        ></button>
      </div>
    </div>
  );
};

export default BotonesAddDelete;
