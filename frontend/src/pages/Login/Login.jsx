import "./Login.css";

function Login() {
  return (
    <div className="auth-page">

      <div className="auth-card">

        <div className="auth-logo">
          <i className="bi bi-mortarboard-fill"></i>
          <span>EduVerse</span>
        </div>

        <h2>Welcome Back!</h2>

        <p className="auth-subtitle">
          Login to continue your learning journey.
        </p>

        <form>

          <div className="form-group">
            <label>Email Address</label>

            <input
              type="email"
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="form-group">
            <label>Password</label>

            <input
              type="password"
              placeholder="Enter your password"
              required
            />
          </div>

          <div className="auth-options">

            <label className="remember-me">
              <input type="checkbox" />
              Remember me
            </label>

            <a href="/forgot-password">
              Forgot Password?
            </a>

          </div>

          <button
            type="submit"
            className="auth-btn"
          >
            Login
          </button>

        </form>

        <p className="register-text">
          Don't have an account?
          <a href="/register"> Register</a>
        </p>

      </div>

    </div>
  );
}

export default Login;