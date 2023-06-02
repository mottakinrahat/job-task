import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

const SingleData = ({ show }) => {

    const onSelectShow = (show) => {
     
    }
    return (

        <>
            <div className='col g-5'>
                <Card style={{ width: '18rem' }}>
                <Card.Img  variant="top" src={show.image?.medium} />
                    <Card.Body>
                        <Card.Title>{show.show.name}</Card.Title>
                        <Card.Text>
                            Language: {show.show.language}
                        </Card.Text>
                        <div>
                           <Link to={`showDetails/${show.show.id}`}> <Button onClick={() => onSelectShow(show.show)}>View Summary</Button></Link>
                        </div>
                    </Card.Body>
                </Card>
            </div>
        </>

    );
};

export default SingleData;