import { ActionType, Conversation, Token } from "../types";

interface SignIn {
  type: ActionType.SIGN_IN;
  payload: Token;
}

interface SignUp {
  type: ActionType.SIGN_UP;
  payload: Token;
}

interface SignOut {
  type: ActionType.SIGN_OUT;
}

interface FetchAllConversation {
  type: ActionType.FETCH_ALL_CONVERSATION;
  payload: Conversation[];
}

export type Action = SignIn | SignUp | SignOut | FetchAllConversation;
