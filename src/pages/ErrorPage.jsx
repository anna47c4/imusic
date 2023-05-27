import { useEffect } from "react";
import { Link } from "react-router-dom";
function ErrorPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <main>
        <div className="error-page">
          <h1>HOV! Du er havnet på en side der er under konstruktion</h1>
          <div className="construction-wrapper">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="68"
              viewBox="0 -960 960 960"
              width="68"
              fill="#fc612d"
            >
              <path d="M768-120 517-371l57-57 251 251-57 57Zm-581 0-57-57 290-290-107-107-23 23-44-44v85l-24 24-122-122 24-24h86l-48-48 131-131q17-17 37-23t44-6q24 0 44 8.5t37 25.5L348-699l48 48-24 24 104 104 122-122q-8-13-12.5-30t-4.5-36q0-53 38.5-91.5T711-841q15 0 25.5 3t17.5 8l-85 85 75 75 85-85q5 8 8.5 19.5T841-709q0 53-38.5 91.5T711-579q-18 0-31-2.5t-24-7.5L187-120Z" />
            </svg>
          </div>

          <p>
            <Link to="/"> TILBAGE TIL FORSIDEN</Link>
          </p>
        </div>
      </main>
    </>
  );
}

export default ErrorPage;
