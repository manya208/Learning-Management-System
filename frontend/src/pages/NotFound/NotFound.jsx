import "./NotFound.css";

function NotFound() {
  return (
    <div className="not-found-page">

      {/* Decorative moving element */}
      <div className="not-found-decoration"></div>

      <div className="not-found-card">

        <div className="not-found-number">
          404
        </div>

        <h1>Page Not Found</h1>

        <p>
          Oops! The page you're looking for doesn't exist
          or may have been moved.
        </p>

        <a href="/" className="not-found-btn">
          <i className="bi bi-house-fill me-2"></i>
          Go to Home
        </a>

      </div>

    </div>
  );
}

export default NotFound;