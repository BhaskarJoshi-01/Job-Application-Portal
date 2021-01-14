import React,{ useLayoutEffect, useState } from 'react'
import { Container,Row,Col,Button, Card, Form,Nav ,Navbar,InputGroup,FormControl } from 'react-bootstrap';

function useMediaQuery() {
    const [screenSize, setScreenSize] = useState([0, 0]);
    
    useLayoutEffect(() => {
      function updateScreenSize() {
        setScreenSize([window.innerWidth, window.innerHeight]);
      }
      window.addEventListener("resize", updateScreenSize);
      updateScreenSize();
      return () => window.removeEventListener("resize", updateScreenSize);
    }, []);
    
    return screenSize;
}

var Screen992 = () => {
    const [width] = useMediaQuery();
  
    return width <= 992 ? (
      0
    ) : (
      1
    );
};

function Singleskill(){
    return (
        <Form inline style={{fontWeight:"800",margin:"0px 10px 10px 0px"}}>
            <InputGroup style={{border:'2px solid black',width:"220px",borderRadius:'5px'}}>
                <FormControl
                type="text"
                placeholder="Remove Skill"
                value="Python"
                style={{border:'none',paddingTop:"6px",paddingBottom:"6px",color:"black",fontWeight:"800",borderRight:"2px solid #22272B"}}
                />
                <InputGroup.Append>
                <Button title="remove" variant="outline-dark" className="pl-3 pr-3" size="sm" style={{fontWeight:"800",fontSize:"20px",border:'none'}}>-</Button>
                </InputGroup.Append>
            </InputGroup>
        </Form>
    );
}

function Education(){
    return (
            <Row style={{position:"relative"}} className="my-3">
                <i style={{position:"absolute",top:"0px",right:"20px"}} className="far fa-2x fa-minus-square"></i>
                <Col sm="1" style={{color:"#grey"}}>
                <i className="fas fa-graduation-cap fa-2x"></i>
                </Col>
                <Col>
                <p style={{borderLeft:"2px solid #e5e7eb", paddingLeft:"10px"}}>International Technology<br />2017 - 2023</p>
                </Col>
            </Row>
    );
}

function Recruiter(){
    return (
        <div>
            <div  style={{width:"100%",backgroundColor:"white",position:'sticky',top:'0px',zIndex:'10'}}>
                
                <div style={{width:"100%",borderBottom:"0.5px solid #e5e7eb",backgroundColor:"inherit",padding:"5px",display:"sticky",top:"0"}}>
                <Navbar style={{maxWidth:"1400px",margin:"auto"}} bg="inherit" expand="md" className="pl-8">
                <Navbar.Toggle aria-controls="responsive-navbar-nav" style={{border:"2px solid gray"}} />

                <Navbar.Collapse className="justify-content-end-md mt-xs-3" >

                    <Nav className="ml-auto">
                    <Nav.Link style={{fontSize:"20px",fontWeight:'light'}} href="#myapplications" className="mr-3 "><i className="fas fa-database" style={{marginRight:"10px"}}></i>My Application</Nav.Link>
                    <Nav.Link style={{fontSize:"20px",fontWeight:'light'}} href="#back"  ><i className="fas fa-chevron-circle-left" style={{marginRight:"10px"}}></i>Back</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                </Navbar>
            
                </div>
                
            </div>
            
            <div style={{maxWidth:'100%',padding:"40px 0px"}}>
                <Container style={{maxWidth:"1200px"}}>
                    <Row>
                        {/* <Col lg={4}>
                                <Card style={Screen992()?{position:"sticky",top:"130px", width: '320px',height:'470px',border:'none'}:{position:"static",margin:"auto" , width: '270px',height:'350px',border:'none'}}>
                                    <Card.Img variant="left" src={logo} style={{border:"2px solid black",height:"300px",padding:'0',backgroundColor:"black",borderRadius:"5px",boxShadow:'rgba(0, 0, 0, 0.15) 0px 5px 15px 0px'}} />
                                    <Card.Body style={{paddingLeft:'0px',paddingRight:'0'}}>
                                        <Row>
                                    <Col><Button variant="outline-dark" style={{border:"2px solid black", width:'101%',boxShadow:'rgba(0, 0, 0, 0.15) 0px 5px 15px 0px'}}>Update</Button></Col>
                                    <Col><Button variant="outline-dark" style={{border:"2px solid black",width:'101%',boxShadow:'rgba(0, 0, 0, 0.15) 0px 5px 15px 0px'}}>Default</Button></Col>
                                    </Row>
                                    </Card.Body>
                                </Card>
                        </Col> */}
                        <Col  lg={8}>
                            <div style={{width:"100%",boxShadow:'rgba(0, 0, 0, 0.15) 0px 5px 15px 0px',padding:"40px 20px",borderRadius:"10px"}}>
                            <Row><Col xs="5" sm="4" md={3}><h1>Profile</h1></Col><Col><h5 xs="5" sm="6" style={{marginTop:"17px",color:"grey",fontWeight:"800"}}>[Applicant]</h5></Col></Row>
                                <hr style={{border:"0.5px solid #e5e7eb",height:"0",marginBottom:"50px",marginTop:"20px"}}></hr>
                                <Form style={{fontWeight:"800"}}>
                                    <Form.Row>
                                        <Form.Group as={Col} sm="6" controlId="formGridEmail">
                                        <Form.Label >First Name</Form.Label>
                                        <Form.Control type="text" placeholder="First Name" />
                                        </Form.Group>
                                        <Form.Group as={Col} sm="6" controlId="formGridEmail">
                                        <Form.Label >Last Name</Form.Label>
                                        <Form.Control type="text" placeholder="Last Name" />
                                        </Form.Group>
                                    </Form.Row>
                                    <Form.Row>
                                        <Form.Group as={Col} sm="6" controlId="formGridEmail">
                                        <Form.Label >Email</Form.Label>
                                        <Form.Control type="email" placeholder="Enter email" />
                                        </Form.Group>

                                        <Form.Group as={Col} sm="6" controlId="formGridContact">
                                        <Form.Label >Contact</Form.Label>
                                        <Form.Control type="tel" placeholder="Contact" />
                                        </Form.Group>
                                    </Form.Row>
                                    <Form.Row>
                                        <Form.Group as={Col} sm="12" controlId="formGridPassword">
                                        <Form.Label >Password</Form.Label>
                                        <Form.Control type="password" placeholder="Password" />
                                        </Form.Group>
                                    </Form.Row>


                                    <Button variant="outline-dark" style={{width:'150px',fontWeight:"800",marginTop:"20px",border:"2px solid black"}} type="submit">
                                        Update
                                    </Button>
                                </Form>


                                <h1 style={{marginTop:'80px'}}>Education</h1>
                                <hr style={{border:"0.5px solid #e5e7eb",height:"0",marginBottom:"50px",marginTop:"20px"}}></hr>
                                <div style={{width:"100%",padding:"0",margin:"0"}}>
                                <Education />
                                <Education />
                                <Education />
                                <Education />


                                <Form style={{fontWeight:"800",marginTop:"50px"}}>
                                    <InputGroup vertical style={{border:'2px solid black',width:"270px",borderRadius:'5px'}}>
                                        <FormControl
                                        type="text"
                                        placeholder="New"
                                        style={{border:'none',paddingTop:"6px",paddingBottom:"6px",borderRight:"3px solid #22272B"}}
                                        />
                                        <FormControl
                                        type="text"
                                        placeholder="Start"
                                        style={{border:'none',paddingTop:"6px",paddingBottom:"6px",borderRight:"3px solid #22272B"}}
                                        />
                                        <FormControl
                                        type="text"
                                        placeholder="End(If)"
                                        style={{border:'none',paddingTop:"6px",paddingBottom:"6px",borderRight:"2px solid #22272B"}}
                                        />
                                        <InputGroup.Append>
                                        <Button variant="outline-dark" className="pl-3 pr-3" size="sm" style={{fontWeight:"800",fontSize:"20px",border:'none'}}>+</Button>
                                        </InputGroup.Append>
                                    </InputGroup>
                                </Form>
                                </div>


                                <h1 style={{marginTop:'80px'}}>Skill</h1>
                                <hr style={{border:"0.5px solid #e5e7eb",height:"0",marginBottom:"50px",marginTop:"20px"}}></hr>
                                <Row style={{padding:"20px 14px"}}>
                                <Singleskill />
                                <Singleskill />
                                <Singleskill />
                                <Singleskill />
                                <Singleskill />
                                <Singleskill />
                                <Singleskill />
                                <Singleskill />
                                <Singleskill />
                                <Singleskill />
                                <Singleskill />
                                <Singleskill />
                                <Singleskill />
                                <Singleskill />
                                <Singleskill />
                                <Singleskill />
                                <Singleskill />
                                </Row>

                                <Form style={{fontWeight:"800"}}>
                                    <InputGroup style={{border:'2px solid black',width:"223px",borderRadius:'5px'}}>
                                        <FormControl
                                        type="text"
                                        placeholder="Add New Skill"
                                        style={{border:'none',paddingTop:"6px",paddingBottom:"6px",borderRight:"2px solid #22272B"}}
                                        />
                                        <InputGroup.Append>
                                        <Button variant="outline-dark" className="pl-3 pr-3" size="sm" style={{fontWeight:"800",fontSize:"20px",border:'none'}}>+</Button>
                                        </InputGroup.Append>
                                    </InputGroup>
                                </Form>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
}

export default Recruiter;