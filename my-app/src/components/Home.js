import React, { useState } from 'react'
import { Row, Col, Button, Table, Container } from "react-bootstrap";
import "./home.scss"
import { TextField } from "@mui/material";
import { TextareaAutosize } from "@mui/material";
import { Modal } from "react-bootstrap";
import { Link } from 'react-router-dom';

function Home() {

    const logout = () => {
        localStorage.removeItem("signup")
        window.location.reload()
    }
    const [data, setData] = useState();

    const [show, setShow] = useState(false);

    const handleClose = () => {
        setShow(false);
        setData((prevState) => ({
            ...prevState,
            name: "",
        }));
    };
    const handleShow = () => setShow(true);
    return (
        <>
            <div className='homepage bg'>
                <div className='header title'>
                    <Container>
                        <Row className='justify-content-between'>
                            <Col md="auto" >Dashboard</Col>
                            <Col md="auto" >
                                <Button onClick={logout}>Logout</Button>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <div className='main'>
                    <Container>
                        <div className='text-center m-4'>
                            <h3>Welcome!!! Dear {localStorage.getItem("name")}</h3>
                        </div>
                        <Row className='justify-content-center'>
                            <Col md="auto">
                                <div className='card font-25 padcard'>
                                    <p className='text-center fw-700'>Total Balance</p>
                                    <span className='text-center'> &#x20B9;2000</span>
                                </div>
                            </Col>


                        </Row>


                    </Container>
                </div>
                <div >
                    <Container>
                        <div>
                            <ul className='btns'>
                                <li> <Link to="/history"> History</Link></li>
                                <li onClick={handleShow}>Transactions</li>
                            </ul>
                        </div>
                    </Container>
                </div>


                <Modal show={show} onHide={handleClose} centered>
                    <Modal.Header closeButton>
                        <Modal.Title>Add Transaction</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>

                        <Row className='justify-content-center align-items-center'>
                            <Col md="auto">

                                <form className='regform' >
                                   
                                    <div className="input_space">
                                        <input placeholder="Acc Number" className='inputbox' autoComplete='false' type='number'  />
                                    </div>
                                    <div className="input_space">
                                        <input placeholder="Amount" className='inputbox' autoComplete='false' type='number'  />
                                    </div>

                                    <Button className='d-flex m-auto'>Submit</Button>

                                </form>
                            </Col>
                        </Row>
                     
                    </Modal.Body>
                </Modal>
            </div>
        </>
    )
}

export default Home
