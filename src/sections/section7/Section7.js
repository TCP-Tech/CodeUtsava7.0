import React from "react";

import "./Section7.css";

import file10 from "../../assets/images/file10.png";
import AccordionDiv from "../../components/faq/QuestionAccordian";
import { motion } from "framer-motion";

const Section7 = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1, transition: { duration: 1 } }}
      viewport={{ once: false }}
      className="codeutsava__section7"
      id="faq"
    >
      <div className="codeutsava__section7-body">
        <div className="codeutsava__section7-part1">
          <div className="codeutsava__section7-title">Have a question?</div>
          <div className="codeutsava__section7-content">
            We know that many of you would be first-time hackers here and there
            must be many questions buzzing in your mind. But don't worry, we got
            you covered! Go through these FAQs and you'll get most of your
            queries solved.
          </div>
        </div>
        <div className="codeutsava__section7-part2">
          <div className="codeutsava__section7-image">
            <img alt="men" src={file10} />
          </div>
          <div className="codeutsava__section7-questions">
            <AccordionDiv />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Section7;
