import React, { useState } from 'react'
import { Form } from 'react-bootstrap'
import { Button } from 'react-bootstrap'
import { Row } from 'react-bootstrap'
import { Col } from 'react-bootstrap'
import axios from 'axios'
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom'

function CreateFood() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");
  const [validationError, setValidationError] = useState({});

  const createFood = async(e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append('name', name);
    formData.append('description', description);
    formData.append('image', image);
    formData.append('price', price);

    axios.post(`http://127.0.0.1:8000/api/food`, formData).then((data) => {
        Swal.fire({
            icon : "success",
            text : data.message
        });
        navigate("/food");
    }).catch(({response}) => {
        if(response.status === 422){
            setValidationError(response.data.errors)
        }else{
            Swal.fire({
                text : response.data.message,
                icon : "error"
            });
        }
    })
}
  
  return (
    <div className='container'>
        <div className="row justify-content-center">
            <div className="col-12 col-sm-12 col-md-6">
                <div className="card">
                    <div className="card-body">
                        <h4 className='card-title'>New Food</h4>
                        <hr />
                        <div className="from-wrapper">
                            {Object.keys(validationError).length > 0 && (
                                <div className="row">
                                    <div className="col-12">
                                        <div className="alert alert-danger">
                                            <ul className="mb-0">
                                                {Object.entries(validationError).map(([key, value]) => (
                                                    <li key={key}>{value}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            )}

                            <Form onSubmit={createFood}>
                                <Row>
                                    <Col>
                                        <Form.Group controlId="Name">
                                            <Form.Label>Food Name</Form.Label>
                                            <Form.Control type="text" value={name} onChange={(event) => {
                                                setName(event.target.value);
                                            }} />
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <Form.Group controlId="Description">
                                            <Form.Label>Description</Form.Label>
                                            <Form.Control as="textarea" rows={3} value={description} onChange={(event) => {
                                                setDescription(event.target.value);
                                            }} />
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <Form.Group controlId="Image">
                                            <Form.Label>Image URL</Form.Label>
                                            <Form.Control type="text" value={image} onChange={(event) => {
                                                setImage(event.target.value);
                                            }} />
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <Row className='my-2'>
                                  <img src={image} alt="ไม่มีภาพดังกล่าว" />
                                </Row>
                                <Row>
                                    <Col>
                                        <Form.Group controlId="Price">
                                            <Form.Label>Price</Form.Label>
                                            <Form.Control type="number" min="0" value={price} onChange={(event) => {
                                                setPrice(event.target.value);
                                            }} />
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <Button variant='primary' className='mt-2' size='lg' block="block" type='submit'>
                                    Save
                                </Button>
                                <Button variant='danger' className='mt-2' size='lg' block="block" type='button' onClick={() => {navigate("/product")}}>
                                    Cancel
                                </Button>
                            </Form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CreateFood