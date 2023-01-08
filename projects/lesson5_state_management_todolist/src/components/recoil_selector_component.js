import { useRecoilValue } from "recoil";
import { textSizeState } from "../store";

export default function SelectorComponent() {
  const textSize = useRecoilValue(textSizeState);

  return (
    <p>
      Number of characters in the atom: <i>{textSize}</i>
    </p>
  );
}
