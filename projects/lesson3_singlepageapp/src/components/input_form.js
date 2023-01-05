import { useState } from 'react';
import { useRef } from 'react';


function InputForm({ onInsert }) {
  const [task, setTask] = useState('');
  const inputRef = useRef(null);

  function handleChange(event) {
    setTask(event.target.value);
  }

  function handleSubmit(event) {
    // don't submit form
    event.preventDefault();

    onInsert(task);
    setTask('');
    // set the reference to the html component that is focused (cursor in field).
    inputRef.current.focus();
  }

  return (
    <div className="header">
      <form onSubmit={handleSubmit}>
        {/* reference is used to acces the html component (thsi is JSX so neeeds special values) */}
        <input ref={inputRef}
        // set the state to the component:
          // set the state (from html to react)
          onChange={handleChange}
          // set the value (from react to html)
          value={task}

          placeholder="enter task" />
        <button type="submit">add</button>
      </form>
    </div>
  );
}

export default InputForm;
