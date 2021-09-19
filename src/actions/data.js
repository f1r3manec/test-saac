import { calcularPorcentajeKeys } from "../helpers/calcularPorcentaje";
import { types } from "../types/types";

export const setInitialData = (keyResults) => {
  return (dispatch) => {
    keyResults.forEach((key) => {
      dispatch(setDataRedux(key));
    });
    setTimeout(() => {
      dispatch(calcularPorcentaje());
    }, 100);
  };
};

const setDataRedux = (keyResults) => ({
  type: types.loadData,
  payload: keyResults,
});

const setPorcentajeGeneral = (porcentaje) => ({
  type: types.setPorcentajeGeneral,
  payload: porcentaje,
});

export const startDelete = (id) => {
  return (dispatch) => {
    dispatch(deleteKeyResult(id));
    setTimeout(() => {
      dispatch(calcularPorcentaje());
    }, 100);
  };
};

const calcularPorcentaje = () => {
  return async (dispatch, getState) => {
    const { keyresults } = getState().data;
    const porcentaje = await calcularPorcentajeKeys(keyresults);

    dispatch(setPorcentajeGeneral(porcentaje));
  };
};

const deleteKeyResult = (id) => ({
  type: types.deleteKeyResult,
  payload: id,
});

export const startSave = (newKey) => {
  return (dispatch) => {
    newKey.complete = parseInt(newKey.complete);
    if (newKey.id !== 0) {
      dispatch(updateKeyResult(newKey));
    } else {
      newKey.id = Date.now() + "KR";
      newKey.date = {
        start: "2022-09-01",
        end: "2020-11-30",
      };
      newKey.period = "Q3-2022";

      dispatch(setDataRedux(newKey));
    }
    setTimeout(() => {
      dispatch(calcularPorcentaje());
    }, 100);
  };
};
const updateKeyResult = (keyResult) => ({
  type: types.updateKeyResult,
  payload: keyResult,
});
export const setActive = (id) => {
  return (dispatch, getState) => {
    const active = getState().data.keyresults.filter((key) => key.id === id);
    dispatch(activeKeyResult(active[0]));
  };
};

const activeKeyResult = (activeKey) => ({
  type: types.activeKeyResult,
  payload: activeKey,
});
export const cleanActive = () => {
  return (dispatch) => {
    dispatch(cleanActiveKeyResult());
  };
};

const cleanActiveKeyResult = () => ({
  type: types.cleanActiveKeyResult,
});
