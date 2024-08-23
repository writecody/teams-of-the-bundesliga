import { teamsInfo } from "../data/teamInfo.js";
import { forwardRef } from "react";

const TeamViewModal = forwardRef(function TeamViewModal({
  selectedTeam,
  onClose
}, ref) {
  console.log(selectedTeam);

  return (
    <dialog ref={ref} className="team-view">
      <h2>TEAM NAME</h2>
      <img src={null} alt="Logo image" />
      <p className="team-view__caption">TEAM DESCRIPTION</p>
      <form method="dialog">
        <button onClick={onClose}>Close</button>
      </form>
    </dialog>
  );
});

export default TeamViewModal;
