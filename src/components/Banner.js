import React from 'react'
import pic01 from '../assets/images/pic01.jpg'
import { Link as ScrollLink } from 'react-scroll'
//import aelogo from '../assets/images/aelogo.jpg'

const Banner = props => (
  <section id="banner">
    <div className="content">
      <header>
        <h2>Labore et dolore magna</h2>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
          <br />
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </header>
      {/* <span className="image">
        <img src={pic01} alt="intro" />
      </span> */}
    </div>
    <ScrollLink
      to="one"
      className="goto-next"
      activeClass="active"
      smooth={true}
      offset={50}
      duration={1500}
      spy={true}
    >
      Next
    </ScrollLink>
  </section>
)

export default Banner
