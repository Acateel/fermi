import { connect, ConnectedProps } from "react-redux";
import { RootState } from "../../state/store";
import {
  fetchMessages,
  removeMessages,
  fetchAllConversation,
} from "../../state/creators";
import { Link, useParams } from "react-router-dom";
import { Fragment, useEffect, useRef } from "react";
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

  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [props.messages]);

  const renderedMessages = () =>
    props.messages?.map((message) => {
      const messageClassName =
        message.senderId === props.auth?.user.id ? "my_message" : "message";
      const isMyMessage = messageClassName === "my_message";
      const senderImage = message.sender.image ?? "/user-icon.png";
      return (
        <div className={messageClassName} key={message.id.toString()}>
          {!isMyMessage && (
            <img className="message_sender_image" src={senderImage} />
          )}
          <div className="message_body">
            <p className="message_sender">{message.sender.username}</p>
            <p className="message_text">{message.text}</p>
          </div>
          {isMyMessage && (
            <img className="message_sender_image" src={senderImage} />
          )}
        </div>
      );
    });

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
      <div ref={messagesEndRef}></div>
    </Fragment>
  );
};

export default connector(Conversation);
