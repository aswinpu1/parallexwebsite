import React from 'react'

const Foooter = () => {
  return (
    <footer className="bg-dark text-white py-4">
  <div className="container">
    <div className="row">
      <div className="col-md-4">
       
        <p>
          We are a company committed to providing the best services to our customers. Contact us to learn more.
        </p>
      </div>
      <div className="col-md-4">
        
        <ul className="list-unstyled">
          <li><a href="#" className="text-white">Home</a></li>
          <li><a href="#" className="text-white">Services</a></li>
          <li><a href="#" className="text-white">Contact</a></li>
        </ul>
      </div>
      <div className="col-md-4">
        
        <p>
          Email: contact@example.com<br/>
          Phone: +123 456 7890
        </p>
      </div>
    </div>
  </div>
  <div className="text-center mt-4">
    <p>© 2024 Your Company. All rights reserved.</p>
  </div>
</footer>

  )
}

export default Foooter