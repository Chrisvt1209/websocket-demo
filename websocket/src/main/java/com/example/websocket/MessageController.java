package com.example.websocket;

import com.example.websocket.connected.ConnectedUser;
import com.example.websocket.connected.ConnectedUserList;
import com.example.websocket.message.Message;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;

@Controller
@CrossOrigin("*")
public class MessageController {
    ConnectedUserList userList = new ConnectedUserList();

    @MessageMapping("/chat")
    @SendTo("/chat")
    public Message index(Message message) {
        return message;
    }

    @MessageMapping("/chat/connected_users")
    @SendTo("/chat/connected_users")
    public ConnectedUserList connectedUsers(ConnectedUser user) {
        userList.handleUser(user);
        return userList;
    }
}
