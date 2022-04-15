import React from 'react'
import './Landing.css'
import Navbar from './Navbar'
function Landing() {
  return (
    <div>
        <Navbar/>
      <div className='main-content'>
    <div className='content-page'>
    <div className='contents'>
    <h1 className="project-title">The Housing Buddy</h1>
    <h1 className='header-1'>Helping Students Find Affordable Housing Options</h1>
 <p className="about-us">
     <h1>About Us</h1>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur odio in velit? Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, quibusdam. </p>
      </div>
 <img className="rocket-img" src="Apartment.png"></img>
 </div>
 </div>
 <section id="FAQ" className="FAQ">
  <div className="container">
    <div className="text-center">
      <h1 style={{ color: "black" }}>
        FAQ's <span className="text-primary">Answered</span>
      </h1>
      <hr style={{ color: "black" }} className="w-20 m-auto" />
    </div>
    <div className="row">
      <div className="col-sm-12 col-lg-4 col-xl-4 col-xxl-4 col-md-12">
        <div className="svg">
            <img className="Faq" src="FAQ.png"></img>
        </div>
      </div>
      <div className="col-lg-8 col-xl-8 col-xxl-8 col-md-12 col-sm-12">
        <div
          className="accordion mx-2 mt-2"
          id="accordionExample"
          data-aos="fade-up"
        >
          <div className="accordion-item" data-aos="fade-up">
            <h2 className="accordion-header" id="headingOne">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                <b>
                  How can I be sure of my data security with this hostel
                  management system?
                </b>
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body" data-aos="fade-up">
                With our hostel management software, you can be completely sure
                about the safety of your data. Our servers hold the highest
                level of security with respect to the industry standards. Which
                is why no direct access can be acquired without proper
                authentication.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwo">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                <b>Do I have to pay extra for the hostel management app?</b>
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              aria-labelledby="headingTwo"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                Absolutely NOT. With our hostel management system you can get
                the app for free to manage all your operations on the go.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingThree">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                <b>What is the situation of your management database?</b>
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              aria-labelledby="headingThree"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                Creates a centralized database of student information including
                their personal information such as name, address, guardian's
                mobile number, etc. The information can be accessed by the
                hostel warden or any other authority at any given point in time.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <h1 className="policy">Policies</h1>
    <div>
   <p className="policy">
   Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
   </p>
    </div>
  </div>
</section>



 <footer>
  <div
    className="container-fluid  text-center py-2"
    style={{ backgroundColor: "#ca7bff" }}
  >
    <div>
      <a href="https://www.instagram.com">
        <i
          className="fab fa-instagram fa-x text-center"
          style={{ color: "white", paddingRight: 25 }}
        />
      </a>
      <a href="https://www.discord.com text-center">
        <i
          className="fab fa-discord fa-x"
          style={{ color: "white", paddingRight: 25 }}
        />
      </a>
      <a href="https://www.twitter.com text-center">
        <i
          className="fab fa-twitter fa-x"
          style={{ color: "white", paddingRight: 25 }}
        />
      </a>
    </div>
    <div>
      <p style={{ display: "flex", justifyContent: "start", color: "white" }}></p>
    </div>
  </div>
</footer>
  </div>
  )
}

export default Landing