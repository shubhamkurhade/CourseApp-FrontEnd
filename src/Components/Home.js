import {React, useEffect}from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export function Home(){

    useEffect(()=>{
        document.title = "Home | CourseApp";
    }, []);

    return(
        <div className="mx-2 my-2">
            <Card border="primary" bg="light">
                <Card.Body>
                    <Card.Title className="my-3">
                        Get the best courses on programming At one place
                    </Card.Title>
                    <hr />
                    <Card.Text>The course website is one stop solution to excel into the prgramming and logic building using the real
                         world examples and build the real world applications</Card.Text>
                         <Card.Img variant= "bottom" 
                         src="https://callcentrehelper.com/images/stories/2018/02/magnet-businessman-win-back-customers-760.png">
                         </Card.Img>
                         <div style={{display: "flex"}}>
                            <Button style={{marginLeft: "auto"}}>
                                Get Started
                            </Button>
                         </div>
                </Card.Body>
            </Card>
            
        </div>
    );
}