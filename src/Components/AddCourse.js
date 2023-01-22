import {React, useEffect, useState} from "react";
import {
    Button,
    Container,
    Form,
    Card
}
from 'react-bootstrap';
import Course from "./Course";
import axios from "axios";



const AddCourse=()=>{
    useEffect(()=>{
        document.title = "Add New Course | CourseApp";
    }, []);

    const [courses, setCourses] = useState({});

    //Form handler function
    const handleForm = (e) => {
        console.log(courses);
        postDataToServer(courses);
        e.preventDefault();
    };
    const postDataToServer=(data)=>{
        axios.post("http://localhost:8080/courses", data).then(
            (response)=>{
                //Success function
                console.log(response);
                console.log("success");

            },
            (error)=>{
                //error function
                console.log(error);
                console.log("error");
            }
        )
    }


    return(
        <div>
            <Card border="primary">
            <Card.Header> <h3>Add new course</h3></Card.Header>
            <Card.Subtitle className="mx-2 my-2">
            <p>Add course details, Course Id and Let your knowledge be available for students across world.
             </p></Card.Subtitle>

             <Form className="mx-2 my-2" onSubmit={handleForm}>
                <Form.Group>
                    <Form.Label for="userId">Course Id</Form.Label>
                    <Form.Control type="text" placeholder="Please enter the courseId" name="UserId" id="UserId" onChange={(e)=>{
                        setCourses({...courses, id:e.target.value});
                    }}></Form.Control>
                </Form.Group>
                <Form.Group>
                    <Form.Label for="title">Course Title</Form.Label>
                    <Form.Control className="text" type="text" 
                    placeholder="Please enter the Title of the course" name="title" id="title" onChange={(e)=>{
                        setCourses({...courses, title:e.target.value});
                    }}></Form.Control>
                </Form.Group>
                <Form.Group>
                    <Form.Label for="description">Course Description</Form.Label>
                    <Form.Control className="text-left-top" type="textarea" style={{height: 150}} 
                    placeholder="Please enter the Details of the course" name="description" id="description" 
                    onChange={(e)=>{
                        setCourses({...courses, description:e.target.value});
                    }}></Form.Control>
                </Form.Group>
                <Container className="text-center my-2">
                    <Button type="submit">Upload course</Button>
                    <Button type="reset" className="mx-2">Reset</Button>
                </Container>
             </Form>
            </Card>
        </div>
    );
};
export default AddCourse;