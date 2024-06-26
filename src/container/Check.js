import React from 'react'

const Check = () => {
  return (
    <div  className="d-flex align-items-stretch">
    <div>
      <div className="cards">
        <div>
          <div className="profile-container">
            <img
              src=""
              
              alt="Profile"
              className="profile-img"
            />
          </div>
          <h5 className="card-testimonial">
            jhjjh
          </h5>
          <div className="arrow"></div>
          {/* <h3 className="card-name" style={{ marginBottom: 8 }}>
            {testimonial.testimonial}
          </h3>
          <p className="card-company">{testimonial.role}</p>
          <p className="card-testimonial">{testimonial.testimonial}</p> */}
        </div>
      </div>
      <div
        className="card-name"
        style={{
          display: "flex",
          alignItems: "center",
          position: "relative",
          bottom: 20,
          alignSelf: "center",
          justifyContent: "center",
         }}
      >
        <h5 style={{color:"pink",fontSize:18,fontWeight:"bold"}}>scsssd</h5>
        <img src="" alt='logo' style={{ marginLeft: 10, width: "25%" }} />
      </div>
    </div>
  </div>
  )
}

export default Check