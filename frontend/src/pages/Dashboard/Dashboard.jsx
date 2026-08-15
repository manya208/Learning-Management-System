import "./Dashboard.css";

function Dashboard() {

    const stats = [
        {
            icon: "bi bi-book-fill",
            number: "4",
            title: "Enrolled Courses"
        },
        {
            icon: "bi bi-clock-fill",
            number: "18h",
            title: "Learning Hours"
        },
        {
            icon: "bi bi-check-circle-fill",
            number: "12",
            title: "Lessons Completed"
        },
        {
            icon: "bi bi-trophy-fill",
            number: "3",
            title: "Certificates"
        }
    ];

    const courses = [
        {
            title: "React Development",
            instructor: "John Doe",
            progress: 72,
            icon: "bi bi-code-slash"
        },
        {
            title: "Cyber Security",
            instructor: "Jasmine",
            progress: 48,
            icon: "bi bi-shield-lock-fill"
        },
        {
            title: "Artificial Intelligence",
            instructor: "David",
            progress: 31,
            icon: "bi bi-robot"
        }
    ];

    return (

        <div className="dashboard-page">

            {/* ANIMATED BACKGROUND */}

            <div className="dashboard-shape shape-one"></div>
            <div className="dashboard-shape shape-two"></div>
            <div className="dashboard-shape shape-three"></div>

            <div className="dashboard-container">

                {/* HEADER */}

                <div className="dashboard-header">

                    <div>
                        <span className="dashboard-label">
                            MY LEARNING
                        </span>

                        <h1>
                            Welcome back, <span>Student!</span>
                        </h1>

                        <p>
                            Continue your learning journey and achieve your goals.
                        </p>
                    </div>

                    <div className="dashboard-profile">

                        <div className="profile-avatar">
                            <i className="bi bi-person-fill"></i>
                        </div>

                        <div>
                            <strong>Student</strong>
                            <small>Learning Member</small>
                        </div>

                    </div>

                </div>


                {/* STATS */}

                <div className="dashboard-stats">

                    {stats.map((item, index) => (

                        <div className="dashboard-stat-card" key={index}>

                            <div className="stat-icon-box">
                                <i className={item.icon}></i>
                            </div>

                            <div>
                                <h2>{item.number}</h2>
                                <p>{item.title}</p>
                            </div>

                        </div>

                    ))}

                </div>


                {/* MAIN GRID */}

                <div className="dashboard-grid">

                    {/* COURSES */}

                    <div className="dashboard-main-card">

                        <div className="section-heading">

                            <div>
                                <h2>Continue Learning</h2>
                                <p>Pick up where you left off.</p>
                            </div>

                            <button className="view-all-btn">
                                View All
                                <i className="bi bi-arrow-right"></i>
                            </button>

                        </div>


                        <div className="dashboard-courses">

                            {courses.map((course, index) => (

                                <div className="dashboard-course" key={index}>

                                    <div className="course-icon-box">
                                        <i className={course.icon}></i>
                                    </div>

                                    <div className="course-info">

                                        <h3>{course.title}</h3>

                                        <p>
                                            <i className="bi bi-person"></i>
                                            {course.instructor}
                                        </p>

                                        <div className="progress-row">

                                            <div className="progress-bar">
                                                <div
                                                    className="progress-fill"
                                                    style={{
                                                        width: `${course.progress}%`
                                                    }}
                                                ></div>
                                            </div>

                                            <span>
                                                {course.progress}%
                                            </span>

                                        </div>

                                    </div>

                                    <button className="continue-btn">
                                        Continue
                                    </button>

                                </div>

                            ))}

                        </div>

                    </div>


                    {/* RIGHT SIDE */}

                    <div className="dashboard-side-card">

                        <div className="section-heading">

                            <div>
                                <h2>Learning Goal</h2>
                                <p>This week's progress</p>
                            </div>

                        </div>

                        <div className="goal-circle">

                            <div>
                                <strong>68%</strong>
                                <span>Completed</span>
                            </div>

                        </div>

                        <p className="goal-text">
                            You're doing great! Keep learning to reach
                            your weekly goal.
                        </p>

                        <button className="goal-btn">
                            Keep Learning
                            <i className="bi bi-arrow-right"></i>
                        </button>

                    </div>

                </div>


                {/* QUICK ACTIONS */}

                <div className="quick-section">

                    <h2>Quick Actions</h2>

                    <div className="quick-actions">

                        <div className="quick-card">
                            <i className="bi bi-search"></i>
                            <div>
                                <h3>Explore Courses</h3>
                                <p>Find something new to learn</p>
                            </div>
                        </div>

                        <div className="quick-card">
                            <i className="bi bi-bookmark-fill"></i>
                            <div>
                                <h3>Saved Courses</h3>
                                <p>View your bookmarked courses</p>
                            </div>
                        </div>

                        <div className="quick-card">
                            <i className="bi bi-award-fill"></i>
                            <div>
                                <h3>Certificates</h3>
                                <p>View your achievements</p>
                            </div>
                        </div>

                    </div>

                </div>

            </div>

        </div>

    );
}

export default Dashboard;