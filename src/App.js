import React from "react";

function App() {
  return (
    <div
      className={ {display: 'flex'} }
      otherProp={ (
        <div>
          my really long divvvvvvvvvvvvvvvvvvvv
          <button>some child</button>
        </div>
      ) }>
      My app
    </div>
  );
}

export default App;
