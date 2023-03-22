import { connect, ConnectedProps } from "react-redux";
import { RootState } from "../../state/store";
import {
  fetchMessages,
  removeMessages,
  fetchAllConversation,
} from "../../state/creators";
import { useParams } from "react-router-dom";
import { Fragment, useEffect, useRef } from "react";
import "./Conversation.css";
import SendMessage from "./SendMessage";
import ConversationTitle from "./ConversationTitle";
import MessageCart from "./MessageCart";

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
    props.messages?.map((message) => (
      <MessageCart
        message={message}
        userId={props.auth?.user.id}
        key={message.id}
      />
    ));

  return (
    <Fragment>
      <ConversationTitle
        conversation={props.conversations?.find((conv) => conv.id === id)}
      />
      <div className="message_list">{renderedMessages()}</div>
      <div ref={messagesEndRef}></div>
      <SendMessage />
    </Fragment>
  );
};

export default connector(Conversation);
