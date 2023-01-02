import { Link, useNavigate } from "react-router-dom";

function Info() {
  const navigate = useNavigate();
  return (
    <div>
      <h2>Info</h2>
      <p>Have fun</p>
      <Link onClick={() => navigate(-1)}>Back</Link>
    </div>
  );
}

export default Info;
