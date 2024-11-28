import ChatMessage from "./ChatMessage.jsx";

export default (props) => {
    const messages = props.messages;
    return(
        <div className="mt-4 mb-4">
            <h1 className="display-4">Messages:</h1>
            <span>
        {messages.length ?
            messages.map(message => (
                <ChatMessage key={message.messageId} userName={message.userName} message={message.messageContent}/>
            ))
            : <p className="lead">No messages currently posted. Try posting one to start out!</p>}
      </span>
        </div>
    )
}