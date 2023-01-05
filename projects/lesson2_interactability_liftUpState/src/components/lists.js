export function ListArray({ students }) {
  // WRONG: not using map for iteration.
  let listItems = [];
  for (var i = 0; i < students.length; i++) {
    listItems.push(
      <li key={students[i].id}>
        {students[i].name} <b>{students[i].grade}</b>
      </li>
    );
  }

  return <ul>{listItems}</ul>;
}

export function ListMap({ students }) {
  // const listItems = students.map((student) => (
  //   <li key={student.id}>
  //     {student.name} <b>{student.grade}</b>
  //   </li>
  // ));

  return (
    <ol>
      {/* {listItems} */}
      {students.map((student) => {
        return (
          <li key={student.id}>
            {student.name} <b>{student.grade}</b>
          </li>
        );
      })}
    </ol>
  );
}
