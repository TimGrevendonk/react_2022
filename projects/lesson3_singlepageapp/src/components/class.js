import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { getAllStudents } from '../data/student_api';

function Class() {
  const navigate = useNavigate()

  const output = getAllStudents().map( (student) => {
    return (
      // always set a key per item in a list.
      <li key={student.id}>
        <Link to={"/class/" + student.id}>{student.name}</Link>
      </li>
    );
  });

  return (
    <div>
      <h2>Class</h2>
      <ol>
        {/* output is the variable name with the students in it. */}
        {output}
      </ol>
      <Link onClick={() => navigate(-1)}>Back</Link>
    </div>
  );
}

export default Class;