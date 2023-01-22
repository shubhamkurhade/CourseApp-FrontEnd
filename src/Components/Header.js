import React from "react";
import { Container, Card, Button } from "react-bootstrap";

export function Header(){
    return(
        <div className="mx-2 my-2">
        <Container fluid>
            <Card>
                <Card.Body>
                    <Card.Img src="https://d33wubrfki0l68.cloudfront.net/590398ae9a27fec27fdac9450c0738d409cc84ff/c6bb7/static/2b5773beca118974180168ada813ba7b/an-introduction-to-low-level-programming.jpg">
                    </Card.Img>
                    <Card.ImgOverlay style={{color:'white', fontSize: 'rem', fixed: 'top'}}>
                        <h2 className="my-3 mx-2">Welcome to CourseApp!</h2>
                    </Card.ImgOverlay>
                    <Card className="mx-2 my-1">
                    <Card.Text className="text-center mx-2 my-2">
The CourseApp is the best portal to learn, and master the programming languages from C to Java and Kotlin,
The portal is best suitable for the beginers which can get you to the master level programmer with ability to
build algorithm for the app you are building or project you will work while learning that new skills.
</Card.Text>
                    </Card>
<hr />
                      <div className="d-grid gap-2, mx-2, my-2">
                         <Button variant="success" size="lg">
                         <h5>Learn by Building Project</h5>
                         </Button>
                      </div>
                </Card.Body>
            </Card>
        </Container>
        </div>
    );
}