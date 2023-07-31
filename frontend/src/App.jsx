import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.css';
import { Navbar } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ProductList from './components/ProductList';
import CreateProduct from './components/CreateProduct';
import EditProduct from './components/EditProduct';
import MainPage from './components/MainPage';
import FoodList from './components/FoodList';
import CreateFood from './components/CreateFood';

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Navbar bg='primary'>
        <Container>
          <Link to={"/"} className='navbar-brand text-white'>
            React&Laravel-Test
          </Link>
        </Container>
      </Navbar>

      <Container className='mt-5'>
        <Row>
          <Col md={12}>
            <Routes>
              <Route exact path='/' element={<MainPage />}></Route>
              <Route exact path='/product' element={<ProductList />}></Route>
              <Route exact path='/product/create' element={<CreateProduct />}></Route>
              <Route exact path='/product/edit/:id' element={<EditProduct />}></Route>
              <Route exact path='/food' element={<FoodList />}></Route>
              <Route exact path='/food/create' element={<CreateFood />}></Route>
            </Routes>
          </Col>
        </Row>
      </Container>
    </Router>
  )
}

export default App
