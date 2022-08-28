import { ReactFlowProvider } from "./additional-components";
import "./App.css";
import Canvas from "./Canvas";

function App() {
  return (
    <ReactFlowProvider>
      <Canvas />
    </ReactFlowProvider>
  );
}

export default App;
