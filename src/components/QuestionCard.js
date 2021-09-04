import React from 'react'
import { Button, Card, Row, Col, Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const QuestionCard = (props) => {
  return (
    <Card variant="outlined" className="mb-3">
      <Card.Body>
        <Row>
          <Col sm="auto">
            <Image
              src={props.avatarURL}
              style={{
                width: '100px',
                borderRadius: '10px',
              }}
            />
          </Col>
          <Col sm="auto">
            <Row>{props.name} asks would you rather ...</Row>
            <Row>
              <h6>{props.optionOneText}</h6>
            </Row>
            ---------------------------------- Or
            -----------------------------------
            <Row>
              <h6>{props.optionTwoText}</h6>
            </Row>
          </Col>
          <Col className="m-auto text-right col-4">
            <Link to={`/questions/${props.id}`}>
              <Button style={{ width: 'unset' }}>
                {props.isAnswered ? 'View' : 'Vote'}
              </Button>
            </Link>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  )
}
export default QuestionCard
