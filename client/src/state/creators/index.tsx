import { Dispatch } from "redux";
import fermi from "../../api/fermi";
import { Action } from "../actions";
import { RootState } from "../store";
import { ActionType } from "../types";

export const signIn =
  (username: string, password: string) =>
  async (dispatch: Dispatch<Action>) => {
    const token = await fermi
      .post("/signin", {
        username,
        password,
      })
      .then((response) => response.data);
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
    dispatch({
      type: ActionType.SIGN_IN,
      payload: token,
    });
  };

export const signOut = () => ({ type: ActionType.SIGN_OUT });

export const fetchAllConversation =
  () => async (dispatch: Dispatch<Action>, getState: () => RootState) => {
    const token = getState().auth?.token;

    const conversations = await fermi
      .get("/api/conversation", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => response.data.data);

    dispatch({
      type: ActionType.FETCH_ALL_CONVERSATION,
      payload: conversations,
    });
  };

export const fetchMessages =
  (conversationId: String) =>
  async (dispatch: Dispatch<Action>, getState: () => RootState) => {
    const token = getState().auth?.token;

    const messages = await fermi
      .get(`/api/message/${conversationId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => response.data.data);

    dispatch({
      type: ActionType.FETCH_MESSAGES,
      payload: messages,
    });
  };

export const removeMessages = () => ({
  type: ActionType.REMOVE_MESSAGES,
});
