import { v4 as uuidv4 } from "uuid";
import { Node } from "../../store/state";

const CreateNode = (kind: string, location: DOMPoint): Node => {
  return {
    id: uuidv4(),
    kind: kind,
    x: location?.x ?? 0,
    y: location?.x ?? 0,
  };
};

export default CreateNode;
