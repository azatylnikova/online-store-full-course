import React from 'react';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/Col';
import TypeBar from '../components/TypeBar';
import BrandBar from '../components/BrandBar'
import Devicelight from '../components/Devicelist';


const Shop = () => {
    return (
        <Container>
            <Row className='mt-2 '>
                <Col md={3} >
                    <TypeBar/>
                </Col>
                <Col md={9}>
                    <BrandBar/>
                    <Devicelight/>
                </Col>
            </Row>
        </Container>
    );
};

export default Shop;