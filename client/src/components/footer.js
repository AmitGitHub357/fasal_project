import React from "react";

const Footer = () => {
    return ( 
<>    
<footer className="text-center text-white bg-dark mt-5" style={{marginTop : "500px"}}>

    <div className="container p-4">
    
      <section className="mb-4">
    
        <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
          ><i className="fab fa-facebook-f"></i></a>
    
        <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
          ><i className="fab fa-twitter"></i></a>
    
        <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
          ><i className="fab fa-google"></i></a>
    
        <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
          ><i className="fab fa-instagram"></i></a>
    
        <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
          ><i className="fab fa-linkedin-in"></i></a>
    
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossOrigin="anonymous"></script> 
        <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
          ><i className="fab fa-github">
            </i></a>
      </section>
      
      <section className="">
        <form action="">
      
          <div className="row">
            <div className="col-auto">
              <p className="pt-2">
                <strong>Sign up for our newsletter</strong>
              </p>
            </div>
            
            <div>
            <div className="col-md-4">
              <div className="form-outline form-white mb-4">
                <input type="email" placeholder="Enter email..." id="form5Example21" className="form-control" />
                <label className="form-label">Email address</label>
              </div>
            </div>
            <div className="col-auto">
              <button type="submit" className="btn btn-outline-light mb-4 btn-danger">
                Subscribe
              </button>
            </div>
          </div>
          </div>
        </form>
      </section>
      <section className="mb-4">
      </section>
     <section className="">
        <div className="row">
          <div className="col-md-3 mb-4 col-sm-6 mb-md-0">
            <h5 className="text-uppercase">Company</h5>
            <ul className="list-unstyled mb-0">
              <li>
                <a href="#!" className="text-white">Link 1</a>
              </li>
              <li>
                <a href="#!" className="text-white">Link 2</a>
              </li>
              <li>
                <a href="#!" className="text-white">Link 3</a>
              </li>
              <li>
                <a href="#!" className="text-white">Link 4</a>
              </li>
            </ul>
          </div>
          <div className="col-md-3 col-sm-6 mb-4 mb-md-0">
            <h5 className="text-uppercase">Client</h5>
            <ul className="list-unstyled mb-0">
              <li>
                <a href="#!" className="text-white">Link 1</a>
              </li>
              <li>
                <a href="#!" className="text-white">Link 2</a>
              </li>
              <li>
                <a href="#!" className="text-white">Link 3</a>
              </li>
              <li>
                <a href="#!" className="text-white">Link 4</a>
              </li>
            </ul>
          </div>
          <div className="col-md-3 col-sm-6 mb-4 mb-md-0">
            <h5 className="text-uppercase">Activities</h5>
            <ul className="list-unstyled mb-0">
              <li>
                <a href="#!" className="text-white">Link 1</a>
              </li>
              <li>
                <a href="#!" className="text-white">Link 2</a>
              </li>
              <li>
                <a href="#!" className="text-white">Link 3</a>
              </li>
              <li>
                <a href="#!" className="text-white">Link 4</a>
              </li>
            </ul>
          </div>
    
          <div className="col-md-3 col-sm-6 mb-4 mb-md-0">
            <h5 className="text-uppercase">Our Products</h5>
    
            <ul className="list-unstyled mb-0">
              <li>
                <a href="#!" className="text-white">Link 1</a>
              </li>
              <li>
                <a href="#!" className="text-white">Link 2</a>
              </li>
              <li>
                <a href="#!" className="text-white">Link 3</a>
              </li>
              <li>
                <a href="#!" className="text-white">Link 4</a>
              </li>
            </ul>
          </div>
    
        </div>
    
      </section>
      
    </div>
    
    <div className="text-center p-3 bg-dark text-white">
      © 2020 Copyright
    </div>
    </footer></> )
    
}

export default Footer;