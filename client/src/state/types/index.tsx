export enum ActionType {
  SIGN_IN = "SIGN_IN",
  SIGN_UP = "SIGN_UP",
  SIGN_OUT = "SIGN_OUT",
  FETCH_ALL_CONVERSATION = "FETCH_ALL_CONVERSATION",
  FETCH_MESSAGES = "FETCH_MESSAGES",
  REMOVE_MESSAGES = "REMOVE_MESSAGES",
}

export interface Token {
  token: string;
  user: User;
}

export interface Conversation {
  id: string;
  createAt: Date;
  name: string;
  image: string;
}

export interface Message {
  id: string;
  createAt: Date;
  text: string;
  senderId: string;
  sender: User;
  conversationId: string;
}

export interface User {
  id: string;
  createAt: Date;
  username: string;
  image: string;
}
