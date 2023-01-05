import { useState } from "react";

function ControlledComponent(){
  const [firstname, setFirstname] = useState("");

  const inputStyle = {
    padding: 10,
    borderRadius: 10,
    border: 'none',
    boxShadow: '0 0 15px 4px rgba(0,0,0,0.06)'
  };

  function handleChange(event) {
    // get the value from the target that comes from the event.
    setFirstname(event.target.value);
  }

  return (
    <div>
      <input style={inputStyle}
        onChange={handleChange}
        // set a value INSIDE the input field.
        value={firstname}
        />
        {/* use the value read from the setFirstname via the input */}
      <div>Hello {firstname}</div>
    </div>
  );
}

export default ControlledComponent;