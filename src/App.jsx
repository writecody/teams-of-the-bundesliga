import "./App.css";
import Header from "./components/Header";
import TeamsContainer from "./components/teamsContainer";
import { useState } from "react";

function App() {
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
