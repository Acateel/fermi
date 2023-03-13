import { ActionType, Token } from "../types";

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

export type Action = 
    | SignIn 
    | SignUp 
    | SignOut;
