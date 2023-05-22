import { Link } from "react-router-dom";
function ErrorPage() {
  return (
    <>
      <h1>PAGE NOT FOUND</h1>
      <p>
        Go to the <Link to="/">Homepage</Link>
      </p>
    </>
  );
}

export default ErrorPage;
