import { useState, createContext, useContext } from "react";

const UserContext = createContext();

export default function Hello() {
  const [user, setUser] = useState("John Best");

  return (
    // wrap child components in useContext.provider and supply the user state.
    // All components in the tree wil have access to the userContext.
    <UserContext.Provider value={{ user, setUser }}>
      <p>{`Hello ${user}!`}</p>
      <Component2 />
    </UserContext.Provider>
  );
}

function Component2({ user }) {
  return (
    <UserContext.Provider value={user}>
      <p>Component 2</p>
      <Component3 />
    </UserContext.Provider>
  );
}

function Component3({ user }) {
  const { setUser } = useContext(UserContext);
  return (
    <UserContext.Provider value={{ user, setUser }}>
      <p>Component 3</p>
      <input
        type="button"
        onClick={() => setUser("Olivia Jones")}
        value="Olivia"
      />
      <Component4 />
    </UserContext.Provider>
  );
}

function Component4({ user }) {
  return (
    <UserContext.Provider value={user}>
      <p>Component 4</p>
      <Component5 />
    </UserContext.Provider>
  );
}

function Component5() {
  const { user } = useContext(UserContext);
  return (
    <>
      <p>Component 5</p>
      <p>{`Hello ${user} again!`}</p>
    </>
  );
}
