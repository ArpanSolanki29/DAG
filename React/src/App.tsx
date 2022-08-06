import { ReactFlowProvider } from "./additional-components";
import "./App.css";
import Canvas from "./Canvas";

function App() {
  return (
    <div className="dndflow">
      <ReactFlowProvider>
        <div className="reactflow-wrapper">
          <Canvas />
        </div>
      </ReactFlowProvider>
    </div>
  );
}

export default App;
