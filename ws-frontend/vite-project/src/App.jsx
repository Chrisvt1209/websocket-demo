import React, { useState, useEffect } from 'react';
import Stomp from 'stompjs';
import SockJS from 'sockjs-client';
import './App.css'

const App = () => {
    const[messages, setMessages] = useState([]);
    const[userData, setUserData] = useState({
        username:"",
        connected: false,
        message:""
    });

    useEffect(() => {
        if (userData.connected) {
            connect();
        }
    }, [userData.connected]);

    let stompClient = null;

    const connect = () => {
        console.log('Attempting to connect to WebSocket...');
        const socket = new SockJS('http://localhost:8080/ws');
        stompClient = Stomp.over(socket);
        console.log('WebSocket client initialized');
        stompClient.connect({}, onConnected, onError);
    };

    const onConnected = () => {
        console.log('Connected to WebSocket');
        stompClient.subscribe('/topic/public', onMessageReceived);
        stompClient.send('/app/chat.addUser', {}, JSON.stringify({sender: userData.username, type: 'JOIN'}));
    };

    const onError = (error) => {
        console.error('Error during WebSocket connection:', error);
    };

    const onMessageReceived = (payload) => {
        console.log('Message received:', payload);
        const message = JSON.parse(payload.body);
        setMessages((prevMessages) => [...prevMessages, message]);
    };

    const handleMessageChange = (event) => {
        const { value } = event.target;
        setUserData({...userData, message: value});
    };

    const sendMessage = () => {
        if (stompClient) {
            const chatMessage = {
                sender: userData.username,
                content: userData.message,
                type: 'CHAT'
            };
            stompClient.send('/app/chat.sendMessage', {}, JSON.stringify(chatMessage));
            setUserData({...userData, message: ""});
        }
    };

    const handleUserNameChange = (event) => {
        const { value } = event.target;
        setUserData({...userData, username:  value});
    };

    const connectUser = () => {
        setUserData({...userData, connected: true});
    };

    return (
        <div className="container mt-5">
            {userData.connected ? (
                <div className="card">
                    <div className="card-body">
                        <ul className="list-group list-group-flush">
                            {messages.map((msg, index) => (
                                <li key={index} className={`list-group-item ${msg.type}`}>
                                    <strong>{msg.sender}:</strong> {msg.content}
                                </li>
                            ))}
                        </ul>
                        <div className="input-group mt-3">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Type a message..."
                                value={userData.message}
                                onChange={handleMessageChange}
                            />
                            <button className="btn btn-primary" onClick={sendMessage}>Send</button>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="card">
                    <div className="card-body">
                        <div className="input-group">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Enter your username"
                                value={userData.username}
                                onChange={handleUserNameChange}
                            />
                            <button className="btn btn-primary" onClick={connectUser}>Connect</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default App;