import React from "react";
import { ListGroup, ListGroupItem } from "react-bootstrap";
import { Link } from "react-router-dom";

export function Menu(){
    return (
        <div variant="outline-primary" className="mx-2 my-2">
        <ListGroup>
            <Link className="list-group-item list-group-item-action" tag="a" to="/" action> Home</Link>
            <Link className="list-group-item list-group-item-action" tag="a" to="/addCourse" action> Add Course</Link>
            <Link className="list-group-item list-group-item-action" tag="a" to="/ViewCourses" action> View All Course</Link>
            <Link className="list-group-item list-group-item-action" tag="a" to="/Basics" action>Learn More</Link>
        </ListGroup>
        </div>
    );
}