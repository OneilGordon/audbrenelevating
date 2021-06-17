import Layout from '../components/layout'
import React from 'react'
import Fade from 'react-reveal/Fade'
import pic02 from '../assets/images/pic02.jpg'
import pic03 from '../assets/images/pic03.jpg'
import pic04 from '../assets/images/pic04.jpg'
import pic07 from '../assets/images/pic07.jpg'
import pic08 from '../assets/images/pic08.jpg'


const imageStyle = {
    borderRadius: '100%',
    maxWidth: '100px !important',
    maxHeight: '100px !important'
}
const Four = props => (
    <Layout>
        <Fade duration = {2500}>
        <section id="four" className="wrapper style1 special fade-up">
            <div className="container">
            <header className="major">
                <h2>Accumsan sed tempus adipiscing blandit</h2>
                <p>
                Iaculis ac volutpat vis non enim gravida nisi faucibus posuere arcu
                consequat
                </p>
            </header>
            <div className="box alt">
                <div className="row gtr-uniform">
                <section className="col-4 col-6-medium col-12-xsmall">
                    {/* <span className="icon solid alt major fa-chart-area"></span> */}
                    <span><img src={pic08} style={imageStyle}/></span>
                    <h3>Ipsum sed commodo</h3>
                    <p>
                    Feugiat accumsan lorem eu ac lorem amet accumsan donec. Blandit
                    orci porttitor.
                    </p>
                </section>
                <section className="col-4 col-6-medium col-12-xsmall">
                    {/* <span className="icon solid alt major fa-comment"></span> */}
                    <span><img src={pic08} style={imageStyle}/></span>
                    <h3>Eleifend lorem ornare</h3>
                    <p>
                    Feugiat accumsan lorem eu ac lorem amet accumsan donec. Blandit
                    orci porttitor.
                    </p>
                </section>
                <section className="col-4 col-6-medium col-12-xsmall">
                    {/* <span className="icon solid alt major fa-flask"></span> */}
                    <span><img src={pic08} style={imageStyle}/></span>
                    <h3>Cubilia cep lobortis</h3>
                    <p>
                    Feugiat accumsan lorem eu ac lorem amet accumsan donec. Blandit
                    orci porttitor.
                    </p>
                </section>
                <section className="col-4 col-6-medium col-12-xsmall">
                    {/* <span className="icon solid alt major fa-paper-plane"></span> */}
                    <span><img src={pic08} style={imageStyle}/></span>
                    <h3>Non semper interdum</h3>
                    <p>
                    Feugiat accumsan lorem eu ac lorem amet accumsan donec. Blandit
                    orci porttitor.
                    </p>
                </section>
                <section className="col-4 col-6-medium col-12-xsmall">
                    {/* <span className="icon solid alt major fa-file"></span> */}
                    <span><img src={pic08} style={imageStyle}/></span>
                    <h3>Odio laoreet accumsan</h3>
                    <p>
                    Feugiat accumsan lorem eu ac lorem amet accumsan donec. Blandit
                    orci porttitor.
                    </p>
                </section>
                <section className="col-4 col-6-medium col-12-xsmall">
                    {/* <span className="icon solid alt major fa-lock"></span> */}
                    <span><img src={pic08} style={imageStyle}/></span>
                    <h3>Massa arcu accumsan</h3>
                    <p>
                    Feugiat accumsan lorem eu ac lorem amet accumsan donec. Blandit
                    orci porttitor.
                    </p>
                </section>
                </div>
            </div>
            {/* <footer className="major">
                <ul className="actions special">
                <li>
                    <a href="/" className="button">
                    Magna sed feugiat
                    </a>
                </li>
                </ul>
            </footer> */}
            </div>
        </section>
        </Fade>
    </Layout>    
)

export default Four
