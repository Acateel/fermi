import { useState, FormEvent } from "react";
import { connect, ConnectedProps } from "react-redux";
import { RootState } from "../../state/store";
import { signUp } from "../../state/creators";
import { Navigate } from "react-router-dom";
import "./Login.css";

const mapState = (state: RootState) => ({
  auth: state.auth,
});

const connector = connect(mapState, { signUp });

type PropsFromRedux = ConnectedProps<typeof connector>;

const Registration = (props: PropsFromRedux) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");

  const onFormSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (password === repeatPassword) {
      props.signUp(username, password);
    }
  };

  if (props.auth) {
    return <Navigate to="/conversation" replace={true} />;
  }

  return (
    <form className="login" onSubmit={onFormSubmit}>
      <label>Username</label>
      <br />
      <input
        className="correct_input"
        type="text"
        placeholder="Enter username..."
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <br />
      <label>Password</label>
      <br />
      <input
        className="correct_input"
        type="password"
        placeholder="Enter password..."
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      <label>Repeat Password</label>
      <br />
      <input
        className={
          password !== repeatPassword ? "error_input" : "correct_input"
        }
        type="password"
        placeholder="Repeat password..."
        value={repeatPassword}
        onChange={(e) => setRepeatPassword(e.target.value)}
      />
      <br />
      <button type="submit">Registration</button>
    </form>
  );
};

export default connector(Registration);
