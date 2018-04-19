import React from 'react'
import PropTypes from 'prop-types';

import 'normalize.css';
import "styles/base/_main.sass"  // Global styles
import "styles/base/_common.sass"  // Global styles

import features from './features';
import { Redirect, Route, Switch } from 'react-router-dom';
import { withRouter } from 'react-router-dom'
import App from './containers/app'

export class AppRoute extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { match } = this.props
        return (
            <Switch>

                <Route exact path={match.url} component={App} />

                {features.map(feature => (
                    <Route
                        key={feature.constants.NAME}
                        path={`${match.url}${feature.constants.NAME}`}
                        component={feature.route}
                    />
                ))}

                <Redirect to={match.url} />
            </Switch>
        )
    }
}

AppRoute.propTypes = {
    match: PropTypes.object
}

export default withRouter(AppRoute)
