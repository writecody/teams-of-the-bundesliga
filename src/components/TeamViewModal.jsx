import { forwardRef } from "react";

const TeamViewModal = forwardRef(function TeamViewModal({
  selectedTeam,
  onClose
}, ref) {

  return (
    <dialog ref={ref} className="team-view">
      <h2>{selectedTeam.name}</h2>
      <img src={selectedTeam.logo_image} alt={selectedTeam.logo_image} /> 
      <p className="team-view__caption">{selectedTeam.nickname}</p>
      <form method="dialog">
        <button onClick={onClose}>Close</button>
      </form>
    </dialog>
  );
});

export default TeamViewModal;
