import React from 'react';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Redirect } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';

import * as selectors from '../../../store/selectors/auth.selector';
import { logout } from '../../../store/actions/auth.actions';

export class AppContainer extends React.PureComponent {
  static propTypes = {
    user: PropTypes.string,
    authenticated: PropTypes.bool,
    onLogout: PropTypes.func
  }

  handleLogout = () => {
    const { history } = this.props;
    this.props.onLogout();
    history.push('/login');
  }

  render() {
    if (!this.props.authenticated) {
      return <Redirect to="/login" />;
    }
    return (
      <article>
        <Helmet>
          <title>App Container</title>
          <meta name="description" content="App Container" />
        </Helmet>
        <div>
          <button onClick={this.handleLogout}> Logout</button>
        </div>
      </article>
    );
  }
}

export function mapDispatchToProps(dispatch) {
  return {
    onLogout: () => dispatch(logout())
  };
}

const mapStateToProps = createStructuredSelector({
  user: selectors.makeSelectUser(),
  authenticated: selectors.makeSelectAuthenticated()
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect)(AppContainer);
