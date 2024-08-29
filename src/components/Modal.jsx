export default function Modal({teamToView = null, handleClose }) {
  return (
    <dialog className="team-view" open>
      <h2 className="team-view__header">{teamToView.name}</h2>
      <img
        className="team-view__logo-image"
        src={teamToView.logo_image}
        alt={teamToView.alt_text}
      />
      <form>
        <button onClick={handleClose} method="dialog">
          Close
        </button>
      </form>
    </dialog>
  );
}
