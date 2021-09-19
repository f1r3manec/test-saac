import React from "react";

const SchedulerEntry = ({ period, dateStart, dateEnd }) => {
  return (
    <div className="d-flex flex-column bd-highlight align-items-center">
      <div className="bd-highlight">
        <span className="small text-danger">{period}</span>
      </div>
      <div className=" bd-highlight">
        <div className="d-flex flex-row bd-highlight ">
          <div className=" p-1 bd-highlight">
            <span className="small text-success">{dateStart}</span>
          </div>
          <div className=" p-1 bd-highlight">
            <span className="small text-success">{dateEnd} </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SchedulerEntry;
