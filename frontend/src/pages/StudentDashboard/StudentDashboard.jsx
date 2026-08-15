import "./StudentDashboard.css";

function StudentDashboard() {
  return (
    <div className="student-dashboard">

      {/* Navbar */}
      <nav className="student-nav">

        <div className="student-logo">
          <i className="bi bi-mortarboard-fill"></i>
          EduVerse
        </div>

        <div className="student-nav-links">
          <a href="/">Home</a>
          <a href="/courses">Courses</a>
          <a href="/profile">Profile</a>
        </div>

        <div className="student-user">
          <i className="bi bi-bell"></i>

          <div className="student-avatar">
            JD
          </div>
        </div>

      </nav>


      {/* Main */}
      <main className="student-dashboard-main">

        {/* Welcome */}
        <section className="student-welcome">

          <div>
            <span>Welcome back 👋</span>

            <h1>Keep learning, John!</h1>

            <p>
              Continue your learning journey and reach your goals.
            </p>
          </div>

          <a
            href="/courses"
            className="browse-course-btn"
          >
            <i className="bi bi-search"></i>
            Browse Courses
          </a>

        </section>


        {/* Stats */}
        <section className="student-stats">

          <div className="student-stat-card">
            <div className="student-stat-icon">
              <i className="bi bi-book"></i>
            </div>

            <div>
              <span>Enrolled Courses</span>
              <strong>4</strong>
            </div>
          </div>


          <div className="student-stat-card">
            <div className="student-stat-icon">
              <i className="bi bi-check-circle"></i>
            </div>

            <div>
              <span>Completed</span>
              <strong>2</strong>
            </div>
          </div>


          <div className="student-stat-card">
            <div className="student-stat-icon">
              <i className="bi bi-clock"></i>
            </div>

            <div>
              <span>Learning Hours</span>
              <strong>32h</strong>
            </div>
          </div>


          <div className="student-stat-card">
            <div className="student-stat-icon">
              <i className="bi bi-award"></i>
            </div>

            <div>
              <span>Certificates</span>
              <strong>2</strong>
            </div>
          </div>

        </section>


        {/* Continue Learning */}
        <section className="dashboard-section">

          <div className="dashboard-section-heading">

            <div>
              <h2>Continue Learning</h2>
              <p>Pick up where you left off.</p>
            </div>

            <a href="/courses">
              View All
              <i className="bi bi-arrow-right"></i>
            </a>

          </div>


          <div className="continue-course">

            <img
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=700"
              alt="Web Development"
            />

            <div className="continue-course-content">

              <span>Development</span>

              <h3>
                Full Stack Web Development
              </h3>

              <p>
                Learn modern frontend and backend development.
              </p>

              <div className="progress-info">

                <span>65% completed</span>

                <span>12 / 18 lessons</span>

              </div>

              <div className="progress-bar">
                <div className="progress-fill"></div>
              </div>

              <a
                href="/learn"
                className="continue-btn"
              >
                Continue Learning
                <i className="bi bi-arrow-right"></i>
              </a>

            </div>

          </div>

        </section>


        {/* My Courses */}
        <section className="dashboard-section">

          <div className="dashboard-section-heading">

            <div>
              <h2>My Courses</h2>
              <p>Your enrolled courses.</p>
            </div>

            <a href="/courses">
              View All
              <i className="bi bi-arrow-right"></i>
            </a>

          </div>


          <div className="student-course-grid">

            <div className="student-course-card">

              <img
                src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600"
                alt="JavaScript"
              />

              <div className="student-course-content">

                <span>Programming</span>

                <h3>
                  JavaScript Fundamentals
                </h3>

                <div className="small-progress">
                  <div className="small-progress-fill js-progress"></div>
                </div>

                <div className="course-progress-text">
                  <span>45% complete</span>
                  <span>4.7 ⭐</span>
                </div>

              </div>

            </div>


            <div className="student-course-card">

              <img
                src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=600"
                alt="Cyber Security"
              />

              <div className="student-course-content">

                <span>Cyber Security</span>

                <h3>
                  Cyber Security Fundamentals
                </h3>

                <div className="small-progress">
                  <div className="small-progress-fill cyber-progress"></div>
                </div>

                <div className="course-progress-text">
                  <span>30% complete</span>
                  <span>4.8 ⭐</span>
                </div>

              </div>

            </div>


            <div className="student-course-card">

              <img
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600"
                alt="Data Science"
              />

              <div className="student-course-content">

                <span>Data Science</span>

                <h3>
                  Introduction to Data Science
                </h3>

                <div className="small-progress">
                  <div className="small-progress-fill data-progress"></div>
                </div>

                <div className="course-progress-text">
                  <span>72% complete</span>
                  <span>4.6 ⭐</span>
                </div>

              </div>

            </div>

          </div>

        </section>


        {/* Bottom sections */}
        <div className="dashboard-bottom-grid">

          {/* Certificates */}
          <section className="dashboard-section certificate-box">

            <div className="dashboard-section-heading">

              <div>
                <h2>My Certificates</h2>
                <p>Your achievements.</p>
              </div>

              <a href="/certificates">
                View All
              </a>

            </div>


            <div className="certificate-item">

              <div className="certificate-icon">
                <i className="bi bi-award-fill"></i>
              </div>

              <div>
                <h3>Python Programming</h3>
                <span>Completed • June 2026</span>
              </div>

              <button>
                <i className="bi bi-download"></i>
              </button>

            </div>


            <div className="certificate-item">

              <div className="certificate-icon">
                <i className="bi bi-award-fill"></i>
              </div>

              <div>
                <h3>Web Development Basics</h3>
                <span>Completed • May 2026</span>
              </div>

              <button>
                <i className="bi bi-download"></i>
              </button>

            </div>

          </section>


          {/* Activity */}
          <section className="dashboard-section activity-box">

            <div className="dashboard-section-heading">

              <div>
                <h2>Recent Activity</h2>
                <p>Your latest learning activity.</p>
              </div>

            </div>


            <div className="student-activity">

              <div className="activity-icon">
                <i className="bi bi-play-circle"></i>
              </div>

              <div>
                <strong>
                  Completed a lesson
                </strong>

                <span>
                  JavaScript Fundamentals
                </span>

                <small>
                  2 hours ago
                </small>
              </div>

            </div>


            <div className="student-activity">

              <div className="activity-icon">
                <i className="bi bi-trophy"></i>
              </div>

              <div>
                <strong>
                  Completed a course
                </strong>

                <span>
                  Python Programming
                </span>

                <small>
                  Yesterday
                </small>
              </div>

            </div>


            <div className="student-activity">

              <div className="activity-icon">
                <i className="bi bi-pencil-square"></i>
              </div>

              <div>
                <strong>
                  Completed a quiz
                </strong>

                <span>
                  Cyber Security Basics
                </span>

                <small>
                  2 days ago
                </small>
              </div>

            </div>

          </section>

        </div>

      </main>

    </div>
  );
}

export default StudentDashboard;