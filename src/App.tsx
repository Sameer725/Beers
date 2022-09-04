import React from "react";

import { Header } from "components";
import { Home } from "pages";

function App() {
  return (
    <div className=" min-h-screen scrollbar-buzz">
      <Header title="Beers" />

      <main className="p-5">
        <Home />
      </main>
    </div>
  );
}

export default App;
