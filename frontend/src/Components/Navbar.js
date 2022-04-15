import React from 'react'

function Navbar() {
  return (
    <div >  <nav class="navbar navbar-expand-lg navbar-dark bg-transparent" style={{display: 'block'}}>
    <div class="container-fluid" style={{color:"White"}}>
      
      <button class="navbar-toggler light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="/">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link active" href="/Login">Login/Register</a>
          </li>
          
          <li class="nav-item">
            <a class="nav-link active" href="#FAQ">FAQ</a>
          </li>
        
          
        </ul>
        <form class="d-flex">
          
        </form>
      </div>
    </div>
   
  </nav></div>
  )
}

export default Navbar