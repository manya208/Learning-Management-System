import { useState } from "react";
import "./Profile.css";

function Profile() {

  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div className="profile-page">

      {/* NAVBAR */}

      <header className="profile-navbar">

        <div className="profile-brand">
          <i className="bi bi-mortarboard-fill"></i>
          EduVerse
        </div>

        <div className="profile-nav-links">
          <a href="/">Home</a>
          <a href="/student-dashboard">Dashboard</a>
          <a href="/course/1">Courses</a>
        </div>

        <a
          href="/student-dashboard"
          className="profile-dashboard-btn"
        >
          <i className="bi bi-grid"></i>
          Dashboard
        </a>

      </header>


      {/* PROFILE HEADER */}

      <section className="profile-header">

        <div className="profile-header-content">

          <div className="profile-avatar">
            MK
          </div>

          <div className="profile-main-info">

            <h1>Manya</h1>

            <p>
              Student • Web Development Enthusiast
            </p>

            <span>
              <i className="bi bi-calendar3"></i>
              Joined August 2026
            </span>

          </div>

          <button className="edit-profile-btn">
            <i className="bi bi-pencil"></i>
            Edit Profile
          </button>

        </div>

      </section>


      {/* PROFILE CONTENT */}

      <main className="profile-content">

        {/* TABS */}

        <div className="profile-tabs">

          <button
            className={
              activeTab === "overview"
                ? "profile-tab active"
                : "profile-tab"
            }
            onClick={() => setActiveTab("overview")}
          >
            Overview
          </button>

          <button
            className={
              activeTab === "courses"
                ? "profile-tab active"
                : "profile-tab"
            }
            onClick={() => setActiveTab("courses")}
          >
            My Courses
          </button>

          <button
            className={
              activeTab === "certificates"
                ? "profile-tab active"
                : "profile-tab"
            }
            onClick={() => setActiveTab("certificates")}
          >
            Certificates
          </button>

        </div>


        {/* OVERVIEW */}

        {activeTab === "overview" && (

          <div className="profile-grid">

            {/* STATS */}

            <div className="profile-card stats-card">

              <h2>Learning Overview</h2>

              <div className="stats-grid">

                <div className="stat">

                  <div className="stat-icon">
                    <i className="bi bi-book"></i>
                  </div>

                  <strong>4</strong>

                  <span>Enrolled Courses</span>

                </div>

                <div className="stat">

                  <div className="stat-icon">
                    <i className="bi bi-check-circle"></i>
                  </div>

                  <strong>2</strong>

                  <span>Completed Courses</span>

                </div>

                <div className="stat">

                  <div className="stat-icon">
                    <i className="bi bi-clock"></i>
                  </div>

                  <strong>32h</strong>

                  <span>Learning Time</span>

                </div>

                <div className="stat">

                  <div className="stat-icon">
                    <i className="bi bi-award"></i>
                  </div>

                  <strong>2</strong>

                  <span>Certificates</span>

                </div>

              </div>

            </div>


            {/* PERSONAL INFO */}

            <div className="profile-card">

              <div className="card-title-row">

                <h2>Personal Information</h2>

                <button>
                  <i className="bi bi-pencil"></i>
                </button>

              </div>

              <div className="personal-info">

                <div>
                  <span>Full Name</span>
                  <strong>Manya</strong>
                </div>

                <div>
                  <span>Email</span>
                  <strong>student@example.com</strong>
                </div>

                <div>
                  <span>Role</span>
                  <strong>Student</strong>
                </div>

                <div>
                  <span>Learning Goal</span>
                  <strong>Full Stack Development</strong>
                </div>

              </div>

            </div>


            {/* RECENT ACTIVITY */}

            <div className="profile-card activity-card">

              <h2>Recent Activity</h2>

              <div className="activity-list">

                <div className="activity-item">

                  <div className="activity-icon">
                    <i className="bi bi-play-fill"></i>
                  </div>

                  <div>
                    <strong>
                      Completed Introduction to HTML
                    </strong>

                    <span>
                      Full Stack Web Development • 2 hours ago
                    </span>
                  </div>

                </div>


                <div className="activity-item">

                  <div className="activity-icon">
                    <i className="bi bi-trophy"></i>
                  </div>

                  <div>
                    <strong>
                      Completed Web Development Quiz
                    </strong>

                    <span>
                      Score: 4/5 • Yesterday
                    </span>
                  </div>

                </div>


                <div className="activity-item">

                  <div className="activity-icon">
                    <i className="bi bi-bookmark"></i>
                  </div>

                  <div>
                    <strong>
                      Enrolled in Cyber Security Fundamentals
                    </strong>

                    <span>
                      3 days ago
                    </span>
                  </div>

                </div>

              </div>

            </div>


            {/* SKILLS */}

            <div className="profile-card">

              <h2>Skills</h2>

              <div className="skills">

                <span>HTML</span>
                <span>CSS</span>
                <span>JavaScript</span>
                <span>React</span>
                <span>Node.js</span>
                <span>MongoDB</span>

              </div>

            </div>

          </div>

        )}


        {/* MY COURSES */}

        {activeTab === "courses" && (

          <div className="tab-content">

            <h2>My Courses</h2>

            <div className="profile-course">

              <img
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500"
                alt="Web Development"
              />

              <div>

                <span>Web Development</span>

                <h3>Full Stack Web Development</h3>

                <p>
                  Learn frontend, backend, APIs and databases.
                </p>

                <div className="course-progress-text">
                  <span>Progress</span>
                  <strong>65%</strong>
                </div>

                <div className="profile-progress">
                  <div style={{ width: "65%" }}></div>
                </div>

              </div>

              <a
                href="/learning/1"
                className="continue-course-btn"
              >
                Continue
              </a>

            </div>

          </div>

        )}


        {/* CERTIFICATES */}

        {activeTab === "certificates" && (

          <div className="tab-content">

            <h2>My Certificates</h2>

            <div className="certificate-mini-card">

              <div className="mini-certificate-icon">
                <i className="bi bi-award-fill"></i>
              </div>

              <div>

                <h3>
                  Full Stack Web Development
                </h3>

                <p>
                  Completed August 2026
                </p>

              </div>

              <a
                href="/certificate/1"
                className="view-certificate-btn"
              >
                View Certificate
              </a>

            </div>

          </div>

        )}

      </main>

    </div>
  );
}

export default Profile;