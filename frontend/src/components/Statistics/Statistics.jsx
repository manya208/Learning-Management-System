import "./Statistics.css";

function Statistics() {

    const stats = [

        {
            icon: "bi bi-people-fill",
            number: "15K+",
            title: "Students"
        },

        {
            icon: "bi bi-book-fill",
            number: "500+",
            title: "Courses"
        },

        {
            icon: "bi bi-person-video3",
            number: "120+",
            title: "Expert Instructors"
        },

        {
            icon: "bi bi-award-fill",
            number: "98%",
            title: "Success Rate"
        }

    ];

    return (

        <section className="statistics">

            <div className="container">

                <div className="row">

                    {

                        stats.map((item,index)=>(

                            <div
                            className="col-lg-3 col-md-6 mb-4"
                            key={index}
                            >

                                <div className="stat-card">

                                    <i className={`${item.icon} stat-icon`}></i>

                                    <h2>{item.number}</h2>

                                    <p>{item.title}</p>

                                </div>

                            </div>

                        ))

                    }

                </div>

            </div>

        </section>

    );

}

export default Statistics;