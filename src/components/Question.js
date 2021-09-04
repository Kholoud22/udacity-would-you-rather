import React, { Component } from 'react'
import { Container, Card, Row, Col, Image, ProgressBar } from 'react-bootstrap'
import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormControl from '@material-ui/core/FormControl'
import { connect } from 'react-redux'
import { handleSaveQuestionAnswer } from '../actions/questions'
class Question extends Component {
  submit = (event) => {
    event.preventDefault()
    const answer = event.target.value
    const qid = this.props.question.id
    const { authedUser, handleSaveQuestionAnswer } = this.props
    handleSaveQuestionAnswer({ authedUser, qid, answer })
  }
  render() {
    const { question, isAnswered } = this.props
    const optOneVotes = question.optionOne.votes.length
    const optTwoVotes = question.optionTwo.votes.length
    const totalVotes = optOneVotes + optTwoVotes
    const optOnePer = Math.round((optOneVotes / totalVotes) * 100)
    const optTwoPer = Math.round((optTwoVotes / totalVotes) * 100)
    const selectedVote = isAnswered
      ? question.optionOne.votes.includes(question.currentUser)
        ? 'optionOne'
        : 'optionTwo'
      : null
    return (
      <Card variant="outlined" className="mb-3">
        <Card.Body>
          <Container>
            <Row>
              <Col sm="auto">
                <Image
                  src={question.avatarURL}
                  style={{
                    width: '100px',
                    borderRadius: '10px',
                  }}
                />
              </Col>
              <Col>
                <Row>{question.author} asks would you rather ...</Row>
                <Row>
                  {isAnswered ? (
                    <div className="container">
                      <div>
                        <div className="row">
                          <h6 className="col-auto">
                            {question.optionOne.text}
                          </h6>
                          {selectedVote === 'optionOne' && (
                            <div
                              className="pl-1 pr-1"
                              style={{
                                width: 43,
                                fontSize: 13,
                                background: 'cadetblue',
                                marginBottom: 5,
                                borderRadius: 5,
                                color: 'white',
                              }}
                            >
                              Voted
                            </div>
                          )}
                        </div>

                        <ProgressBar now={optOnePer} label={`${optOnePer}%`} />
                        <div>
                          {optOneVotes} out of {totalVotes}
                        </div>
                      </div>
                      <div>
                        <div className="row">
                          <h6 className="col-auto">
                            {question.optionTwo.text}
                          </h6>
                          {selectedVote === 'optionTwo' && (
                            <div
                              className="pl-1 pr-1"
                              style={{
                                width: 43,
                                fontSize: 13,
                                background: 'cadetblue',
                                marginBottom: 5,
                                borderRadius: 5,
                                color: 'white',
                              }}
                            >
                              Voted
                            </div>
                          )}
                        </div>

                        <ProgressBar now={optTwoPer} label={`${optTwoPer}%`} />
                        <div>
                          {optTwoVotes} out of {totalVotes}
                        </div>
                      </div>
                    </div>
                  ) : (
                    <FormControl>
                      <RadioGroup onChange={this.submit}>
                        <FormControlLabel
                          value="optionOne"
                          control={<Radio />}
                          label={question.optionOne.text}
                        />

                        <FormControlLabel
                          value="optionTwo"
                          control={<Radio />}
                          label={question.optionTwo.text}
                        />
                      </RadioGroup>
                    </FormControl>
                  )}
                </Row>
              </Col>
            </Row>
          </Container>
        </Card.Body>
      </Card>
    )
  }
}
const mapStateToProps = ({ authedUser }) => ({
  authedUser,
})
export default connect(mapStateToProps, { handleSaveQuestionAnswer })(Question)
