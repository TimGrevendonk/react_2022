import { useState } from "react";

export default function Plus3Counter() {
  const [number, setNumber] = useState(0);

  function handleClick() {
    // the state is 0 and will be re-set upon next render.
    // the call wil set the number to "1" 3 times, so 1 will still be the result.
    setNumber(number + 1);
    setNumber(number + 1);
    setNumber(number + 1);
  }

  return (
    <>
      <h1>{number}</h1>
      <button onClick={handleClick}>+3</button>
    </>
  );
}
