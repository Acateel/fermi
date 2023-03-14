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
    props.conversations?.map((conversation) => (
      <Link className="blank_link" to={`/conversation/${conversation.id}`}>
        <div className="conversation_item">
          <h2>{conversation.name}</h2>
          <h3>{conversation.id}</h3>
        </div>
      </Link>
    ));

  return (
    <div>
      <h1>Conversation List</h1>
      {renderedConversatios()}
    </div>
  );
};

export default connector(ConversationList);
