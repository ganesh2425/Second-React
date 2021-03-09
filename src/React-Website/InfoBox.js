import React from 'react'

function InfoBox() {
    return (
        <React.Fragment>
        <div className="bg-dark text-white text-center mt-3">
          <div className="container">
              <h2>Information details</h2>
            <div className="row">
              <div className="col">
                <p> it is a long established fact that a reader will be distracted by the readable content of a 
                    page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less 
                    normal distribution of letters, as opposed to using 'Content here, content here', 
                    making it look like readable English. Many desktop publishing packages and web page 
                    editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' 
                    will uncover many web sites still in their infancy. </p>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    )
}

export default InfoBox
