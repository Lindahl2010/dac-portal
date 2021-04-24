import React from 'react';
import { Card, CardDeck, Col, Container, Row } from 'react-bootstrap';

const AD_Request = () => {
    return (
        <div style={{marginTop: '50px'}}>
            <Container>
                <Row>
                    <Col>
                    <CardDeck>
                        <Card>
                            <Card.Header>New Account Setup</Card.Header>
                        </Card> 
                        <Card>
                            <Card.Header>Privilege Request</Card.Header>
                        </Card>
                    </CardDeck>
                    </Col>
                </Row>
            </Container> 
        </div>
    )
}

export default AD_Request;