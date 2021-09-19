import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setInitialData } from "../../../actions/data";
import datos from "../../../assets/OKR.json";
import DashboardBody from "./DashboardBody";
import DashboardHeader from "./DashboardHeader";
const Dashboard = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const { keyResults } = datos[0];
    dispatch(setInitialData(keyResults));
  }, [dispatch]);

  return (
    <>
      <DashboardHeader
        objetivo={datos[0].objetive}
        period={datos[0].period}
        dateStart={datos[0].date.start}
        dateEnd={datos[0].date.end}
      />
      <DashboardBody />
    </>
  );
};

export default Dashboard;
