import React from "react";
import { useSelector } from "react-redux";
import ProgressBar from "../../ui/ProgressBar";
import SchedulerEntry from "../../ui/SchedulerEntry";
import TitleEntry from "../../ui/TitleEntry";

const DashboardHeader = ({ objetivo, period, dateStart, dateEnd }) => {
  const { porcentajeGeneral } = useSelector((state) => state.data);
  return (
    <div className="row mt-5 p-3">
      <div className="col-5">
        <TitleEntry titleEntry={objetivo} />
      </div>
      <div className="col-2">
        <SchedulerEntry
          period={period}
          dateStart={dateStart}
          dateEnd={dateEnd}
        />
      </div>
      <div className="col-5">
        <ProgressBar avance={porcentajeGeneral} />
      </div>
    </div>
  );
};

export default DashboardHeader;
