import "./Register.css";

function Register() {
  return (
    <div className="auth-page">

      <div className="auth-card register-card">

        <div className="auth-logo">
          <i className="bi bi-mortarboard-fill"></i>
          <span>EduVerse</span>
        </div>

        <h2>Create Your Account</h2>

        <p className="auth-subtitle">
          Start your learning journey with EduVerse.
        </p>

        <form>

          {/* Full Name */}
          <div className="form-group">
            <label>Full Name</label>

            <input
              type="text"
              placeholder="Enter your full name"
              required
            />
          </div>

          {/* Email */}
          <div className="form-group">
            <label>Email Address</label>

            <input
              type="email"
              placeholder="Enter your email"
              required
            />
          </div>

          {/* Password */}
          <div className="form-group">
            <label>Password</label>

            <input
              type="password"
              placeholder="Create a password"
              required
            />
          </div>

          {/* Confirm Password */}
          <div className="form-group">
            <label>Confirm Password</label>

            <input
              type="password"
              placeholder="Confirm your password"
              required
            />
          </div>

          {/* Role */}
          <div className="form-group">
            <label>I want to join as</label>

            <select required>
              <option value="">
                Select your role
              </option>

              <option value="student">
                Student
              </option>

              <option value="instructor">
                Instructor
              </option>
            </select>
          </div>

          {/* Terms */}
          <div className="terms">
            <input
              type="checkbox"
              required
            />

            <span>
              I agree to the Terms and Conditions.
            </span>
          </div>

          <button
            type="submit"
            className="auth-btn"
          >
            Create Account
          </button>

        </form>

        <p className="register-text">
          Already have an account?
          <a href="/login"> Login</a>
        </p>

      </div>

    </div>
  );
}

export default Register;