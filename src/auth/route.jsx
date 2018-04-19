import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom';
import { withRouter } from 'react-router-dom'

export default withRouter(({ match }) => (
    <Switch>
        <Route exact path={match.url} render={() => <div>Auth</div>} />
        <Redirect to={match.url} />
    </Switch>
))
