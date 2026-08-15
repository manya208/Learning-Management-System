import "./Certificate.css";

function Certificate() {
  return (
    <div className="certificate-page">

      {/* TOP BAR */}

      <header className="certificate-navbar">

        <div className="certificate-brand">
          <i className="bi bi-mortarboard-fill"></i>
          EduVerse
        </div>

        <a
          href="/student-dashboard"
          className="certificate-dashboard"
        >
          <i className="bi bi-grid"></i>
          Dashboard
        </a>

      </header>


      {/* CONTENT */}

      <main className="certificate-container">

        <div className="certificate-top">

          <div>
            <span className="certificate-label">
              Course Completed
            </span>

            <h1>Your Certificate</h1>

            <p>
              Congratulations on successfully completing
              the course!
            </p>
          </div>

          <button
            className="download-certificate"
            onClick={() => window.print()}
          >
            <i className="bi bi-download"></i>
            Download Certificate
          </button>

        </div>


        {/* CERTIFICATE */}

        <div className="certificate-wrapper">

          <div className="certificate">

            <div className="certificate-border">

              <div className="certificate-content">

                <div className="certificate-logo">
                  <i className="bi bi-mortarboard-fill"></i>
                  EduVerse
                </div>

                <p className="certificate-heading">
                  CERTIFICATE OF COMPLETION
                </p>

                <p className="certificate-presented">
                  This certificate is proudly presented to
                </p>

                <h2 className="student-name">
                  Manya
                </h2>

                <div className="certificate-line"></div>

                <p className="certificate-text">
                  for successfully completing the course
                </p>

                <h3 className="course-name">
                  Full Stack Web Development
                </h3>

                <p className="certificate-description">
                  Demonstrating dedication, commitment and
                  successful completion of the required
                  course content and assessment.
                </p>


                <div className="certificate-details">

                  <div>
                    <span>Issued On</span>
                    <strong>August 2026</strong>
                  </div>

                  <div className="certificate-seal">
                    <i className="bi bi-patch-check-fill"></i>
                    <span>VERIFIED</span>
                  </div>

                  <div>
                    <span>Certificate ID</span>
                    <strong>EDU-2026-001</strong>
                  </div>

                </div>


                <div className="certificate-signature">

                  <div>
                    <div className="signature">
                      EduVerse
                    </div>

                    <span>Course Director</span>
                  </div>

                  <div>
                    <div className="signature">
                      EduVerse
                    </div>

                    <span>Instructor</span>
                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </main>

    </div>
  );
}

export default Certificate;