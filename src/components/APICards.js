import React, { Component } from 'react';
import { Button, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class APICards extends React.Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            <div>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={this.props.image} alt='API_Image' />
                    <Card.Body>
                        <Card.Title> {this.props.name} </Card.Title>
                        
                        
                        <Button onClick={()=>this.props.addFuncs(this.props.name,this.props.image)} variant="primary"> Add To My Favorite </Button>
                    </Card.Body>
                </Card>
            </div>
        )
    }
}

export default APICards
