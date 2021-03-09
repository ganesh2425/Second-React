import React from 'react'
import image1 from "../React-Website/Pixtures/card01.jpg";
import image2 from "../React-Website/Pixtures/card02.jpg";
import image3 from "../React-Website/Pixtures/card03.jpg";
import image4 from "../React-Website/Pixtures/card04.jpg";

function Cards() {
    return (
        <>
        <div className="container mt-4">
            <div className="row">
                <div className="col-md-3">
                    <div className="card">
                        <img src={image1} alt="" />
                        <div className="card-body">
                            <h2>Berlin</h2>
                            <p> The historical centre of Berlin, Cafes, restaurants, 
                                museums, galleries and clubs are abundant throughout the district. </p>
                            <button className="btn-btn primary">Book Now</button>
                        </div>
                    </div>   
                </div>
                <div className="col-md-3">
                    <div className="card">
                        <img src={image2} alt="" />
                        <div className="card-body">
                            <h2>Lisbon</h2>
                            <p> Lisbon is Portugal’s hilly, the view encompasses the old city’s
                                Tagus Estuary and Ponte 25 de Abril suspension bridge.</p>
                            <button className="btn-btn primary">Book Now</button>
                        </div>
                    </div>   
                </div>
                <div className="col-md-3">
                    <div className="card">
                        <img src={image3} alt="" />
                        <div className="card-body">
                            <h2>London</h2>
                            <p> London, the capital of England and the United Kingdom, 
                                is a 21st-century city with history stretching back to Roman times.</p>
                            <button className="btn-btn primary">Book Now</button>
                        </div>
                    </div>   
                </div>
                <div className="col-md-3">
                    <div className="card">
                        <img src={image4} alt="" />
                        <div className="card-body">
                            <h2>San Francisco</h2>
                            <p> San Francisco, officially the City and County of San Francisco,
                                 is a cultural, commercial, and financial center of Northern California.</p>
                            <button className="btn-btn primary">Book Now</button>
                        </div>
                    </div>   
                </div>
            </div>
        </div>
        </>
    )
}

export default Cards
