import "./App.css";
import Header from "./components/Header";
import TeamsContainer from "./components/teamsContainer";
import { useState } from "react";

function App() {
  const [showModal, setShowModal] = useState(false);

  function handleShowModal() {
    setShowModal(true);
  }

  function handleCloseModal() {
    setShowModal(false);
  }

  return (
    <>
      <Header />
      <main>
        <TeamsContainer />
        About Link
      </main>
    </>
  );
}

export default App;
