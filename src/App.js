import React from "react";
import { Navbar } from "./components/Navbar/Navbar";
import { Header } from "./components/Header/Header";
import { Orders } from "./components/Orders/Orders";
import { Foods } from "./components/Foods/Foods";
import { Category } from "./components/Category/Category";

function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <Orders />
      <Foods />
      <Category />
    </div>
  );
}

export default App;
