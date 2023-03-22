import { connect, ConnectedProps } from "react-redux";
import { RootState } from "../../state/store";
import { fetchAllConversation } from "../../state/creators";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import "./ConversationList.css";

const mapState = (state: RootState) => ({
  conversations: state.conversations,
});

const connector = connect(mapState, { fetchAllConversation });

type PropsFromRedux = ConnectedProps<typeof connector>;

const ConversationList = (props: PropsFromRedux) => {
  useEffect(() => {
    props.fetchAllConversation();
  }, []);

  const renderedConversatios = () =>
    props.conversations?.map((conversation) => {
      const conversationImage = conversation?.image ?? "/chat-icon.png";
      return (
        <Link
          className="blank_link"
          to={`/conversation/${conversation.id}`}
          key={conversation.id}
        >
          <div className="conversation_item" key={conversation.id}>
            <img className="conversation_image" src={conversationImage} />
            <div>
              <h2 className="conversation_name">{conversation.name}</h2>
              <h3 className="conversation_desctiption">{conversation.id}</h3>
            </div>
          </div>
        </Link>
      );
    });

  return (
    <div>
      <h1>Conversation List</h1>
      {renderedConversatios()}
    </div>
  );
};

export default connector(ConversationList);
