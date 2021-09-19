import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import LoadingBar from 'react-redux-loading'
import { Route } from 'react-router-dom'
import { handleInitialData } from './actions/shared'
import Login from './components/Login'
import Leaderboard from './components/Leaderboard'
import Dashboard from './components/Dashboard'
import PageNotFound from './components/PageNotFound'
import NewQuestion from './components/NewQuestion'
import QuestionDetails from './components/QuestionDetails'
import Switch from 'react-bootstrap/esm/Switch'
import Nav from './components/Nav'
class App extends Component {
  componentDidMount() {
    this.props.handleInitialData()
  }

  render() {
    return (
      <Fragment>
        <LoadingBar />
        <div className="container">
          {this.props.authedUser && Object.keys(this.props.authedUser).length ? (
            <div>
              <Nav />
              <Switch>
                <Route exact path="/" component={Dashboard} />
                <Route exact path="/add" component={NewQuestion} />
                <Route exact path="/leaderboard" component={Leaderboard} />
                <Route path="/questions/:id" component={QuestionDetails} />
                <Route path="/404" component={PageNotFound} />
              </Switch>
            </div>
          ) : (
            <Login />
          )}
        </div>
      </Fragment>
    )
  }
}
const mapStateToProps = ({ authedUser }) => ({
  authedUser,
})

const mapDispatchToProps = (dispatch) => {
  return {
    handleInitialData: () => dispatch(handleInitialData()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
