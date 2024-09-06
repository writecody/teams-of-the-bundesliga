import { forwardRef, useImperativeHandle, useRef } from "react";

const TeamViewModal = forwardRef(function TeamViewModal(
  { teamToView = {} },
  ref
) {
  const dialog = useRef();

  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });

  return (
    <dialog ref={dialog} className="team-view">
      <h2
        className="team-view__header"
        style={{ color: `${teamToView.primary_color}` }}
      >
        {teamToView.name}
      </h2>
      <img
        className="team-view__logo-image"
        src={teamToView.logo_image}
        alt={teamToView.alt_text}
      />
      <form method="dialog">
        <button>Close</button>
      </form>
    </dialog>
  );
});

export default TeamViewModal;
