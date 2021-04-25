import React from 'react';
import { Col, Container, Row, CardDeck, Card } from 'react-bootstrap';
import Code from '../../images/Code.png';
import Serv from '../../images/Server Rack.png';
import VMwr from '../../images/VMware.png';
import './main.css';

const Main = () => {
    return (
        <div className='main_page'>
            <Container>
                <Row>
                    <Col>
                        <CardDeck style={{marginTop: '20px'}}>
                            <Card>
                                <Card.Img variant='top' src={Code} />
                                <Card.Body>
                                    <Card.Title>SENG Lab Info</Card.Title>
                                    <Card.Text className='card_info'>
                                        The Software Engineering Lab area currently contains 3 high compute servers
                                        that were obtained through grant money from (insert contributor). 
                                        Currently, these servers are being used by the Dunwoody Academic Cloud (DAC) Senior Project team.
                                        For more information on the Software Engineering program at Dunwoody College of Technology, please click 
                                        <a href='http://www.dunwoody.edu/engineering/software-engineering' target='_blank' rel='noreferrer'> here</a>.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                            <Card>
                                <Card.Img variant='top' src={VMwr}/>
                                <Card.Body>
                                    <Card.Title>VMWare Products</Card.Title>
                                    <Card.Text className='card_info'>
                                        The following VMWare Products are currently in use in the SENG Lab:
                                        <ul style={{paddingTop: '10px'}}>
                                            <li>ESXi 7.0</li>
                                            <li>vCenter Server</li>
                                            <li>vRealize Automation</li>
                                        </ul>
                                        These are being utilized in order to provide a platform for SENG students to be able to provision and create 
                                        VMs in a streamlined fashion. 
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                            <Card>
                                <Card.Img variant='top' src={Serv}/>
                                <Card.Body>
                                    <Card.Title>Server Info</Card.Title>
                                    <Card.Text className='card_info'>
                                        *Ask Joe for more info on tech specs of HC servers being used. 
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </CardDeck>
                        <h1 className='info_header' id='site_info'>DAC Site Information</h1>
                        <p className='intro'>
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