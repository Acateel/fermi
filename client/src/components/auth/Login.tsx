import { useState, FormEvent } from "react";
import { connect, ConnectedProps } from "react-redux";
import { RootState } from "../../state/store";
import { signIn } from "../../state/creators";
import { Navigate } from "react-router-dom";
import "./Login.css";

const mapState = (state: RootState) => ({
  auth: state.auth,
});

const connector = connect(mapState, { signIn });

type PropsFromRedux = ConnectedProps<typeof connector>;

const Login = (props: PropsFromRedux) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const onFormSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    props.signIn(username, password);
  };

  if (props.auth) {
    return <Navigate to="/conversation" replace={true} />;
  }

  return (
    <form className="login" onSubmit={onFormSubmit}>
      <label>Username</label>
      <br />
      <input
        type="text"
        placeholder="Enter username..."
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <br />
      <label>Password</label>
      <br />
      <input
        type="password"
        placeholder="Enter password..."
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      <button type="submit">Login</button>
    </form>
  );
};

export default connector(Login);
