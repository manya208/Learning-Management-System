import { useState } from "react";
import "./CreateCourse.css";

function CreateCourse() {

  const [courseData, setCourseData] = useState({
    title: "",
    category: "",
    level: "",
    description: "",
    price: "",
  });

  const [lessons, setLessons] = useState([
    {
      title: "",
      type: "Video",
      duration: "",
    },
  ]);

  const handleChange = (e) => {
    setCourseData({
      ...courseData,
      [e.target.name]: e.target.value,
    });
  };

  const handleLessonChange = (index, field, value) => {

    const updatedLessons = [...lessons];

    updatedLessons[index][field] = value;

    setLessons(updatedLessons);
  };

  const addLesson = () => {

    setLessons([
      ...lessons,
      {
        title: "",
        type: "Video",
        duration: "",
      },
    ]);
  };

  const removeLesson = (index) => {

    if (lessons.length === 1) {
      return;
    }

    setLessons(
      lessons.filter((_, i) => i !== index)
    );
  };

  const handleSubmit = (e) => {

    e.preventDefault();

    alert("Course saved successfully!");

  };

  return (
    <div className="create-course-page">

      {/* NAVBAR */}

      <header className="create-course-navbar">

        <div className="create-course-brand">
          <i className="bi bi-mortarboard-fill"></i>
          EduVerse
        </div>

        <div className="create-course-nav-title">
          Create New Course
        </div>

        <a
          href="/instructor-dashboard"
          className="back-dashboard"
        >
          <i className="bi bi-arrow-left"></i>
          Dashboard
        </a>

      </header>


      {/* MAIN */}

      <main className="create-course-container">

        <div className="create-course-heading">

          <div>

            <span>
              Instructor
            </span>

            <h1>Create a New Course</h1>

            <p>
              Share your knowledge and help students learn.
            </p>

          </div>

        </div>


        <form onSubmit={handleSubmit}>

          {/* BASIC INFORMATION */}

          <section className="create-course-card">

            <div className="form-section-heading">

              <div className="form-section-icon">
                <i className="bi bi-info-circle"></i>
              </div>

              <div>
                <h2>Basic Information</h2>
                <p>
                  Tell students about your course.
                </p>
              </div>

            </div>


            <div className="form-grid">

              <div className="form-group full-width">

                <label>
                  Course Title
                </label>

                <input
                  type="text"
                  name="title"
                  placeholder="e.g. Full Stack Web Development"
                  value={courseData.title}
                  onChange={handleChange}
                  required
                />

              </div>


              <div className="form-group">

                <label>
                  Category
                </label>

                <select
                  name="category"
                  value={courseData.category}
                  onChange={handleChange}
                  required
                >

                  <option value="">
                    Select category
                  </option>

                  <option>
                    Development
                  </option>

                  <option>
                    Artificial Intelligence
                  </option>

                  <option>
                    Cyber Security
                  </option>

                  <option>
                    Data Science
                  </option>

                  <option>
                    Cloud Computing
                  </option>

                  <option>
                    Business
                  </option>

                </select>

              </div>


              <div className="form-group">

                <label>
                  Level
                </label>

                <select
                  name="level"
                  value={courseData.level}
                  onChange={handleChange}
                  required
                >

                  <option value="">
                    Select level
                  </option>

                  <option>
                    Beginner
                  </option>

                  <option>
                    Intermediate
                  </option>

                  <option>
                    Advanced
                  </option>

                </select>

              </div>


              <div className="form-group full-width">

                <label>
                  Course Description
                </label>

                <textarea
                  name="description"
                  rows="5"
                  placeholder="Describe what students will learn..."
                  value={courseData.description}
                  onChange={handleChange}
                  required
                ></textarea>

              </div>


              <div className="form-group">

                <label>
                  Course Price
                </label>

                <div className="price-input">

                  <span>₹</span>

                  <input
                    type="number"
                    name="price"
                    placeholder="999"
                    min="0"
                    value={courseData.price}
                    onChange={handleChange}
                  />

                </div>

              </div>

            </div>

          </section>


          {/* THUMBNAIL */}

          <section className="create-course-card">

            <div className="form-section-heading">

              <div className="form-section-icon">
                <i className="bi bi-image"></i>
              </div>

              <div>
                <h2>Course Thumbnail</h2>
                <p>
                  Add an image that represents your course.
                </p>
              </div>

            </div>


            <div className="thumbnail-upload">

              <i className="bi bi-cloud-arrow-up"></i>

              <h3>
                Upload Course Thumbnail
              </h3>

              <p>
                PNG, JPG or WEBP • Recommended 1280 × 720
              </p>

              <label className="upload-btn">

                Choose Image

                <input
                  type="file"
                  accept="image/*"
                  hidden
                />

              </label>

            </div>

          </section>


          {/* LESSONS */}

          <section className="create-course-card">

            <div className="form-section-heading">

              <div className="form-section-icon">
                <i className="bi bi-collection-play"></i>
              </div>

              <div>

                <h2>Course Content</h2>

                <p>
                  Add the lessons students will complete.
                </p>

              </div>

            </div>


            <div className="lessons-list">

              {lessons.map((lesson, index) => (

                <div
                  className="lesson-editor"
                  key={index}
                >

                  <div className="lesson-number">
                    {index + 1}
                  </div>


                  <div className="lesson-fields">

                    <div className="lesson-title-row">

                      <input
                        type="text"
                        placeholder="Lesson title"
                        value={lesson.title}
                        onChange={(e) =>
                          handleLessonChange(
                            index,
                            "title",
                            e.target.value
                          )
                        }
                      />

                      {lessons.length > 1 && (

                        <button
                          type="button"
                          className="remove-lesson"
                          onClick={() =>
                            removeLesson(index)
                          }
                        >
                          <i className="bi bi-trash"></i>
                        </button>

                      )}

                    </div>


                    <div className="lesson-extra-fields">

                      <select
                        value={lesson.type}
                        onChange={(e) =>
                          handleLessonChange(
                            index,
                            "type",
                            e.target.value
                          )
                        }
                      >

                        <option>
                          Video
                        </option>

                        <option>
                          Article
                        </option>

                        <option>
                          Quiz
                        </option>

                      </select>


                      <input
                        type="text"
                        placeholder="Duration e.g. 15 min"
                        value={lesson.duration}
                        onChange={(e) =>
                          handleLessonChange(
                            index,
                            "duration",
                            e.target.value
                          )
                        }
                      />

                      <button
                        type="button"
                        className="add-content-btn"
                      >
                        <i className="bi bi-plus"></i>
                        Add Content
                      </button>

                    </div>

                  </div>

                </div>

              ))}

            </div>


            <button
              type="button"
              className="add-lesson-btn"
              onClick={addLesson}
            >
              <i className="bi bi-plus-circle"></i>
              Add Another Lesson
            </button>

          </section>


          {/* PUBLISH */}

          <section className="publish-section">

            <div>

              <h3>
                Ready to publish?
              </h3>

              <p>
                You can save this course as a draft and
                publish it when you're ready.
              </p>

            </div>


            <div className="publish-actions">

              <button
                type="button"
                className="save-draft-btn"
                onClick={() =>
                  alert("Course saved as draft!")
                }
              >
                Save as Draft
              </button>

              <button
                type="submit"
                className="publish-btn"
              >
                <i className="bi bi-check-circle"></i>
                Publish Course
              </button>

            </div>

          </section>

        </form>

      </main>

    </div>
  );
}

export default CreateCourse;