import axios from "axios";
import React, { useState, useEffect} from "react";
import { Container, Toast } from "react-bootstrap";
import Course from "./Course";
import base_url from "../SpringBootService/bootAPI";



const AllCourses=()=>
{

    const [courses, setCourses] = useState([])

    useEffect(()=>{
        fetch("http://localhost:8080/courses").then((result)=>{
            result.json().then((resp)=>{
                setCourses(resp)
            })
        })
    }, [])


    useEffect(()=>{
        document.title = "All Courses | CourseApp";
    }, []);

    const updateCourseById=(id)=>{
        setCourses(courses.filter((c)=> c.id != id));
    }

    /*
    {title:"CPP Course", description:"This is CPP course"},
        {title:"Java Course", description:"This is Java course"},
        {title:"Spring Course", description:"This is Spring course"},
        {title:"React Course", description:"This is React course"},
        */
    // function to call server


    return (
        <Container>
            <div>
                <h1>All Course on the portal are listed below:</h1>
                <p>
                    view all the courses offered by CourseApp, read the description and choose what suits you the best as per your learning goals.
                </p> 
                {
                  courses.length > 0 ?
                  courses.map((item)=>< Course key={item.id} course={item} update={updateCourseById}/>) : "No"
                }

            </div>
        </Container>
        
    );
};
export default AllCourses;