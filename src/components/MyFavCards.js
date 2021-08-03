import React, { Component } from 'react';
import { Button, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export class MyFavCards extends Component {
    render() {
        return (

            <div>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={this.props.image} alt='myFavImage' />
                    <Card.Body>
                        <Card.Title> {this.props.name} </Card.Title>


                        <Button onClick={()=>this.props.updateFunc(this.props.index)} variant="primary"> Update </Button>
                        <Button onClick={() => this.props.deleteFunc(this.props.index)} variant="primary"> Delete </Button>

                    </Card.Body>
                </Card>
            </div>

        )
    }
}

export default MyFavCards
