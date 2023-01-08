import React from 'react'
import { Row, Col, Button, Table, Container } from "react-bootstrap";
import "./home.scss"

function Home() {

    const logout = () => {
        localStorage.removeItem("signup")
        window.location.reload()
    }
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
                                <div className='card font-20 padcard'>
                                    <p className='text-center'>Total Balance</p>
                                    <span className='text-center'> &#x20B9;2000</span>
                                </div>
                            </Col>
                        </Row>


                    </Container>
                </div>
            </div>
        </>
    )
}

export default Home
