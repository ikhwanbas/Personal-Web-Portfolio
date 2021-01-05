import React from 'react'
import '../Styles/LatestProject.css'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

import slide1 from "../img/slide1.jpg";

function LatestProject() {
    return (
        <div className="LatestProject">
            <h1>Projects</h1>
            <div className="CardStyle">

                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={slide1} />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                     </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>


                </Card>

                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={slide1} />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>

                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                     </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>

                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={slide1} />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>

                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                     </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>

            </div>

        </div>
    )
}

export default LatestProject

