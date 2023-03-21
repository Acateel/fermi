import { useState, FormEvent, useEffect } from "react";
import { connect, ConnectedProps } from "react-redux";
import { RootState } from "../../state/store";
import { signOut } from "../../state/creators";
import { Navigate } from "react-router-dom";
import "./Login.css";

const connector = connect(null, { signOut });

type PropsFromRedux = ConnectedProps<typeof connector>;

const Logout = (props: PropsFromRedux) => {
  useEffect(() => {
    props.signOut();
  }, []);

  return <Navigate to="/login" />;
};

export default connector(Logout);
