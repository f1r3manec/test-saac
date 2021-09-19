import React from "react";

const TitleEntry = ({ titleEntry }) => {
  return (
    <div className="p-2 flex-fill bd-highlight">
      <p className="text-secondary fw-bold">
        <i className="bi bi-chevron-double-right"></i>
        {titleEntry}
      </p>
    </div>
  );
};

export default TitleEntry;
