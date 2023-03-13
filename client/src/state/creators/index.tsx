import { Dispatch } from "redux";
import fermi from "../../api/fermi";
import { Action } from "../actions";
import { ActionType } from "../types";

export const signIn =
  (username: string, password: string) =>
  async (dispatch: Dispatch<Action>) => {
    const token = await fermi
      .post("/singin", {
        username,
        password,
      })
      .then((response) => response.data);
    console.log(token);
    dispatch({
      type: ActionType.SIGN_IN,
      payload: token,
    });
  };

export const signUp =
  (username: string, password: string) =>
  async (dispatch: Dispatch<Action>) => {
    const token = await fermi
      .post("/signup", {
        username,
        password,
      })
      .then((response) => response.data);
    console.log(token);
    dispatch({
      type: ActionType.SIGN_IN,
      payload: token,
    });
  };

export const signOut = () => ({ type: ActionType.SIGN_OUT });
