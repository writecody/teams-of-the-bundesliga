export default function TeamViewModal({ selectedTeam }) {
  return (
    <dialog className="team-view">
      <h2 className="team-view__header">{selectedTeam.name}</h2>
      <img
        className="team-view__logo-image"
        src={selectedTeam.logo_image}
        alt={selectedTeam.logo_image}
      />
      <p className="team-view__caption">{selectedTeam.nickname}</p>
      <form method="dialog">
        <button>Close</button>
      </form>
    </dialog>
  );
}
