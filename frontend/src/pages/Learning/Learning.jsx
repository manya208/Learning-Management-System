import { useState } from "react";
import "./Learning.css";

function Learning() {

  const [activeLesson, setActiveLesson] = useState(0);
  const [completed, setCompleted] = useState(false);

  const lessons = [
    {
      title: "Introduction to HTML",
      duration: "12 min"
    },
    {
      title: "CSS Fundamentals",
      duration: "18 min"
    },
    {
      title: "Introduction to JavaScript",
      duration: "20 min"
    },
    {
      title: "Introduction to React",
      duration: "25 min"
    },
    {
      title: "React Components",
      duration: "22 min"
    },
    {
      title: "React Hooks",
      duration: "28 min"
    }
  ];

  return (
    <div className="learning-page">

      {/* TOP NAVBAR */}

      <header className="learning-navbar">

        <div className="learning-brand">
          <i className="bi bi-mortarboard-fill"></i>
          EduVerse
        </div>

        <div className="learning-course-name">
          Full Stack Web Development
        </div>

        <a href="/student-dashboard" className="back-dashboard">
          <i className="bi bi-grid"></i>
          Dashboard
        </a>

      </header>


      {/* MAIN AREA */}

      <div className="learning-layout">

        {/* VIDEO / CONTENT */}

        <main className="lesson-content">

          <div className="video-container">

  <video
    controls
    className="lesson-video"
  >
    <source
      src="https://www.w3schools.com/html/mov_bbb.mp4"
      type="video/mp4"
    />

    Your browser does not support video playback.
  </video>

</div>


          {/* LESSON INFO */}

          <div className="lesson-info">

            <div className="lesson-heading">

              <div>
                <span className="lesson-label">
                  Module 1 • Lesson 1
                </span>

                <h1>
                  {lessons[activeLesson].title}
                </h1>
              </div>

              <span className="lesson-duration">
                <i className="bi bi-clock"></i>
                {lessons[activeLesson].duration}
              </span>

            </div>


            <p className="lesson-description">
              In this lesson, you will learn the fundamental
              concepts required to build modern web applications.
              Follow along with the lesson and complete the
              activities to improve your understanding.
            </p>


            {/* ACTIONS */}

            <div className="lesson-actions">

              <button
                className={
                  completed
                    ? "complete-btn completed"
                    : "complete-btn"
                }
                onClick={() => setCompleted(!completed)}
              >
                <i
                  className={
                    completed
                      ? "bi bi-check-circle-fill"
                      : "bi bi-check-circle"
                  }
                ></i>

                {completed
                  ? "Completed"
                  : "Mark as Complete"}
              </button>

            </div>

          </div>


          {/* NOTES */}

          <div className="lesson-notes">

            <h2>Lesson Notes</h2>

            <p>
              Take notes while learning and keep important
              concepts available for revision.
            </p>

            <textarea
              placeholder="Write your notes here..."
            ></textarea>

            <button className="save-notes-btn">
              Save Notes
            </button>

          </div>

        </main>


        {/* LESSON SIDEBAR */}

        <aside className="lesson-sidebar">

          <div className="sidebar-header">

            <h2>Course Content</h2>

            <span>
              {activeLesson + 1}/{lessons.length}
            </span>

          </div>


          {/* PROGRESS */}

          <div className="learning-progress">

            <div className="progress-text">

              <span>Your Progress</span>

              <strong>
                {Math.round(
                  ((activeLesson + (completed ? 1 : 0)) /
                    lessons.length) * 100
                )}%
              </strong>

            </div>

            <div className="progress-track">

              <div
                className="progress-fill"
                style={{
                  width: `${
                    ((activeLesson +
                      (completed ? 1 : 0)) /
                      lessons.length) *
                    100
                  }%`
                }}
              ></div>

            </div>

          </div>


          {/* LESSON LIST */}

          <div className="lesson-sidebar-list">

            {lessons.map((lesson, index) => (

              <button
                key={index}
                className={
                  activeLesson === index
                    ? "sidebar-lesson active"
                    : "sidebar-lesson"
                }
                onClick={() => {
                  setActiveLesson(index);
                  setCompleted(false);
                }}
              >

                <span className="lesson-number">

                  {index < activeLesson ? (
                    <i className="bi bi-check-circle-fill"></i>
                  ) : (
                    index + 1
                  )}

                </span>

                <span className="sidebar-lesson-info">

                  <strong>
                    {lesson.title}
                  </strong>

                  <small>
                    <i className="bi bi-play-circle"></i>
                    {lesson.duration}
                  </small>

                </span>

              </button>

            ))}

          </div>

        </aside>

      </div>

    </div>
  );
}

export default Learning;