import React from "react";
import Header from "./Header";
import MainContainer from "./MainContainer";
// Run - npm install - to install our dependencies
// Then, run - npm run server - to start up json-server on http://localhost:3001
// In another tab, run - npm start - to start up our React app at http://localhost:3000


function App() {
  return (
    <div>
      <Header />
      <MainContainer />
    </div>
  );
}

export default App;
