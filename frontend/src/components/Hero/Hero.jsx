import "./Hero.css";

function Hero() {
  return (
    <section className="hero">

      <div className="container">

        <div className="row align-items-center">

          {/* LEFT SIDE */}
          <div className="col-lg-6">

            <span className="badge bg-primary mb-3">
               Learn, Grow, Succeed
            </span>

            <h1 className="display-4 fw-bold mb-4">
              Learn New Skills
              <br />
              Anytime,
              <span className="text-purple">
                Anywhere
              </span>
            </h1>

            <p className="lead text-muted mb-4">
              Join thousands of learners and explore expert-led
              courses in Programming, Artificial Intelligence,
              Cyber Security, Cloud Computing and much more.
            </p>

            <button className="btn purple-btn btn-lg me-3">
              Explore Courses
            </button>

            <button className="btn purple-outline btn-lg">
              Become Instructor
            </button>

          </div>


          {/* RIGHT SIDE */}
          <div className="col-lg-6">

            <div className="hero-visual">

              {/* Floating Book */}
              <div className="floating-element element-1">
                <i className="bi bi-book"></i>
              </div>

              {/* Floating Lightbulb */}
              <div className="floating-element element-2">
                <i className="bi bi-lightbulb"></i>
              </div>

              {/* Floating Graduation Cap */}
              <div className="floating-element element-3">
                <i className="bi bi-mortarboard"></i>
              </div>

              {/* Hero Image */}
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=700"
                alt="Students Learning"
                className="hero-image"
              />

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Hero;