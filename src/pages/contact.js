import React from 'react'
import { Helmet } from 'react-helmet'
import Layout from '../components/layout'
import Fade from 'react-reveal/Fade'
import pic02 from '../assets/images/pic02.jpg'
import pic03 from '../assets/images/pic03.jpg'
import pic04 from '../assets/images/pic04.jpg'
import pic07 from '../assets/images/pic07.jpg'
import pic08 from '../assets/images/pic08.jpg'
import GoogleMap from '../components/GoogleMap'

const Elements = props => (
  <Layout>
    <Helmet>
      <title>Past Projects</title>
      <meta name="description" content="Past Projects Page" />
    </Helmet>
    <Fade duration={2500}>
    <div id="main" className="wrapper style1">
      <div className="container">
        <header className="major">
          <h2>Contact Us</h2>
          <p>
            Ipsum dolor feugiat aliquam tempus sed magna lorem consequat
            accumsan
          </p>
        </header>
        <section>
          <form method="post" action="#">
            <div className="row gtr-uniform gtr-50">
              <div className="col-6 col-12-xsmall">
                <input type="text" name="name" id="name" placeholder="Name" />
              </div>
              <div className="col-6 col-12-xsmall">
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                />
              </div>
              {/* <div className="col-12">
                <select name="category" id="category">
                  <option value="">- Category -</option>
                  <option value="1">Manufacturing</option>
                  <option value="1">Shipping</option>
                  <option value="1">Administration</option>
                  <option value="1">Human Resources</option>
                </select>
              </div>
              <div className="col-4 col-12-medium">
                <input
                  type="radio"
                  id="priority-low"
                  name="priority"
                  defaultChecked
                />
                <label htmlFor="priority-low">Low Priority</label>
              </div>
              <div className="col-4 col-12-medium">
                <input type="radio" id="priority-normal" name="priority" />
                <label htmlFor="priority-normal">Normal Priority</label>
              </div>
              <div className="col-4 col-12-medium">
                <input type="radio" id="priority-high" name="priority" />
                <label htmlFor="priority-high">High Priority</label>
              </div> */}
              <div className="col-12">
                <textarea
                  name="message"
                  id="message"
                  placeholder="Enter your message"
                  rows="6"
                ></textarea>
              </div>
              <div className="col-6 col-12-medium">
                <input type="checkbox" id="copy" name="copy" />
                <label htmlFor="copy">Email me a copy of this message</label>
              </div>
              <div className="col-6 col-12-medium">
                <input type="checkbox" id="human" name="human" defaultChecked />
                <label htmlFor="human">I am a human and not a robot</label>
              </div>
              <div className="col-12">
                <ul className="actions">
                  <li>
                    <input
                      type="submit"
                      value="Send Message"
                      className="primary"
                    />
                  </li>
                  {/* <li>
                    <input type="reset" value="Reset" />
                  </li> */}
                </ul>
              </div>
            </div>
          </form>
        </section>
        <section>
        <header className="major">
          <h2>Our Locations</h2>
          <p>
            Ipsum dolor feugiat aliquam tempus sed magna lorem consequat
            accumsan
          </p>
        </header>
        <GoogleMap/>
          {/* <div className="box alt">
            <div className="row gtr-50 gtr-uniform">
              <div className="col-12">
                <span className="image fit">
                  
                </span>
              </div>
            </div>
          </div> */}
        </section>
      </div>
    </div>
    </Fade>
  </Layout>
)

export default Elements
