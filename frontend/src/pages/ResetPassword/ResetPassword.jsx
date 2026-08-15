import "./ResetPassword.css";

function ResetPassword() {
  return (
    <div className="auth-page">

      <div className="auth-card">

        <div className="auth-logo">
          <i className="bi bi-mortarboard-fill"></i>
          <span>EduVerse</span>
        </div>

        <div className="forgot-icon">
          <i className="bi bi-shield-lock-fill"></i>
        </div>

        <h2>Reset Password</h2>

        <p className="auth-subtitle">
          Create a new password for your EduVerse account.
        </p>

        <form>

          <div className="form-group">
            <label>New Password</label>

            <input
              type="password"
              placeholder="Enter new password"
              required
            />
          </div>

          <div className="form-group">
            <label>Confirm Password</label>

            <input
              type="password"
              placeholder="Confirm new password"
              required
            />
          </div>

          <button
            type="submit"
            className="auth-btn"
          >
            Reset Password
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

export default ResetPassword;