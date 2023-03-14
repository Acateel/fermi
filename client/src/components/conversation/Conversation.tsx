import { connect, ConnectedProps } from "react-redux";
import { RootState } from "../../state/store";
import { fetchMessages, removeMessages } from "../../state/creators";
import { useParams } from "react-router-dom";

const mapState = (state: RootState) => ({
  conversations: state.conversations,
  messages: state.messages,
});

const connector = connect(mapState, { fetchMessages, removeMessages });

type PropsFromRedux = ConnectedProps<typeof connector>;

const Conversation = (props: PropsFromRedux) => {
  const { id } = useParams();
  return <div>{id}</div>;
};

export default connector(Conversation);
