import "./InstructorDashboard.css";

function InstructorDashboard() {
  return (
    <div className="instructor-page">

      {/* NAVBAR */}

      <header className="instructor-navbar">

        <div className="instructor-brand">
          <i className="bi bi-mortarboard-fill"></i>
          EduVerse
        </div>

        <div className="instructor-nav-title">
          Instructor Dashboard
        </div>

        <div className="instructor-nav-actions">

          <button className="notification-btn">
            <i className="bi bi-bell"></i>
            <span></span>
          </button>

          <div className="instructor-avatar">
            JD
          </div>

        </div>

      </header>


      {/* SIDEBAR + CONTENT */}

      <div className="instructor-layout">

        <aside className="instructor-sidebar">

          <div className="sidebar-profile">

            <div className="sidebar-avatar">
              JD
            </div>

            <strong>John Doe</strong>

            <span>Instructor</span>

          </div>


          <nav className="instructor-menu">

            <a
              href="/instructor-dashboard"
              className="active"
            >
              <i className="bi bi-grid"></i>
              Dashboard
            </a>

            <a href="/instructor/courses">
              <i className="bi bi-book"></i>
              My Courses
            </a>

            <a href="/instructor/create-course">
              <i className="bi bi-plus-circle"></i>
              Create Course
            </a>

            <a href="/instructor/students">
              <i className="bi bi-people"></i>
              Students
            </a>

            <a href="/instructor/analytics">
              <i className="bi bi-bar-chart"></i>
              Analytics
            </a>

            <a href="/instructor/settings">
              <i className="bi bi-gear"></i>
              Settings
            </a>

          </nav>


          <div className="sidebar-bottom">

            <a href="/">
              <i className="bi bi-house"></i>
              Back to Website
            </a>

          </div>

        </aside>


        {/* MAIN */}

        <main className="instructor-main">

          <div className="instructor-heading">

            <div>
              <span>Welcome back!</span>

              <h1>Instructor Dashboard</h1>

              <p>
                Manage your courses and track your students.
              </p>
            </div>

            <a
              href="/instructor/create-course"
              className="create-course-btn"
            >
              <i className="bi bi-plus-lg"></i>
              Create Course
            </a>

          </div>


          {/* STATS */}

          <div className="instructor-stats">

            <div className="instructor-stat-card">

              <div className="instructor-stat-icon">
                <i className="bi bi-book"></i>
              </div>

              <div>
                <span>Total Courses</span>
                <strong>8</strong>
              </div>

            </div>


            <div className="instructor-stat-card">

              <div className="instructor-stat-icon">
                <i className="bi bi-people"></i>
              </div>

              <div>
                <span>Total Students</span>
                <strong>1,248</strong>
              </div>

            </div>


            <div className="instructor-stat-card">

              <div className="instructor-stat-icon">
                <i className="bi bi-star"></i>
              </div>

              <div>
                <span>Average Rating</span>
                <strong>4.8</strong>
              </div>

            </div>


            <div className="instructor-stat-card">

              <div className="instructor-stat-icon">
                <i className="bi bi-eye"></i>
              </div>

              <div>
                <span>Total Views</span>
                <strong>24.6K</strong>
              </div>

            </div>

          </div>


          {/* COURSES */}

          <section className="instructor-section">

            <div className="section-heading">

              <div>
                <h2>Your Courses</h2>
                <p>Manage your published courses.</p>
              </div>

              <a href="/instructor/courses">
                View All
                <i className="bi bi-arrow-right"></i>
              </a>

            </div>


            <div className="instructor-course-grid">

              <div className="instructor-course-card">

                <img
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600"
                  alt="Web Development"
                />

                <div className="course-card-content">

                  <span className="course-category">
                    Development
                  </span>

                  <h3>
                    Full Stack Web Development
                  </h3>

                  <div className="course-card-meta">

                    <span>
                      <i className="bi bi-people"></i>
                      624 students
                    </span>

                    <span>
                      <i className="bi bi-star-fill"></i>
                      4.9
                    </span>

                  </div>

                  <div className="course-card-footer">

                    <span className="published">
                      <i className="bi bi-check-circle"></i>
                      Published
                    </span>

                    <button>
                      Manage
                    </button>

                  </div>

                </div>

              </div>


              <div className="instructor-course-card">

                <img
                  src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600"
                  alt="Programming"
                />

                <div className="course-card-content">

                  <span className="course-category">
                    Programming
                  </span>

                  <h3>
                    JavaScript Fundamentals
                  </h3>

                  <div className="course-card-meta">

                    <span>
                      <i className="bi bi-people"></i>
                      412 students
                    </span>

                    <span>
                      <i className="bi bi-star-fill"></i>
                      4.7
                    </span>

                  </div>

                  <div className="course-card-footer">

                    <span className="published">
                      <i className="bi bi-check-circle"></i>
                      Published
                    </span>

                    <button>
                      Manage
                    </button>

                  </div>

                </div>

              </div>


              <div className="instructor-course-card">

                <img
                  src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=600"
                  alt="Cyber Security"
                />

                <div className="course-card-content">

                  <span className="course-category">
                    Cyber Security
                  </span>

                  <h3>
                    Cyber Security Fundamentals
                  </h3>

                  <div className="course-card-meta">

                    <span>
                      <i className="bi bi-people"></i>
                      212 students
                    </span>

                    <span>
                      <i className="bi bi-star-fill"></i>
                      4.8
                    </span>

                  </div>

                  <div className="course-card-footer">

                    <span className="draft">
                      <i className="bi bi-pencil"></i>
                      Draft
                    </span>

                    <button>
                      Edit
                    </button>

                  </div>

                </div>

              </div>

            </div>

          </section>


          {/* RECENT ACTIVITY */}

          <section className="instructor-section">

            <div className="section-heading">

              <div>
                <h2>Recent Activity</h2>
                <p>Latest activity from your courses.</p>
              </div>

            </div>


            <div className="activity-table">

              <div className="activity-row">

                <div className="activity-table-icon">
                  <i className="bi bi-person-plus"></i>
                </div>

                <div>
                  <strong>
                    New student enrolled
                  </strong>

                  <span>
                    Full Stack Web Development
                  </span>
                </div>

                <small>
                  2 hours ago
                </small>

              </div>


              <div className="activity-row">

                <div className="activity-table-icon">
                  <i className="bi bi-star"></i>
                </div>

                <div>
                  <strong>
                    New course review
                  </strong>

                  <span>
                    "Excellent course!"
                  </span>
                </div>

                <small>
                  Yesterday
                </small>

              </div>


              <div className="activity-row">

                <div className="activity-table-icon">
                  <i className="bi bi-play-circle"></i>
                </div>

                <div>
                  <strong>
                    Lesson completed
                  </strong>

                  <span>
                    JavaScript Fundamentals
                  </span>
                </div>

                <small>
                  2 days ago
                </small>

              </div>

            </div>

          </section>

        </main>

      </div>

    </div>
  );
}

export default InstructorDashboard;