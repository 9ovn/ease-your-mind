import { useState } from "react";
import "./App.css";
import Alert from "./components/Alert";

function App() {
  return (
    <div>
      <Alert>
        hello <span>world</span>
      </Alert>
    </div>
  );
}

export default App;
