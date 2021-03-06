import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import ForgotPasswordForm from 'components/Auth/ForgotPasswordForm';
import { forgotPasswordAction } from 'redux/actions/auth';
import Bg from 'assets/img/forgot-bg.jpg';
import Reviewer from 'assets/img/faces/oval.jpg';
import AuthLayout from 'components/Auth/AuthLayout';

class ForgotPassword extends PureComponent {
  onSubmit = data => {
    const { forgotPassword } = this.props;
    forgotPassword(data);
  };

  render() {
    const { error } = this.props;

    return (
      <AuthLayout
        error={error}
        bg={Bg}
        review={{
          text: 'The road to success is littered with potholes.Try to enjoy the bumpy ride!',
          avatar: Reviewer,
          name: 'Harry Holder',
          username: '@harryholder'
        }}
      >
        <ForgotPasswordForm onSubmit={this.onSubmit} />
      </AuthLayout>
    );
  }
}

const mapStateToProps = ({ auth }) => ({
  error: auth.error
});

const mapDispatchToProps = dispatch => ({
  forgotPassword: data => {
    dispatch(forgotPasswordAction(data));
  }
});

ForgotPassword.propTypes = {
  error: PropTypes.objectOf(PropTypes.any),
  forgotPassword: PropTypes.func.isRequired
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(ForgotPassword)
);
