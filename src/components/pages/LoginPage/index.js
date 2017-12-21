import React from 'react';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import * as selectors from '../../../store/selectors/auth.selector';
import { login } from '../../../store/actions/auth.actions';

export class LoginPage extends React.PureComponent {
  static propTypes = {
    onLogin: PropTypes.func
  }

  handleLogin = () => {
    const { history } = this.props;
    this.props.onLogin({ user: 'sysadmin', password: 'sysadmin' });
    history.push('/');
  }

  render() {
    return (
      <article>
        <Helmet>
          <title>Login Page</title>
          <meta name="description" content="Login Page" />
        </Helmet>
        <div>
          <button type="button" onClick={this.handleLogin}> Login</button>
        </div>
      </article>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onLogin: payload => dispatch(login(payload))
  };
}

const mapStateToProps = createStructuredSelector({
  user: selectors.makeSelectUser(),
  authenticated: selectors.makeSelectAuthenticated()
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect)(LoginPage);
