import { connect, ConnectedProps } from "react-redux";
import { useParams } from "react-router-dom";
import { sendMessage } from "../../state/creators";

const connector = connect(null, { sendMessage });

type PropsFromRedux = ConnectedProps<typeof connector>;

const SendMessage = (props: PropsFromRedux) => {
  const id = useParams().id ?? "";
  return <div>Send message, conv id: {id}</div>;
};

export default connector(SendMessage)