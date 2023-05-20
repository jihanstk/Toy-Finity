import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div>
        <h1 className="text-9xl font-bold text-slate-700">404</h1>

        <img
          src="https://i.pinimg.com/originals/4b/ac/e0/4bace029e90084db37cbf5140ecfd121.png"
          alt=""
        />
        <div className="text-center my-10">
          <Link className="btn" to="/">
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
