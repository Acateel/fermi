export enum ActionType {
  SIGN_IN = "SIGN_IN",
  SIGN_UP = "SIGN_UP",
  SIGN_OUT = "SIGN_OUT",
  FETCH_ALL_CONVERSATION = "FETCH_ALL_CONVERSATION",
  FETCH_MESSAGES = "FETCH_MESSAGES",
  REMOVE_MESSAGES = "REMOVE_MESSAGES",
}

export interface Token {
  token: String;
}

export interface Conversation {
  id: String;
  createAt: Date;
  name: String;
}

export interface Message {
  id: String;
  createAt: Date;
  text: String;
  senderId: String;
  conversationId: String;
}
