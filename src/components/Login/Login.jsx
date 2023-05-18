import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { IoLogoGoogle } from "react-icons/io";

const Login = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";
  const { loginUser, googleLogin, setPath } = useContext(AuthContext);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const handleGoogle = () => {
    googleLogin();

    setPath(navigate(from, { replace: true }));
  };
  const handleLoginSubmit = (event) => {
    setError("");
    setSuccess("");
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    loginUser(email, password)
      .then((res) => {
        const user = res.user;
        console.log(user);
        setSuccess("User Is Log in");
        navigate(from, { replace: true });
      })
      .catch((err) => setError(err.message));
  };
  return (
    <div className="hero min-h-screen  bg-base-200">
      <div className="hero-content flex-col w-5/12 ">
        <div className="text-center">
          <h1 className="text-5xl font-bold">Please Login!</h1>
        </div>
        <div className="card flex-shrink-0 w-full  shadow-2xl bg-base-100">
          <form onSubmit={handleLoginSubmit}>
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  name="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  name="password"
                  required
                  className="input input-bordered"
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <input className="btn btn-error" type="submit" value="Log in" />
              </div>
            </div>
          </form>
          <div className="p-8">
            <p>
              Do not have an account?{" "}
              <Link className="text-orange-700 font-bold" to="/register">
                Please Register
              </Link>
            </p>
            <div>
              <button onClick={handleGoogle} className="btn btn-ghost ">
                <IoLogoGoogle className="text-3xl text-orange-700"></IoLogoGoogle>
                <span className="text-blue-800">Google</span>
              </button>
            </div>
            <p className="text-red-700">{error}</p>
            <p className="text-green-800">{success}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
