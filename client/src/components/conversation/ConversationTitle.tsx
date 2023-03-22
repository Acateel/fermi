import { Link } from "react-router-dom";
import { Conversation } from "../../state/types";

type Props = { conversation: Conversation | undefined };

const ConversationTitle = (props: Props) => {
  const { conversation } = props;
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

export default ConversationTitle;
