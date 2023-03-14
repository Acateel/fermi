import { connect, ConnectedProps } from "react-redux";
import { RootState } from "../../state/store";
import {
  fetchMessages,
  removeMessages,
  fetchAllConversation,
} from "../../state/creators";
import { useParams } from "react-router-dom";
import { Fragment, useEffect } from "react";

const mapState = (state: RootState) => ({
  conversations: state.conversations,
  messages: state.messages,
});

const connector = connect(mapState, {
  fetchMessages,
  removeMessages,
  fetchAllConversation,
});

type PropsFromRedux = ConnectedProps<typeof connector>;

const Conversation = (props: PropsFromRedux) => {
  const id = useParams().id ?? "";
  useEffect(() => {
    props.fetchAllConversation();
    props.fetchMessages(id);

    return () => {
      props.removeMessages();
    };
  }, []);

  const renderedMessages = () =>
    props.messages?.map((message) => (
      <div className="message">
        <h4>{message.senderId}</h4>
        <h3>{message.text}</h3>
      </div>
    ));

  const renderedTitle = () => (
    <div>
      <h2>{props.conversations?.find((conv) => conv.id === id)?.name}</h2>
    </div>
  );

  return (
    <Fragment>
      {renderedTitle()}
      {renderedMessages()}
    </Fragment>
  );
};

export default connector(Conversation);
