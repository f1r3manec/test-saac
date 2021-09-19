import { types } from "../types/types";

const initialState = {
  keyresults: [],
  porcentajeGeneral: "",
  activeKey: { name: "", id: 0, complete: "" },
};
export const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.loadData:
      return {
        ...state,
        keyresults: [...state.keyresults, action.payload],
      };
    case types.deleteKeyResult:
      return {
        ...state,
        keyresults: state.keyresults.filter((key) => key.id !== action.payload),
      };
    case types.setPorcentajeGeneral:
      return {
        ...state,
        porcentajeGeneral: action.payload,
      };

    case types.activeKeyResult:
      return {
        ...state,
        activeKey: action.payload,
      };
    case types.cleanActiveKeyResult:
      return {
        ...state,
        activeKey: { name: "", id: 0, complete: "" },
      };
    case types.updateKeyResult:
      return {
        ...state,
        keyresults: state.keyresults.map((key) =>
          key.id === action.payload.id ? action.payload : key
        ),
      };
    default:
      return state;
  }
};
