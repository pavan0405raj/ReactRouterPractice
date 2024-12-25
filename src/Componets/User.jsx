import { useParams } from "react-router-dom";

function User() {
  const { id } = useParams(); // Access the dynamic :id parameter
  return (
    <div>
      <h1>User Profile</h1>
      <p>User ID: {id}</p>
    </div>
  );
}

export default User;
