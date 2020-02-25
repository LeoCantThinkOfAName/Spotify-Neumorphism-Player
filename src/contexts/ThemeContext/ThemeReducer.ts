import { CHANGE_THEME } from "../actionTypes";
import { ThemeType } from "../initialContexts";

export type ThemeAction = {
  type: typeof CHANGE_THEME;
  payload: string;
};

const themeReducer: React.Reducer<ThemeType, ThemeAction> = (state, action) => {
  switch (action.type) {
    case CHANGE_THEME:
      return { theme: action.payload };
    default:
      return state;
  }
};

export default themeReducer;
