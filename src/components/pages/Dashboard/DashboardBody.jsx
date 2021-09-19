import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useModal } from "../../../hooks/useModal";
import BotonesAddDelete from "../../ui/BotonesAddDelete";
import ProgressBar from "../../ui/ProgressBar";
import SchedulerEntry from "../../ui/SchedulerEntry";
import TitleEntry from "../../ui/TitleEntry";
import { Modals } from "../../ui/Modals";
import ModalConfirmDelete from "../Modals/ModalConfirmDelete";
import ModalAddEdit from "../Modals/ModalAddEdit";
import { setActive } from "../../../actions/data";
import "../../../style/dashboard.css";
const DashboardBody = () => {
  const { keyresults } = useSelector((state) => state.data);
  const [isOpenDelete, openDelete, closeDelete] = useModal(false);
  const [isOpenAddEdit, openOpenAddEdit, closeOpenAddEdit] = useModal(false);
  const [hideShowButtons, setHideShowButtons] = useState(false);
  const [idActive, setIdActive] = useState("");
  const dispatch = useDispatch();
  const handleDelete = (id) => {
    setIdActive(id);

    openDelete();
  };
  const handleEdit = (id) => {
    dispatch(setActive(id));
    openOpenAddEdit();
  };
  const handleAddKey = () => {
    openOpenAddEdit();
  };
  const handleHover = () => {
    setHideShowButtons(true);
  };
  const handleLeave = () => {
    setHideShowButtons(false);
  };
  return (
    <>
      {keyresults.map((key) => (
        <div
          key={key.id}
          className="row m-2 onHoverRow"
          onMouseOver={handleHover}
          onMouseLeave={handleLeave}
        >
          <div className="col-5">
            <TitleEntry titleEntry={key.name} />

            {key.task &&
              key.task.map((task) => <span key={task.id}> {task.name}</span>)}
          </div>
          <div className="col-2 small">
            <SchedulerEntry
              period={key.period}
              dateStart={key.date.start}
              dateEnd={key.date.end}
            />
          </div>

          <div className="col-5">
            <div className="row">
              <div className="col-9 m-0 p-0">
                <div className="p-2 flex-fill bd-highlight">
                  <ProgressBar avance={key.complete} />
                </div>
              </div>
              <div className={`col-3 m-0 p-0 ${!hideShowButtons && "d-none"}`}>
                <div className="p-2 flex-fill bd-highlight">
                  <BotonesAddDelete
                    id={key.id}
                    handleDelete={handleDelete}
                    handleEdit={handleEdit}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
      <div className="d-flex justify-content-center pb-2 ">
        <span className="small mt-2 text-info">
          <i className="bi bi-plus-circle btn " onClick={handleAddKey} />
          Add new
        </span>
      </div>

      <Modals isOpen={isOpenDelete} closeModal={closeDelete}>
        <ModalConfirmDelete id={idActive} closeModal={closeDelete} />
      </Modals>
      <Modals
        id={idActive}
        isOpen={isOpenAddEdit}
        closeModal={closeOpenAddEdit}
      >
        <ModalAddEdit closeModal={closeOpenAddEdit} />
      </Modals>
    </>
  );
};

export default DashboardBody;
