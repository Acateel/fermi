import { Action } from "../actions";
import { ActionType, Token } from "../types";

export default (state: Token | null = null, action: Action) => {
  switch (action.type) {
    case ActionType.SIGN_IN:
      return action.payload;
    case ActionType.SIGN_UP:
      return action.payload;
    case ActionType.SIGN_OUT:
      return null;
    default:
      return state;
  }
};
