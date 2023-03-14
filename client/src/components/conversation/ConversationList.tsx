import { connect, ConnectedProps } from "react-redux";
import { RootState } from "../../state/store";
import { fetchAllConversation } from "../../state/creators";
import { useEffect } from "react";

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
      <div className="conversation_item">
        <h1>{conversation.id}</h1>
        <h2>{conversation.name}</h2>
      </div>
    ));

  return (
    <div>
      <h1>Conversation List</h1>
      {renderedConversatios()}
    </div>
  );
};

export default connector(ConversationList);
