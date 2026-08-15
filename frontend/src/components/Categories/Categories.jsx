import "./Categories.css";

function Categories() {

    const categories = [

        {
            icon:"💻",
            title:"Web Development"
        },

        {
            icon:"🤖",
            title:"Artificial Intelligence"
        },

        {
            icon:"🔐",
            title:"Cyber Security"
        },

        {
            icon:"☁️",
            title:"Cloud Computing"
        }

    ];

    return (

        <section className="categories">

            <div className="container">

                <h2 className="text-center fw-bold mb-3">

                    Popular Categories

                </h2>

                <p className="text-center text-muted mb-5">

                    Learn from industry experts and master in-demand skills.

                </p>

                <div className="row">

                    {

                        categories.map((category,index)=>(

                            <div className="col-md-3 mb-4" key={index}>

                                <div className="category-card shadow">

                                    <div className="icon">

                                        {category.icon}

                                    </div>

                                    <h5>

                                        {category.title}

                                    </h5>

                                </div>

                            </div>

                        ))

                    }

                </div>

            </div>

        </section>

    );

}

export default Categories;