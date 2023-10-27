import React from "react";
import { useState } from "react";

import { motion, AnimatePresence } from "framer-motion";

import "./ProblemCard.css";
import cross from "../../assets/images/cross.svg";
import "../winningTeamCard/WinningTeamCard.css";

const ProblemCard = ({ img, title, domain, statement, background, impact }) => {
  const [modal, setModal] = useState(false);
  const [problem, setProblem] = useState([]);

  const getProblem = (img, title, domain, statement) => {
    let temp = [img, title, domain, statement];
    setProblem((item) => [1, ...temp]);
    return setModal(true);
  };

  document.body.style.overflow = !modal ? "visible" : "hidden";

  return (
    <div>
      <div className="codeutsava__section8-card">
        <img
          className="codeutsava__section8-image"
          src={img}
          onClick={() => getProblem(img, title, domain, statement)}
        ></img>
        <div className="codeutsava__section8-cardtitle">{title}</div>
        <div className="codeutsava__section8-line"></div>
        <div className="codeutsava__section8-carddetails">{domain}</div>
      </div>

      {/* modal */}

      <AnimatePresence>
        {modal && (
          <motion.div
            initial={{ scaleX: 0, scaleY: 0.01 }}
            animate={{ scaleX: [0, 1, 1], scaleY: [0.005, 0.005, 1] }}
            transition={{ duration: 0.8, ease: [0.165, 0.84, 0.44, 1] }}
            exit={{ scaleX: [1, 1, 0], scaleY: [1, 0.005, 0.005] }}
            className="codeutsava__section11-problemModal-body"
          >
            <img
              className="problemModal-close"
              src={cross}
              onClick={() => setModal(false)}
            />
            <h1>{title}</h1>
            <h5 style={{ fontWeight: "600" }}>Domain: {domain}</h5>
            <div style={{ overflowY: "scroll" , display: 'flex', justifyContent: "center"}}>
              <table>
                <tr>
                  <td>Background</td>
                  <td>{background}</td>
                </tr>
                <tr>
                  <td>Problem Statement</td>
                  <td>{statement}</td>
                </tr>
                <tr>
                  <td>Impact</td>
                  <td>{impact}</td>
                </tr>
              </table>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ProblemCard;
