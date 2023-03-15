import { FormEvent, useState } from "react";
import { connect, ConnectedProps } from "react-redux";
import { useParams } from "react-router-dom";
import { sendMessage } from "../../state/creators";
import "./SendMessage.css";

const connector = connect(null, { sendMessage });

type PropsFromRedux = ConnectedProps<typeof connector>;

const SendMessage = (props: PropsFromRedux) => {
  const conversationId = useParams().id ?? "";
  const [text, setText] = useState("");

  const onSendMessage = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (text.length > 0) {
      props.sendMessage(text, conversationId);
      setText("");
    }
  };

  return (
    <form className="send_message" onSubmit={onSendMessage}>
      <input
        className="send_message_text"
        type="text"
        placeholder="Write message..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button className="send_message_send" type="submit">
        <img src="/send-icon.png" />
      </button>
    </form>
  );
};

export default connector(SendMessage);
