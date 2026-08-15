import "./CourseDetails.css";

function CourseDetails() {

  const modules = [
    {
      number: 1,
      title: "Introduction to Web Development",
      lessons: [
        "Introduction to HTML",
        "CSS Fundamentals",
        "Introduction to JavaScript"
      ]
    },
    {
      number: 2,
      title: "Frontend Development",
      lessons: [
        "Introduction to React",
        "React Components",
        "React Hooks"
      ]
    },
    {
      number: 3,
      title: "Backend Development",
      lessons: [
        "Introduction to Node.js",
        "Express.js Fundamentals",
        "Building REST APIs"
      ]
    }
  ];

  return (
    <div className="course-details-page">

      {/* Course Header */}

      <section className="course-header">

        <div className="course-header-content">

          <div className="course-breadcrumb">
            Home / Courses / Full Stack Development
          </div>

          <div className="course-header-grid">

            <div>

              <span className="course-category">
                Web Development
              </span>

              <h1>
                Full Stack Web Development
              </h1>

              <p className="course-description">
                Learn how to build modern web applications
                from frontend to backend using popular
                technologies and practical projects.
              </p>

              <div className="course-meta">

                <span>
                  <i className="bi bi-star-fill"></i>
                  4.8
                </span>

                <span>
                  <i className="bi bi-people-fill"></i>
                  1,250 Students
                </span>

                <span>
                  <i className="bi bi-clock"></i>
                  40 Hours
                </span>

              </div>

              <div className="instructor-info">

                <div className="instructor-avatar">
                  JS
                </div>

                <div>
                  <small>Instructor</small>
                  <strong>John Smith</strong>
                </div>

              </div>

            </div>


            {/* Course Card */}

            <div className="course-enroll-card">

              <img
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800"
                alt="Full Stack Web Development"
              />

              <div className="enroll-content">

                <h2>₹1,499</h2>

                <p>
                  Lifetime access
                </p>

                <button className="enroll-btn">
                  Enroll Now
                </button>

                <div className="course-includes">

                  <strong>This course includes:</strong>

                  <span>
                    <i className="bi bi-play-circle"></i>
                    40 hours of video
                  </span>

                  <span>
                    <i className="bi bi-file-earmark-text"></i>
                    Assignments
                  </span>

                  <span>
                    <i className="bi bi-patch-check"></i>
                    Certificate of completion
                  </span>

                  <span>
                    <i className="bi bi-infinity"></i>
                    Lifetime access
                  </span>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* Course Content */}

      <main className="course-content">

        <div className="course-content-main">

          <h2>Course Content</h2>

          <p className="content-subtitle">
            3 modules • 9 lessons • 40 hours
          </p>


          <div className="modules">

            {modules.map((module) => (

              <div
                className="module-card"
                key={module.number}
              >

                <div className="module-header">

                  <div className="module-number">
                    {module.number}
                  </div>

                  <div>
                    <h3>{module.title}</h3>

                    <span>
                      {module.lessons.length} lessons
                    </span>
                  </div>

                  <i className="bi bi-chevron-down"></i>

                </div>


                <div className="lesson-list">

                  {module.lessons.map((lesson, index) => (

                    <div
                      className="lesson"
                      key={index}
                    >

                      <i className="bi bi-play-circle"></i>

                      <span>
                        {lesson}
                      </span>

                      <small>
                        {index + 1}0 min
                      </small>

                    </div>

                  ))}

                </div>

              </div>

            ))}

          </div>

        </div>


        {/* What You'll Learn */}

        <aside className="learning-sidebar">

          <div className="learn-card">

            <h3>What You'll Learn</h3>

            <ul>

              <li>
                <i className="bi bi-check-circle-fill"></i>
                Build modern web applications
              </li>

              <li>
                <i className="bi bi-check-circle-fill"></i>
                Create responsive user interfaces
              </li>

              <li>
                <i className="bi bi-check-circle-fill"></i>
                Work with REST APIs
              </li>

              <li>
                <i className="bi bi-check-circle-fill"></i>
                Build backend applications
              </li>

              <li>
                <i className="bi bi-check-circle-fill"></i>
                Connect applications with databases
              </li>

            </ul>

          </div>

        </aside>

      </main>

    </div>
  );
}

export default CourseDetails;