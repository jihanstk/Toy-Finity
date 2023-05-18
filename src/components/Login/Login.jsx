import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Login = () => {
  const { UpdateUserProfile, registerUser } = useContext(AuthContext);
  const handleLoginSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photoUrl = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, photoUrl, email, password);
    registerUser(email, password)
      .then((res) => {
        const user = res.user;
        console.log(user);
        UpdateUserProfile(user, name, photoUrl);
      })
      .catch((err) => console.log(err.message));
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
                <input
                  className="btn btn-error"
                  type="submit"
                  value="Register"
                />
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
