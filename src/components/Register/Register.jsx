import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { titleName } from "../../TitleName/TitleName";

const Register = () => {
  const { UpdateUserProfile, registerUser, setUser } = useContext(AuthContext);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  titleName("Register");
  const handleRegisterSubmit = (event) => {
    event.preventDefault();
    setError("");
    const form = event.target;
    const name = form.name.value;
    const photoUrl = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;

    if (password.length < 6) {
      setError("PassWord Must be Grater than 6");
      return;
    }

    if (!/(?=.*[A-Z])/.test(password)) {
      setError("password Must be 1 Letter and Uppercase[A-Z]");
      return;
    }
    registerUser(email, password)
      .then((res) => {
        const user = res.user;
        UpdateUserProfile(user, name, photoUrl);
        console.log(res.user);
        setUser(res.user);
        setSuccess("user is created");
        form.reset();
      })
      .catch((err) => setError(err.message));
  };
  return (
    <div className="hero min-h-screen mt-24 bg-base-200">
      <div className="hero-content flex-col w-5/12 ">
        <div className="text-center">
          <h1 className="text-5xl font-bold">Please Register!</h1>
        </div>
        <div className="card flex-shrink-0 w-full  shadow-2xl bg-base-100">
          <form onSubmit={handleRegisterSubmit}>
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Name"
                  name="name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo</span>
                </label>
                <input
                  type="text"
                  placeholder="Photo URL"
                  name="photo"
                  className="input input-bordered"
                  required
                />
              </div>
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
              Already have an account{" "}
              <Link className="text-orange-700 font-bold" to="/login">
                Please Login
              </Link>
            </p>
            <p className="text-red-700">{error}</p>
            <p className="text-green-600">{success}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
