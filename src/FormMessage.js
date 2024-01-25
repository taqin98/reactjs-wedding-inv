import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';

const FormMessage = () => {
    return(
        <React.Fragment>
            <div className="container bg-primary">
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
                    
                    <Row>
                        <Col xs={12}>
                            <input type="text" className="form-control" placeholder="Masukkan ucapan anda" />
                        </Col>
                    </Row>
                </div>
            </div>
        </React.Fragment>
    )
}

export default FormMessage;