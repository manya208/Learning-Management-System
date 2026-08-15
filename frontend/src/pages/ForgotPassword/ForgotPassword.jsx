import "./ForgotPassword.css";

function ForgotPassword() {
  return (
    <div className="auth-page">

      <div className="auth-card">

        <div className="auth-logo">
          <i className="bi bi-mortarboard-fill"></i>
          <span>EduVerse</span>
        </div>

        <div className="forgot-icon">
          <i className="bi bi-key-fill"></i>
        </div>

        <h2>Forgot Password?</h2>

        <p className="auth-subtitle">
          No worries! Enter your registered email address
          and we'll help you reset your password.
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

          <button
            type="submit"
            className="auth-btn"
          >
            Send Reset Link
          </button>

        </form>

        <p className="back-login">
          <a href="/login">
            <i className="bi bi-arrow-left"></i>
            &nbsp; Back to Login
          </a>
        </p>

      </div>

    </div>
  );
}

export default ForgotPassword;