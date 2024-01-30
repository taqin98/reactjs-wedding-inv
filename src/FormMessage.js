import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Row, Toast } from 'react-bootstrap';
import axios from 'axios';


const FormMessage = () => {
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');
    const [showSuccessToast, setShowSuccessToast] = useState(false);
    const [showErrorToast, setShowErrorToast] = useState(false);

    const handleSendMessage = () => {
        const newMessage = {
            usernam: name,
            message: message,
        };

        axios.post('https://db-json-955d8421d4d0.herokuapp.com/comments', newMessage)
            .then(response => {
                console.log('Message sent successfully:', response.data);
                // Show success toast
                setShowSuccessToast(true);
                // Additional handling if needed, e.g., update state
            })
            .catch(error => {
                console.error('Error sending message:', error);
                // Show error toast
                setShowErrorToast(true);
                // Additional error handling if needed, e.g., update state
            });
    };
    useEffect(() => {}, []);
    
    return(
        <React.Fragment>
            <div className="container bg-primary pb-5">
                <div className="message-scroll">
                    <Row className="gy-3">
                        <Col xs={12}>
                            <div className="d-flex">
                                <div className="avatar-item col-3">T</div>
                                <Card className="message-head text-left col px-2 pb-2">
                                <div className="message-arrow"></div>
                                    <Card.Title className="message-username m-0 mt-2 ps-1">taqin</Card.Title>
                                    <Card.Body className="p-1">
                                        <Card.Text className="message-body p-0">
                                            Some quick example text to build on the card title and make up the bulk of
                                            the card's content.
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </div>
                        </Col>
                        <Col xs={12}>
                            <div className="d-flex">
                                <div className="avatar-item col-3">T</div>
                                <Card className="message-head text-left col px-2 pb-2">
                                <div className="message-arrow"></div>
                                    <Card.Title className="message-username m-0 mt-2 ps-1">taqin</Card.Title>
                                    <Card.Body className="p-1">
                                        <Card.Text className="message-body p-0">
                                            Some quick example text to build on the card title and make up the bulk of
                                            the card's content.
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </div>
                        </Col>
                        <Col xs={12}>
                            <div className="d-flex">
                                <div className="avatar-item col-3">T</div>
                                <Card className="message-head text-left col px-2 pb-2">
                                <div className="message-arrow"></div>
                                    <Card.Title className="message-username m-0 mt-2 ps-1">taqin</Card.Title>
                                    <Card.Body className="p-1">
                                        <Card.Text className="message-body p-0">
                                            Some quick example text to build on the card title and make up the bulk of
                                            the card's content.
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </div>
                        </Col>
                        <Col xs={12}>
                            <div className="d-flex">
                                <div className="avatar-item col-3">T</div>
                                <Card className="message-head text-left col px-2 pb-2">
                                <div className="message-arrow"></div>
                                    <Card.Title className="message-username m-0 mt-2 ps-1">taqin</Card.Title>
                                    <Card.Body className="p-1">
                                        <Card.Text className="message-body p-0">
                                            Some quick example text to build on the card title and make up the bulk of
                                            the card's content.
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </div>
                        </Col>
                        <Col xs={12}>
                            <div className="d-flex">
                                <div className="avatar-item col-3">T</div>
                                <Card className="message-head text-left col px-2 pb-2">
                                <div className="message-arrow"></div>
                                    <Card.Title className="message-username m-0 mt-2 ps-1">taqin</Card.Title>
                                    <Card.Body className="p-1">
                                        <Card.Text className="message-body p-0">
                                            Some quick example text to build on the card title and make up the bulk of
                                            the card's content.
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </div>
                        </Col>
                    </Row>
                </div>
                <div className="form-container mt-2 px-4">
                    <label>Kirim Ucapan</label>
                    <Row className="gy-3">
                        <Col xs={12}>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="nama anda"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </Col>
                        <Col xs={12}>
                            <textarea
                                className="form-control"
                                placeholder="Tulis pesan Anda..."
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                            ></textarea>
                        </Col>
                        <Col xs={12}>
                            <Button
                                variant="success"
                                className="w-100"
                                onClick={handleSendMessage}
                            >
                                Kirim
                            </Button>
                        </Col>
                    </Row>

                </div>
            </div>
            {/* Success Toast */}
            <Toast
                show={showSuccessToast}
                onClose={() => setShowSuccessToast(false)}
                delay={3000}
                autohide
                style={{
                    position: 'fixed',
                    bottom: 16,
                    right: 16,
                }}
            >
                <Toast.Header closeButton={false} className="bg-success text-white">
                    <strong className="me-auto">Success!</strong>
                </Toast.Header>
                <Toast.Body>Your message was sent successfully.</Toast.Body>
            </Toast>

            {/* Error Toast */}
            <Toast
                show={showErrorToast}
                onClose={() => setShowErrorToast(false)}
                delay={3000}
                autohide
                style={{
                    position: 'fixed',
                    bottom: 16,
                    right: 16,
                }}
            >
                <Toast.Header closeButton={false} className="bg-danger text-white">
                    <strong className="me-auto">Error!</strong>
                </Toast.Header>
                <Toast.Body>Error sending message. Please try again.</Toast.Body>
            </Toast>

        </React.Fragment>
    )
}

export default FormMessage;