import { ReactFlowProvider } from "./additional-components";
import "./App.css";
import Canvas from "./Canvas";

function App() {
  return (
    <div className="dndflow" style={{ height: "100%" }}>
      <ReactFlowProvider>
        <Canvas />
      </ReactFlowProvider>
    </div>
  );
}

export default App;
