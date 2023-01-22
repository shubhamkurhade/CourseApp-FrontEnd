import axios from "axios";
import React from "react";
import {
    Card,
    CardProps,
    Button,
    Container
} from 'react-bootstrap';

const Course=({course, update})=>{

    const deleteCourse=(id)=>{
       axios.delete(`http://localhost:8080/courses/${id}`).then(
       (response)=>{
        // Success function
        update(id);

       },
       (error)=>{
        //error function
       }
       )
    }

    return (
        <Card className="text-center">
            <Card.Body>
                <Card.Subtitle className="text-center">{course.title}</Card.Subtitle>
                <Card.Text>{course.description}</Card.Text>
                <Container>
                    <Button className="mx-2" onClick={()=>{
                        deleteCourse(course.id);
                    }}>
                        Delete
                    </Button>
                    <Button>
                        Update
                    </Button>
                </Container>
            </Card.Body>
        </Card>
    )
}
export default Course;