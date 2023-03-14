export enum ActionType {
  SIGN_IN = "SIGN_IN",
  SIGN_UP = "SIGN_UP",
  SIGN_OUT = "SIGN_OUT",
  FETCH_ALL_CONVERSATION = "FETCH_ALL_CONVERSATION",
}

export interface Token {
  token: String;
}

export interface Conversation {
  id: String;
  createAt: Date;
  name: String;
}
