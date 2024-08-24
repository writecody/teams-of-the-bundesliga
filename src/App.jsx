import { forwardRef, useRef, useState } from "react";

import "./App.css";
import Header from "./components/Header";
import TeamsContainer from "./components/teamsContainer";
import TeamViewModal from "./components/TeamViewModal";

function App() {
  const [selectedTeam, setSelectedTeam] = useState({});
  console.log(selectedTeam);
  let openModal;

  const dialogRef = useRef();

  function handleSelectTeam(teamObject) {
    const teamToDisplay = teamObject;
    setSelectedTeam(teamToDisplay);
    dialogRef.current.showModal();

    return;
  }

  function handleCloseModal() {
    openModal = false;
  }

  return (
    <>
      <Header></Header>
      <main>
        <TeamsContainer onSelectTeam={handleSelectTeam} />
        <TeamViewModal
          ref={dialogRef}
          selectedTeam={selectedTeam}
          onClose={handleCloseModal}
        />
        About Link
      </main>
    </>
  );
}

export default App;
