import { useState } from "react";

export default function Form() {
  const [person, setPerson] = useState({
    firstName: "Jeff",
    lastName: "Jones",
    email: "jjones@thomasmore.be",
  });

  function handleFirstNameChange(e) {
    setPerson({
      // spread operater copies the object.
      ...person,
      firstName: e.target.value,
    });
  }

  function handleLastNameChange(e) {
    setPerson({
      ...person,
      lastName: e.target.value,
    });
  }

  function handleEmailChange(e) {
    setPerson({
      ...person,
      email: e.target.value,
    });
  }

  return (
    <>
      <div>
        First name:
        <input value={person.firstName} onChange={handleFirstNameChange} />
      </div>
      <div>
        Last name:
        <input value={person.lastName} onChange={handleLastNameChange} />
      </div>
      <div>
        Email:
        <input value={person.email} onChange={handleEmailChange} />
      </div>
      <p>
        {person.firstName}
        {person.lastName}({person.email})
      </p>
    </>
  );
}
