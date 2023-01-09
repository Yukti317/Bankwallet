import React, { useRef, useEffect, useState } from 'react'
import { Row, Col, Button, Table } from "react-bootstrap";
import "../components/regform.scss"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import TextField from '@mui/material/TextField';
import { Link } from '@mui/material';
import Home from './Home';

function Registration() {
    const name = useRef()
    const email = useRef()
    const password = useRef()
    const localsignUp = localStorage.getItem("signup")
    const localemail = localStorage.getItem("email")
    const localname = localStorage.getItem("name")
    const [showHome, setShowhome] = useState(false);
    const [show, setShow] = useState(false);

    useEffect(() => {
        if (localsignUp) {
            setShowhome(true)
        }
        if (localemail) {
            setShow(true)
        }
    });


    const handleclick = () => {

        console.log("aaaa")
        if (name.current.value && email.current.value && password.current.value) {
            console.log(name.current.value, email.current.value, password.current.value)
            console.log("gdhadkh")
            localStorage.setItem("name", name.current.value)
            localStorage.setItem("email", email.current.value)
            localStorage.setItem("Password", password.current.value)
            localStorage.setItem("signup", email.current.value)
            toast("Account created successfully!!")
            window.location.reload()
         

        }

    }

    const handlelogin =()=>{
        if (email.current.value==localemail && password.current.value){
            localStorage.setItem("signup",email.current.value)
            window.location.reload()

        }
        else{
            alert("Please Enter Valid Details")
        }
    }
    return (
        <>
        <ToastContainer/>
            {showHome ? <Home /> :
                (show ?

                    <div className='registration bg'>
                        <div className='container'>

                            <div className='registrationform' >

                                <Row className='justify-content-center align-items-center'>
                                    <Col md="auto">

                                        <form className='regform card' >
                                            <div className='heading title text-center'> Hello {localname}</div>




                                            <div className="input_space">
                                                <input placeholder="Email" className='inputbox' autoComplete='false' type='text' ref={email} />
                                            </div>
                                            <div className="input_space">
                                                <input placeholder="Password" className='inputbox' autoComplete='false' type='password' ref={password} />
                                            </div>

                                            <Button onClick={handlelogin}>Login</Button>

                                        </form>
                                    </Col>
                                </Row>


                            </div>

                        </div>
                    </div>
                    :
                    <div className='registration padding bg'>
                        <div className='container'>

                            <div className='registrationform' >

                                <Row className='justify-content-center align-items-center'>
                                    <Col md="auto">

                                        <form className='regform card' >
                                            <div className='heading title text-center'> Sign up</div>


                                            <div className="input_space">
                                                <input placeholder="name" className='inputbox' autoComplete='false' type='text' ref={name} />
                                            </div>

                                            <div className="input_space">
                                                <input placeholder="Email" className='inputbox' autoComplete='false' type='text' ref={email} />
                                            </div>
                                            <div className="input_space">
                                                <input placeholder="Password" className='inputbox' autoComplete='false' type='password' ref={password} />
                                            </div>

                                            <Button onClick={handleclick}>Submit</Button>

                                        </form>
                                    </Col>
                                </Row>


                            </div>

                        </div>
                    </div>
                )

            }
        </>
    )
}

export default Registration
