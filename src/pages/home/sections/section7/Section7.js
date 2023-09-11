import React from "react";

import "./Section7.css";

import faqs from "../../../../assets/data/faqData";
import { motion } from "framer-motion";
import downArrow from "../../../../assets/images/downArrow.svg";
import frank from "../../../../assets/images/frakenstein.png";

import { useState } from "react";

const Section7 = () => {

  const [answerId, setAnswerId] = useState(-1);
  const [answer, setAnswer] = useState();

  function fetchQ(index) {
    setAnswerId(index);
    setAnswer(faqs[index].answer);
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1, transition: { duration: 1 } }}
      viewport={{ once: false }}
      className="codeutsava__section7"
      id="faq"
    >
      <div className="codeutsava__section7-title" id="faq">
        FAQs
      </div>
      <div className="codeutsava__section7-body">
        <div className="codeutsava__section7-left">
          <h4 className="codeutsava__section7-left-heading">
            Frankenstein To Your Resque Ask Me Anything From There
          </h4>
          <img
            src={downArrow}
            className="codeutsava__section7-left-heading-arrow"
          ></img>
          <div className={`codeutsava__section7-left-answer-container answer-animation ${
          answerId === -1 ? `answer-hidden` : ``
        }`}>
            <p className="codeutsava__section7-left-answer">
              {answer}
            </p>
          </div>
          <img src={frank} className="codeutsava__section7-left-img"></img>
          <div className="codeutsava__section7-left-bottom-container">
            <div className="codeutsava__section7-left-bottom-content">
              <p>
                Not able to find your question?
                <br /> <br /> Dont worry , fill out the contact us at the end of
                this page. <br />
                <br /> We're excited to chat with you, so expect a response
                within 24 hours.
              </p>
            </div>
          </div>
        </div>
        <div className="codeutsava__section7-right">
          <div className="codeutsava__section7-right-upper">
            <h2>HAVE A QUESTION?</h2>
            <p>
              New to hackathon dont worry we got you covered with all the basic
              information.
            </p>
          </div>
          <div className="codeutsava__section7-right-question-container">
            <ul>
              {faqs.map((faq, index) => (
                <p className="codeutsava__section7-right-question" key={index} onClick={() => fetchQ(index)}>
                  {faq.question}
                </p>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Section7;
