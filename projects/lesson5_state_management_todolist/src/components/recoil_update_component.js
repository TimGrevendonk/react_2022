import { useRecoilState } from "recoil";
import { textState } from "../store";

export default function UpdateComponent() {
  const [text, setText] = useRecoilState(textState);

  function onChange(event) {
    setText(event.target.value);
  }

  return (
    <>
      Change the atom value here: <input type="text" onChange={onChange} />
    </>
  );
}
