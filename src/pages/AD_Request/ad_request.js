import React from 'react';
import { Button, Card, CardDeck, Col, Container, Row } from 'react-bootstrap';
import BulkUser from '../../resources/Bulk User Template.csv';

const AD_Request = () => {
    return (
        <div style={{marginTop: '50px'}}>
            <Container>
                <Row>
                    <Col>
                    <CardDeck>
                        <Card>
                            <Card.Header>New Account Setup</Card.Header>
                            <Card.Body>
                                <Card.Text className='card_info'>
                                    Currently, new users must be manually added by an Admin of the AD server in out environment. 
                                    In the future, there are plans to automate this through extracting user information from 
                                    excel files provided by customers. For testing purposes, we have a template file 
                                    that can be downloaded using the button below.<br/><br/>
                                    <form method='get' action={BulkUser}>
                                        <Button className='shadow-none' variant='primary' type='submit' size='sm'>Bulk User Request</Button>
                                    </form>
                                </Card.Text>
                            </Card.Body>
                        </Card> 
                        <Card>
                            <Card.Header>Privilege Request</Card.Header>
                            <Card.Body>
                                <Card.Text className='card_info'>
                                    In order to elevate user permissions, please contact an administrator. Make sure to describe the permissions that you require
                                    or the group that you need to be added to. 
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </CardDeck>
                    </Col>
                </Row>
            </Container> 
        </div>
    )
}

export default AD_Request;