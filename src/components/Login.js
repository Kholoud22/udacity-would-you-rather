import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setAuthedUser } from '../actions/authed-user'
import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormControl from '@material-ui/core/FormControl'
import FormLabel from '@material-ui/core/FormLabel'
import { Card, Image } from 'react-bootstrap'
import { withRouter } from 'react-router-dom'
class Login extends Component {
  state = {
    authedUser: '',
  }

  handleChange = (event) => {
    this.setState({ authedUser: event.target.value })
    this.props.setAuthedUser(event.target.value)
    //this.props.history.push('/')
  }
  // Login = (event) => {
  //   event.preventDefault()
  //   this.props.history.push('/')
  // }
  render() {
    const { usersPayload } = this.props
    const { authedUser } = this.state
    return (
      <div className="container">
        <div
          className="row"
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Card
            className="col-sm-12 col-lg-auto col-md-auto"
            style={{
              boxShadow: '5px 5px cadetblue',
              border: '1px solid',
              padding: '10px',
            }}
          >
            <h1 className="text-center">Would You rather app</h1>
            <Image src="would_you_rather_logo.png" />

            <Card.Body>
              <FormControl>
                <FormLabel>Login with ...</FormLabel>
                <RadioGroup
                  aria-label="Login"
                  name="login"
                  value={authedUser}
                  onChange={this.handleChange}
                >
                  {usersPayload &&
                    usersPayload.map((user) => (
                      <FormControlLabel
                        key={user.id}
                        value={user.id}
                        control={<Radio />}
                        label={user.name}
                      />
                    ))}
                </RadioGroup>
              </FormControl>
            </Card.Body>
          </Card>
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ users }) => {
  const usersPayload = Object.values(users).map((user) => ({
    avatarURL: user.avatarURL,
    id: user.id,
    name: user.name,
  }))
  return {
    usersPayload,
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    setAuthedUser: (userId) => dispatch(setAuthedUser(userId)),
  }
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login))
