import { Action } from "../actions";
import { ActionType, Message } from "../types";

export default (state: Message[] | null = null, action: Action) => {
  switch (action.type) {
    case ActionType.FETCH_MESSAGES:
      return action.payload;
    case ActionType.REMOVE_MESSAGES:
      return null;
    default:
      return state;
  }
};
