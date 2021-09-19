import { useProgressBar } from "../../hooks/useProgressBar";

const ProgressBar = ({ avance }) => {
  const { progress } = useProgressBar(avance);
  return (
    <div className="d-flex bd-highlight">
      <div className="p-2 w-100 bd-highlight mt-2">
        <div className="progress">
          <div
            className={`progress-bar progress-bar-striped ${progress}`}
            role="progressbar"
            style={{ width: `${avance}%` }}
          >
            {`${avance}%`}
          </div>
        </div>
      </div>
      <div className="p-2 flex-shrink-1 bd-highlight">
        <span>{`${avance}%`}</span>
      </div>
    </div>
  );
};

export default ProgressBar;
