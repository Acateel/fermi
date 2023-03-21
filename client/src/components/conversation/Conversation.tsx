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
import SendMessage from "./SendMessage";

const mapState = (state: RootState) => ({
  conversations: state.conversations,
  messages: state.messages,
  auth: state.auth,
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
      <div
        className={
          message.senderId === props.auth?.user.id ? "my_message" : "message"
        }
        key={message.id.toString()}
      >
        <p className="message_sender">{message.sender.username}</p>
        <p className="message_text">{message.text}</p>
      </div>
    ));

  const renderedTitle = () => {
    const conversation = props.conversations?.find((conv) => conv.id === id);
    const conversationTitle = conversation?.name;
    const conversationImage = conversation?.image ?? "/chat-icon.png";
    return (
      <div className="conversation_title">
        <Link className="back-arrow" to="/conversation">
          <img src="/back-arrow.png" />
        </Link>
        <img src={conversationImage} />
        <p>{conversationTitle}</p>
      </div>
    );
  };

  return (
    <Fragment>
      {renderedTitle()}
      <div className="message_list">{renderedMessages()}</div>
      <SendMessage />
    </Fragment>
  );
};

export default connector(Conversation);
