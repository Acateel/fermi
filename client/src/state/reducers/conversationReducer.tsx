import { Action } from "../actions";
import { ActionType, Conversation } from "../types";

export default (state: Conversation[] | null = null, action: Action) => {
  switch (action.type) {
    case ActionType.FETCH_ALL_CONVERSATION:
      return action.payload;
    default:
      return state;
  }
};
