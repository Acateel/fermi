import { Message } from "../../state/types";

type Props = {
  message: Message;
  userId: string | undefined;
};

const MessageCart = (props: Props) => {
  const { message, userId } = props;
  const messageClassName =
    message.senderId === userId ? "my_message" : "message";
  const isMyMessage = messageClassName === "my_message";
  const senderImage = message.sender.image ?? "/user-icon.png";
  return (
    <div className={messageClassName}>
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
};

export default MessageCart;
