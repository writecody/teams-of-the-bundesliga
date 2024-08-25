import { useState } from "react";

import { teamsInfo } from "../data/teamInfo";
import backgroundImage from "../assets/cartoon-soccer-ball-on-field.png";
import TeamViewModal from "./TeamViewModal";

export default function TeamsContainer({}) {
  const [selectedTeam, setSelectedTeam] = useState({});
  const [showModal, setShowModal] = useState(false);

  console.log("selectedTeam: ", selectedTeam);

  function handleShowModal() {
    setShowModal(true);
  }

  function handleCloseModal() {
    
    setShowModal(false);
  }

  function handleSelectTeam(teamObject) {
    const teamToDisplay = teamObject;
    console.log("handleSelectTeam()");
    setSelectedTeam(teamToDisplay);
    handleShowModal();

    return;
  }

  return (
    <>
      <div
        className="teams-container"
        style={{
          background: `url(${backgroundImage}`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        {teamsInfo.map((object, index) => {
          return (
            <div
              key={index}
              className="teams-container__logo-container"
              onClick={() => handleSelectTeam(object)}
            >
              <img
                className="teams-container__logo"
                src={object.logo_image}
                alt={object.alt_text}
              />
            </div>
          );
        })}
      </div>
      {showModal && (
        <TeamViewModal selectedTeam={selectedTeam} onClose={handleCloseModal} />
      )}
    </>
  );
}
