import { Link, useNavigate, useParams } from "react-router-dom";
import { getStudentById } from "../data/student_api";

function Student() {
  // get the parameters from the url.
  // const {id: id} = useParams()
  const urlParams = useParams();
  const navigate = useNavigate();

  const student = getStudentById(Number(urlParams.id));
  if (!student) {
    return <div>Student does not exist</div>;
  }

  return (
    <div>
      <h2>Student</h2>
      <p>
        Name: {student.name}
        <br />
        Id: {student.id}
        <br />
        Grade: {student.grade}
      </p>
      <Link onClick={() => navigate(-1)}>Back</Link>
    </div>
  );
}

export default Student;
