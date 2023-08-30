import React from 'react'

import { Card, Button } from 'react-bootstrap';

function ProfileCard(props) {




    return (

        <Card className='container col-6 bg-dark text-light mt-5 p-5 fs-2 bg-opacity-75 '>
            {/* <Card.Img variant="top" src={props.source} className='w-50' /> */}
            <img src={props.source} alt="img-fluid" className='img-fluid col-5 rounded' />
            <Card.Body>
                <Card.Title>{props.name}</Card.Title>
                <hr />
                <Card.Text>
                {props.description}
                <br />
                {props.Price}
                </Card.Text>                
            </Card.Body>
        </Card>
    )
}

export default ProfileCard