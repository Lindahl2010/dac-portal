import React from 'react';
import { Col, Container, Row, Carousel } from 'react-bootstrap';
import Code from '../../images/Code.png';
import Serv from '../../images/Server Rack.png';
import VMwr from '../../images/VMware.png';
import './main.css';

const Main = () => {
    return (
        <div className='main_page'>
            <Container>
                <Carousel>
                    <Carousel.Item>
                        <img className="d-block w-100" id='carousel_img' src={Code} alt="Third slide"/>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100" id='carousel_img' src={VMwr} alt="First slide"/>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100" id='carousel_img' src={Serv} alt="Second slide"/>
                    </Carousel.Item>
                </Carousel>
                <Row>
                    <Col>
                        <h1 className='info_header' id='site_info'>DAC Site Information</h1>
                        <p>
                            This site is meant to serve as a central hub for navigating the relevant VMWare infrastructure in the SENG Lab. 
                            The intent is to provide new users, and/or teachers, a way to request new AD accounts in this environment. 
                            Access to certain web portals will require elevated permissions, such as access to the vCenter, vRealize IDM, etc. 
                            However, others will be accessible by any new user that has been setup with general access to the environment. 
                        </p>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Main;