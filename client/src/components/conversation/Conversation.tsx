import { connect, ConnectedProps } from "react-redux";
import { RootState } from "../../state/store";
import {
  fetchMessages,
  removeMessages,
  fetchAllConversation,
} from "../../state/creators";
import { Link, useParams } from "react-router-dom";
import { Fragment, useEffect } from "react";
import "./Conversation.css";

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
    props.messages
      ?.slice()
      .reverse()
      .map((message) => (
        <div className="message" key={message.id.toString()}>
          <p className="message_sender">{message.senderId}</p>
          <p className="message_text">{message.text}</p>
        </div>
      ));

  const renderedTitle = () => (
    <div className="conversation_title">
      <Link className="back-arrow" to="/conversation">
        <img src="/back-arrow.png" />
      </Link>
      <p>{props.conversations?.find((conv) => conv.id === id)?.name}</p>
    </div>
  );

  return (
    <Fragment>
      {renderedTitle()}
      <div className="message_list">{renderedMessages()}</div>
    </Fragment>
  );
};

export default connector(Conversation);
