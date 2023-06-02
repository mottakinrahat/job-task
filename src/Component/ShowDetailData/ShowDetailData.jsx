import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useLoaderData } from 'react-router-dom';

const ShowDetailData = () => {
  const show = useLoaderData();
  console.log(show);
  
  return (
    <div className="big-banner">
      <Row>
        <Col md={6}>
          <Card style={{ width: '100%', height: '100%' }}>
            <Card.Img  variant="top" src={show.image.original} />
          </Card>
        </Col>
        <Col md={6}>
          <div className="information">
            <h2>Additional Information</h2>
            <Card.Title>{show.name}</Card.Title>
            <Card.Text>
              <p><span className="fw-bold">Language:</span> {show.language}</p>
              <p><span className="fw-bold">Average Run time:</span> {show.averageRuntime}</p>
              <p><span className="fw-bold">Premiered:</span> {show.premiered}</p>
              <p><span className="fw-bold">Rating:</span> {show.rating.average}</p>
              <p><span className="fw-bold">Summary:</span> {show.summary}</p>
              <p><span className="fw-bold">Type:</span> {show.type}</p>
              <p><span className="fw-bold">Movie Link:</span> <a href={show.url} target="_blank" rel="noopener noreferrer">{show.url}</a></p>
            </Card.Text>
            <Button variant="primary">Book Ticket</Button>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default ShowDetailData;
