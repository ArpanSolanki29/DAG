import { XYCoord } from "react-dnd";
import { v4 as uuidv4 } from "uuid";
import { Node } from "../../store/state";

const CreateNode = (kind: string, location: XYCoord | null): Node => {
  return {
    id: uuidv4(),
    kind: kind,
    x: location?.x ?? 0,
    y: location?.y ?? 0,
  };
};

export default CreateNode;
