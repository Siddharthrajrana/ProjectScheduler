import React from "react";
import './LandPage.css'

const LandPage = () => {

    return (
        <div className="rootx">
            <div className="image">
                <div className="row justify-content-center">
                    <div className="col-lg-6 back">
                        <div className="text-centre">
                            <h1>Efficiently Organize Your Projects: Introducing Project ProScheduler!</h1>
                        </div>

                        <p className="lead">Welcome to Project ProScheduler, your ultimate tool for efficient project management and scheduling. With the ever-increasing complexity of today's projects, staying organized and keeping track of deadlines can be a daunting task. That's why we've developed Project ProScheduler—a powerful application designed to simplify your project scheduling process and maximize your productivity. Whether you're a project manager, team leader, or an individual contributor, our app provides you with the necessary tools to plan, allocate resources, set milestones, and monitor progress effortlessly. Say goodbye to missed deadlines and overwhelmed project timelines. Get ready to revolutionize the way you manage your projects with Project ProScheduler!</p>
                        
                    </div>
                </div>
            </div>
            <section className="py-5 bg-info" >
                <div className="container my-5">
                    <div className="row justify-content-center">
                        <div className="col-lg-6">
                            <header className="py-5 bg-image-full "  >
                                <div className="text-center my-5">
                                    <img className="img-fluid rounded-circle mb-4" src="https://dummyimage.com/150x150/6c757d/dee2e6.jpg" alt="..." />
                                    <h1 className="text-white fs-3 fw-bolder">Full Width Pics</h1>
                                    <p className="text-white-50 mb-0">Landing Page Template</p>
                                </div>
                            </header>
                            <p className="lead">The background images used in this template are sourced from Unsplash and are open source and free to use.</p>
                            <p className="mb-0">I can't tell you how many people say they were turned off from science because of a science teacher that completely sucked out all the inspiration and enthusiasm they had for the course.</p>
                        </div>
                    </div>
                </div>
            </section>

            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"></script>
            <script src="js/scripts.js"></script>
        </div>
    )
};

export default LandPage;