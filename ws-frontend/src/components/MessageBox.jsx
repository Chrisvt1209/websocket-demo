import {useState} from "react";

export default (props) => {
    const sendMessage = props.sendMessage;
    const [messageContent, updateContent] = useState("");
    const sendNewMessage = (newMessage) => {
        sendMessage(newMessage);
        updateContent("");
    };
    return(
        <div className="d-flex align-items-center mb-3">
            <label className="form-label me-2" style={{fontSize: '1.25rem'}}>Send a Message:</label>
            <input
                type="text"
                className="form-control me-2"
                name="newMessage"
                placeholder="Enter a new message here..."
                value={messageContent}
                onChange={e => updateContent(e.target.value)}
            />
            <button
                className="btn btn-primary"
                onClick={() => sendNewMessage(messageContent)}
            >
                Send Message
            </button>
        </div>
    )
}