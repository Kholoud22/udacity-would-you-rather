import React from 'react'
import {Card } from 'react-bootstrap'
import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormControl from '@material-ui/core/FormControl'
import FormLabel from '@material-ui/core/FormLabel'

const Login = (props) => {
  return (
    <Card variant="outlined" className="mb-3">
        <Card.Body>
            <FormControl>
                <FormLabel>Login with ...</FormLabel>
                <RadioGroup
                  aria-label="Login"
                  name="login"
                  value=""
                  onChange={(event) => props.setAuthedUser(event.target.value)}
                > 
                  {props.usersPayload &&
                    props.usersPayload.map((user) => (
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
  )
}
export default Login
