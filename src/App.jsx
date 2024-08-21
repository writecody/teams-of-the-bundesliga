import { useRef, useState } from "react";

import "./App.css";
import Header from "./components/Header";
import TeamsContainer from "./components/teamsContainer";

function App() {
  const [selectedTeam, setSelectedTeam] = useState(undefined);
  console.log(selectedTeam);

  function handleSelectTeam(teamObject) {
    const teamToDisplay = teamObject;
    setSelectedTeam(teamToDisplay);
  }

  return (
    <>
      <Header></Header>
      <main>
        <TeamsContainer onSelectTeam={handleSelectTeam} />
        About Link
      </main>
    </>
  );
}

export default App;
