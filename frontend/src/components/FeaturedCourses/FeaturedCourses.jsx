import "./FeaturedCourses.css";

function FeaturedCourses() {

const courses = [

    {
        title: "React Development",
        instructor: "John Doe",
        duration: "8 Weeks",
        rating: "4.8",
        students: "2,450",
        image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600"
    },

    {
        title: "Cyber Security",
        instructor: "Jasmine",
        duration: "10 Weeks",
        rating: "4.9",
        students: "1,860",
        image: "https://images.unsplash.com/photo-1510511459019-5dda7724fd87?w=600"
    },

    {
        title: "Artificial Intelligence",
        instructor: "David",
        duration: "12 Weeks",
        rating: "5.0",
        students: "3,120",
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600"
    }

];

    return (

        <section className="featured">

            <div className="container">

                <h2 className="text-center fw-bold mb-3">
                    Featured Courses
                </h2>

                <p className="text-center text-muted mb-5">
                    Start learning with our most popular courses.
                </p>

                <div className="row">

                    {

                        courses.map((course,index)=>(

                            <div className="col-lg-4 mb-4" key={index}>

                                <div className="card shadow border-0 h-100">

                                    <img
                                        src={course.image}
                                        className="card-img-top"
                                        alt={course.title}
                                    />

                                    <div className="card-body">

    <h5 className="fw-bold">{course.title}</h5>

    <p className="text-muted mb-3">

        <i className="bi bi-person-circle me-2"></i>

        {course.instructor}

    </p>

    <div className="d-flex justify-content-between mb-3">

        <span>

            <i className="bi bi-clock-fill text-primary me-2"></i>

            {course.duration}

        </span>

        <span>

            <i className="bi bi-star-fill text-warning me-1"></i>

            {course.rating}

        </span>

    </div>

    <div className="mb-3">

        <i className="bi bi-people-fill text-success me-2"></i>

        {course.students} Students

    </div>

    <button className="btn purple-btn w-100">

        Enroll Now

    </button>

</div>

                                </div>

                            </div>

                        ))

                    }

                </div>

            </div>

        </section>

    );

}

export default FeaturedCourses;
