import "./Testimonials.css";
import student1 from "../../assets/images/student1.png";
import student2 from "../../assets/images/student2.png";
import student3 from "../../assets/images/student3.png";

function Testimonials() {

const reviews = [

    {
        name: "Aarav Sharma",
        course: "Full Stack Development",
        review: "EduVerse completely changed my learning experience. The courses are easy to understand and the instructors are amazing.",
        image: student1
    },

    {
        name: "Ananya Rao",
        course: "Artificial Intelligence",
        review: "The AI course was well structured and helped me build confidence in Machine Learning.",
        image: student2
    },

    {
        name: "Rahul Verma",
        course: "Cyber Security",
        review: "One of the best online platforms. I learned practical cybersecurity skills through projects.",
        image: student3
    }

];

    return (

        <section className="testimonials">

            <div className="container">

                <h2 className="section-title">

                    What Our Students Say

                </h2>

                <p className="section-subtitle">

                    Thousands of learners trust EduVerse.

                </p>

                <div className="row">

                    {

                        reviews.map((review,index)=>(

                            <div className="col-lg-4 mb-4" key={index}>

                                <div className="testimonial-card">

                                    <img
                                    src={review.image}
                                    alt={review.name}
                                    />

                                    <h5>{review.name}</h5>

                                    <small>{review.course}</small>

                                    <p>

                                        "{review.review}"

                                    </p>

                                </div>

                            </div>

                        ))

                    }

                </div>

            </div>

        </section>

    );

}

export default Testimonials;