import React from "react";
import Header from "./components/header";
import UserForm from "./components/userform";
import "./App.css";
import "./index.css";
import Commentlist from "./components/commentlist";

function App() {
  return (
    <div className="app">
      <Header />
      <UserForm />
      <Commentlist />
    </div>
  );
}

export default App;
