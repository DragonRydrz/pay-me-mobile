import React, { Component } from 'react';
import { SafeAreaView, WebView } from 'react-native';
import { connect } from 'react-redux';
import { HOST } from '../../../config';
import { autoLogin } from '../../../actions/auth';

class StripeWebView extends Component {
  state = { code: '' };
  render() {
    if (this.state.code) this.props.clearToken();
    console.log(this.state.code, 'code');
    return (
      <WebView
        onLoadEnd={() => {
          this.props.autoLogin(this.props.token);
        }}
        style={{ flex: 1 }}
        source={{
          uri: `${HOST}/stripe/authorize?jwt=${this.props.token}`,
        }}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    code: state.auth.admin.stripe.code,
  };
};

export default connect(
  mapStateToProps,
  { autoLogin }
)(StripeWebView);
