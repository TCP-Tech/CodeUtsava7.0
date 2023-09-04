import React, { useState } from 'react';
import './Chatbot.css';
import ChatbotData from './Chatbotdata'; // Import your chatbot data file
import ChatbotSvg from './chatbot.svg';

const Chatbot = () => {
  const [isChatboxOpen, setIsChatboxOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [selectedQuestion, setSelectedQuestion] = useState(null);
  const [selectedAnswer, setSelectedAnswer] = useState('');

  const toggleChatbox = () => {
    setIsChatboxOpen(!isChatboxOpen);
  };

  const handleSelectQuestion = (question) => {
    setSelectedQuestion(question);

    //answer for que
    const answer =
      ChatbotData.find((item) => item.question === question)?.answer || '';

    setSelectedAnswer(answer);
  };

  return (
    <div className="chatbot-container">
      <div className={`chatbot-icon ${isChatboxOpen ? 'open' : ''}`} onClick={toggleChatbox} >
            <img src={ChatbotSvg} alt="Chatbot" />
      </div>

      {isChatboxOpen && (
        <div className="chatbox">
          <div className="chat-header">
          <span> ASK YOUR QUERIES !</span>
            <button onClick={toggleChatbox} style={{color:"red"}}>
                <div className="cross"><svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg></div>
            </button>
          </div>
          <div className="chat-messages">
            {selectedQuestion ? (
              <div className="chat-message bot">{selectedAnswer}</div>
            ) : (
              <div className="chat-message user">
                Please select a question below:
              </div>
            )}
          </div>
          <div className="chat-questions">
          
            <ul>
              {ChatbotData.map((item) => (
                <li
                  key={item.question}
                  onClick={() => handleSelectQuestion(item.question)}
                >
                  {item.question}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
