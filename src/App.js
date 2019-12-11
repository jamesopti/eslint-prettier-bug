import React from "react";

function App() {
  return (
    <div
      className="flex"
      activator={ (
        <div>
          my really long divvvvvvvvvvvvvvvvvvvv
          <span>some child</span>
        </div>
      ) }>
      My app
    </div>
  );
}

export default App;
