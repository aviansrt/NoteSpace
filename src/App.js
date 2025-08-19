import React, { useState } from "react";
import ModalRegister from "./components/ModalRegister";

function App() {
  const [open, setOpen] = useState(false);

  return (
    <div className="app">
      <header>

        <div className="header-logo">
          <img className="logo" src="/logo.png" alt="Logo" />
        </div>
        
        <div className="header-buttons">
          <button>Log in</button>
        </div>

        <div className="switch">
          <div className="theme light"></div>
        </div>

      </header>

      <main>

      <h1 className="main-title">Get started with NoteSpace!</h1>

      <div className="main-button-container">
        <button className="main-button" onClick={() => setOpen(true)}>Create note</button>
      </div>
      <ModalRegister open={open} onClose={() => setOpen(false)} />

      <div className="idea">

        <div className="shopping-list">
          <h3>Shopping list</h3>
          <p>- Milk - Bread - Eggs</p>
        </div>

        <div className="todo-list">
          <h3>Todo list</h3>
          <p>- Buy groceries - Clean the house - Finish homework</p>
        </div>

        <div className="notes">
          <h3>Notes</h3>
          <p>- Remember to call mom - Schedule dentist appointment</p>
        </div>
        </div>
        </main>
    </div>
  );
}

export default App;