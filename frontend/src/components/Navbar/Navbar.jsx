import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-white shadow-sm sticky-top">
      <div className="container">

        <a className="navbar-brand fw-bold fs-3" href="/">
  <i
    className="bi bi-mortarboard-fill me-2"
    style={{ color:"#4F817A" }}
  ></i>

  <span
    style={{
      background: "linear-gradient(90deg, #4F817A, #bdf3d9)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
    }}
  >
    EduVerse
  </span>
</a>

        <button
          className="navbar-toggler"
          data-bs-toggle="collapse"
          data-bs-target="#navbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse"
          id="navbar"
        >

          <ul className="navbar-nav mx-auto">

            <li className="nav-item">
              <a className="nav-link" href="/">Home</a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="/">Courses</a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="/">Instructors</a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="/">About</a>
            </li>

          </ul>

          <div>

            <button
    className="btn purple-outline me-2"
    onClick={() => window.location.href = "/login"}
>
    Login
</button>

          <button
    className="btn purple-btn"
    onClick={() => window.location.href = "/register"}
>
    Register
</button>

          </div>

        </div>

      </div>
    </nav>
  );
}

export default Navbar;