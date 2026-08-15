import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">

        <div className="row gy-4">

          {/* Brand */}
          <div className="col-lg-4 col-md-6">
            <h3 className="footer-brand">
              <i className="bi bi-mortarboard-fill me-2"></i>
              EduVerse
            </h3>

            <p>
              Learn beyond limits. Build your skills, explore new
              opportunities and grow with EduVerse.
            </p>

            <div className="social-icons">
              <a href="#!" aria-label="Instagram">
                <i className="bi bi-instagram"></i>
              </a>

              <a href="#!" aria-label="LinkedIn">
                <i className="bi bi-linkedin"></i>
              </a>

              <a href="#!" aria-label="GitHub">
                <i className="bi bi-github"></i>
              </a>

              <a href="#!" aria-label="Twitter">
                <i className="bi bi-twitter-x"></i>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-lg-2 col-md-6">
            <h5>Quick Links</h5>

            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/">Courses</a></li>
              <li><a href="/">Instructors</a></li>
              <li><a href="/">About Us</a></li>
            </ul>
          </div>

          {/* Learning */}
          <div className="col-lg-3 col-md-6">
            <h5>Learning</h5>

            <ul>
              <li><a href="/">Popular Courses</a></li>
              <li><a href="/">Categories</a></li>
              <li><a href="/">Certificates</a></li>
              <li><a href="/">Become an Instructor</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="col-lg-3 col-md-6">
            <h5>Contact Us</h5>

            <p>
              <i className="bi bi-envelope me-2"></i>
              support@eduverse.com
            </p>

            <p>
              <i className="bi bi-geo-alt me-2"></i>
              India
            </p>
          </div>

        </div>

        <hr />

        <div className="footer-bottom">
          <p>© 2026 EduVerse. All Rights Reserved.</p>

          <div>
            <a href="/">Privacy Policy</a>
            <a href="/">Terms & Conditions</a>
          </div>
        </div>

      </div>
    </footer>
  );
}

export default Footer;