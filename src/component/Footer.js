import React from 'react';
import {Row,Col} from 'reactstrap'

function Footer()
{
    return(
        <div className = "container">
            <Row className="rowF">
                <Col md={3}>Connect with me <br/>
                <p>
                <a className="btn btn-social-icon bth-github" href="https://github.com/deadhit-7081">
                    <i className="fab fa-github"></i>
                </a>
                <a className="btn btn-social-icon bth-linkedin" href="https://www.linkedin.com/in/jai-kumar-singh-0b9b22190/">
                    <i className="fab fa-linkedin"></i>
                </a>
                </p>
                </Col>
                <Col md={6} className="colF1">&copy; Jai Kumar Singh</Col><br/>
                <Col md={3}>Be Stubbon to learn any thing<br/>
                ~Jai Kumar Singh</Col>
            </Row>
        </div>
    )
}

export default Footer;