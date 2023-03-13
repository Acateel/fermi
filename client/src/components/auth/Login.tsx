import { useEffect } from "react";
import { connect, ConnectedProps } from "react-redux";
import { RootState } from "../../state/store";
import { signIn } from "../../state/creators";

const mapState = (state: RootState) => ({
  auth: state.auth,
});

const connector = connect(mapState, { signIn });

type PropsFromRedux = ConnectedProps<typeof connector>;

const Login = (props: PropsFromRedux) => {
  return <div>Login</div>;
};

export default connector(Login);
