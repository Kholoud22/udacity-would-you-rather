import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { setAuthedUser } from '../actions/authed-user'
import { Image, Button, Row, Col, Container } from 'react-bootstrap'
import { withRouter } from 'react-router-dom'
class Nav extends React.Component {
  render() {
    const currentUser = this.props.users[this.props.authedUser]
    return (
      <Container>
        {currentUser && (
          <Row>
            <Col>
              <div lg="auto">
                <Image
                  src={currentUser.avatarURL}
                  style={{
                    width: 'auto',
                    height: 35,
                    marginRight: '30px',
                    borderRadius: '5pc',
                  }}
                ></Image>
                {currentUser.name}
              </div>
            </Col>
            <Col lg="auto">
              <NavLink exact to="/">
                Home
              </NavLink>
            </Col>
            <Col lg="auto">
              <NavLink to="/add">New Question</NavLink>
            </Col>
            <Col lg="auto">
              <NavLink to="/leaderboard">Leader Board</NavLink>
            </Col>
            <Col lg="auto">
              <Button
                variant="danger"
                onClick={(event) => {
                  event.preventDefault()
                  this.props.setAuthedUser(null)
                  this.props.history.push('/login')
                }}
              >
                Logout
              </Button>
            </Col>
          </Row>
        )}
      </Container>
    )
  }
}
const mapStateToProps = ({ authedUser, users }) => ({
  authedUser,
  users,
})
const mapDisPatchToProps = (dispatch) => {
  return {
    setAuthedUser: (id) => dispatch(setAuthedUser(id)),
  }
}
export default withRouter(connect(mapStateToProps, mapDisPatchToProps)(Nav))
