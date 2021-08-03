import React, { Component } from 'react';
import Modal from 'react-bootstrap/Modal'
import { Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export class MyModal extends React.Component {
    render() {
        return (
            <div>
                <Modal
                    show={this.props.show}
                    onHide={()=>this.props.handleModal('','',0)}

                >
                    <Modal.Header closeButton>
                        <Modal.Title> Update Your Item </Modal.Title>
                    </Modal.Header>
                    <Form onSubmit={this.props.submitUpdate}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label> Name </Form.Label>
                            <Form.Control size="lg" type="text" placeholder="Name" name='Name' />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label> Image </Form.Label>
                            <Form.Control size="lg" type="text" placeholder="Image" name='Image' />
                        </Form.Group>

                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Modal>
            </div>
        )
    }
}

export default MyModal
