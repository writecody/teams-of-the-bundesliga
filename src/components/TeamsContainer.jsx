import { useRef, useState } from "react";

import { teamsInfo } from "../data/teamInfo";

import backgroundImage from "../assets/cartoon-soccer-ball-on-field.png";
import TeamViewModal from "./TeamViewModal";

export default function TeamsContainer() {
  const [selectedTeam, setSelectedTeam] = useState();
  const dialog = useRef();

  function handleSelectTeam(teamObject) {
    const teamToDisplay = teamObject;
    setSelectedTeam(teamToDisplay);
    dialog.current.open();

    return;
  }

  return (
    <>
 
        <TeamViewModal ref={dialog} teamToView={selectedTeam}></TeamViewModal>
 
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
    </>
  );
}
