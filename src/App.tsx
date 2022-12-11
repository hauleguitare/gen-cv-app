import React from "react";
import Article from "./components/article";
import Avatar from "./components/avatar";
import Sidebar from "./components/sidebar";

function App() {
  return (
    <div className="App">
      <div className="min-h-screen flex container">
        <Sidebar />
        <Article />
      </div>
    </div>
  );
}

export default App;
