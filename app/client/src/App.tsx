import React from "react";
import { Button } from "@mr/button";
import "./index.css"

const App: React.FC = () => {
  return <Button onClick={() => console.log("clicked")} text="hello world" />;
};

export default App;
