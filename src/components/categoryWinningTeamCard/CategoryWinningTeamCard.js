import React from "react";
import { useState } from "react";

import { motion, AnimatePresence } from "framer-motion";

import "./CategoryWinningTeamCard.css";
import cross from "../../assets/images/cross.svg";

const CategoryWinningTeamCard = ({
  problem,
  name,
  leader,
  college,
  member1,
  member2,
  member3,
  member4,
  member5,
  member6,
}) => {
  const [modal, setModal] = useState(false);
  const [team, setTeam] = useState([]);

  const getTeam = (
    name,
    leader,
    college,
    member1,
    member2,
    member3,
    member4,
    member5,
    member6
  ) => {
    let temp = [
      name,
      leader,
      college,
      member1,
      member2,
      member3,
      member4,
      member5,
      member6,
    ];
    setTeam((item) => [1, ...temp]);
    return setModal(true);
  };

  document.body.style.overflow = !modal ? "visible" : "hidden";

  return (
    <div>
      <div className="codeutsava__section11-card">
        <div
          className="codeutsava__section11-card-name"
          onClick={() =>
            getTeam(name, leader, member1, member2, member3, member4, member5)
          }
        >
          <h2>{problem} </h2> <p>{name}</p>
        </div>
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
            <h1>Team Name: {name}</h1>
            <h5 style={{ fontWeight: "600" }}>College: {college}</h5>
            <table>
              <tr>
                <td>Team Members</td>
                <td>Name</td>
              </tr>
              {leader && (
                <tr>
                  <td>Leader</td>
                  <td>{leader}</td>
                </tr>
              )}
              <tr>
                <td>Member 1</td>
                <td>{member1}</td>
              </tr>
              <tr>
                <td>Member 2</td>
                <td>{member2}</td>
              </tr>
              <tr>
                <td>Member 3</td>
                <td>{member3}</td>
              </tr>
              {member4 && (
                <tr>
                  <td>Member 4</td>
                  <td>{member4}</td>
                </tr>
              )}
              {member5 && (
                <tr>
                  <td>Member 5</td>
                  <td>{member5}</td>
                </tr>
              )}
            </table>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CategoryWinningTeamCard;
