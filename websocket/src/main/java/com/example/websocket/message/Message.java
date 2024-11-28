package com.example.websocket.message;

public class Message {
    private final String userName;
    private final String messageContent;

    public Message(String userName, String messageContent) {
        this.userName = userName;
        this.messageContent = messageContent;
    }

    public String getUserName() {
        return userName;
    }

    public String getMessageContent() {
        return messageContent;
    }
}
