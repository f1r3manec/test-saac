import React from "react";
import "../../style/modals.css";

export const Modals = ({ children, isOpen, closeModal }) => {
  const handleCloseClick = (e) => e.stopPropagation();
  return (
    <article className={`modals ${isOpen && "is-open"}`} onClick={closeModal}>
      <div className="modals-containers" onClick={handleCloseClick}>
        <button
          className="modals-close btn btn-danger small"
          onClick={closeModal}
        >
          X
        </button>
        {children}
        <hr />
      </div>
    </article>
  );
};
