import "./WhyChoose.css";

function WhyChoose() {

    const features = [

        {
            icon: "bi bi-mortarboard-fill",
            title: "Expert Instructors",
            description: "Learn from experienced professionals and industry experts."
        },

        {
            icon: "bi bi-play-circle-fill",
            title: "HD Video Lessons",
            description: "Watch high-quality video lectures anytime and anywhere."
        },

        {
            icon: "bi bi-graph-up-arrow",
            title: "Track Progress",
            description: "Monitor your learning progress with interactive dashboards."
        },

        {
            icon: "bi bi-patch-check-fill",
            title: "Certificates",
            description: "Receive course completion certificates after finishing courses."
        }

    ];

    return (

        <section className="whyChoose">

            <div className="container">

                <h2 className="section-title">

                    Why Choose EduVerse?

                </h2>

                <p className="section-subtitle">

                    Everything you need for a better learning experience.

                </p>

                <div className="row">

                    {

                        features.map((feature,index)=>(

                            <div
                            className="col-lg-3 col-md-6 mb-4"
                            key={index}
                            >

                                <div className="why-card">

                                    <i className={`${feature.icon} why-icon`}></i>

                                    <h4>

                                        {feature.title}

                                    </h4>

                                    <p>

                                        {feature.description}

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

export default WhyChoose;