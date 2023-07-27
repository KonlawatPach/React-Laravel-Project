//rfce
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, Col } from 'react-bootstrap'
import { Row } from 'react-bootstrap'


function MainPage() {

    const navigate = useNavigate();

    return (
        <div className='container'>
            <Row className='d-flex justify-content-between'>
                <Col className='col-5 p-0 h-25'>
                    <img className='border rounded w-100 h-100' style={{cursor: "pointer"}} onClick={() => {navigate("/product")}} src="https://springpack.co.uk/app/uploads/2021/09/overhead-view-closed-cardboard-boxes-scaled.jpg" alt="product" />
                    <h1 className='text-center'>Product</h1>
                </Col>
                <Col className='col-5 p-0 h-25'>
                    <img className='border rounded w-100 h-100' style={{cursor: "pointer"}} onClick={() => {navigate("/food")}} src="https://a.cdn-hotels.com/gdcs/production0/d1513/35c1c89e-408c-4449-9abe-f109068f40c0.jpg?impolicy=fcrop&w=800&h=533&q=medium" alt="food" />
                    <h1 className='text-center'>Food</h1>
                </Col>
            </Row>  
        </div>
    )
}

export default MainPage