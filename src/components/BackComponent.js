import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class BackComponent extends Component {
    render() {
        return (
            <Row className="mb-2">
                <Col>
                    <Link to={'/'}>
                        <Button color="danger" className="mr-2">
                            <FontAwesomeIcon icon={faArrowLeft} /> Back
                        </Button>
                    </Link>
                </Col>
            </Row>


        );
    }
}

export default BackComponent;