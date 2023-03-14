import { ActionType, Conversation, Message, Token } from "../types";

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

interface FetchMessages {
  type: ActionType.FETCH_MESSAGES;
  payload: Message[];
}

interface RemoveMessages {
  type: ActionType.REMOVE_MESSAGES;
}

export type Action =
  | SignIn
  | SignUp
  | SignOut
  | FetchAllConversation
  | FetchMessages
  | RemoveMessages;
