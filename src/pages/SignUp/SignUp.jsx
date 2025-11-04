import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { signup } from "api/userApi";
import "pages/SignUp/SignUp.css";

const SignUp = () => {
  // Hook
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  // Submit method
  const handleSignup = async (data, event) => {
    // Prevent reload
    event.preventDefault();

    // Call api
    try {
      const res = await signup(data);
      alert(
        "Signup successfully, you will be redirect into dashboard in a few seconds"
      );

      const username = data.username;
      navigate("/dashboard", { state: { username } });
    } catch (err) {
      alert(err.response?.data?.error || "Failed to signup");
    }
  };

  // UI
  return (
    <>
      <div className="Container">
        <div className="SignUpBlock">
          <header>
            <h1>SIGN UP</h1>
            <p>
              Already have an account? <Link to="/signin">Sign in</Link>
            </p>
          </header>
          <section>
            <form onSubmit={handleSubmit(handleSignup)}>
              <label htmlFor="userName">
                Enter your username:
                <input
                  {...register("username", {
                    required: "Username is required",
                    minLength: 1,
                  })}
                  id="userName"
                  type="text"
                />
                {errors.username && (
                  <p className="error">{errors.username.message}</p>
                )}
              </label>
              <label htmlFor="password">
                Enter your password:
                <input
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 6,
                      message: "Password must be longer than 6 characters",
                    },
                  })}
                  id="password"
                  type="password"
                />
                {errors.password && (
                  <p className="error">{errors.password.message}</p>
                )}
              </label>
              <button type="submit">SIGN UP</button>
            </form>
          </section>
        </div>
      </div>
    </>
  );
};

export default SignUp;
