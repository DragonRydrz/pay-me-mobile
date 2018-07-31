import React, { Component } from 'react';
import {
  AsyncStorage,
  SafeAreaView,
  Text,
  Button,
  WebView,
} from 'react-native';
import { connect } from 'react-redux';
import StripeWebView from './StripeWebView';
import { HOST } from '../../../config';

class ConnectStripe extends Component {
  state = {
    token: '',
  };

  render() {
    return this.state.token ? (
      <SafeAreaView style={{ flex: 1 }}>
        {console.log('inside webview', this.state.token)}
        <StripeWebView
          token={this.state.token}
          clearToken={() => this.setState({ token: '' })}
        />
      </SafeAreaView>
    ) : (
      // <SafeAreaView style={{ flex: 1 }}>
      //   <WebView
      //     source={{
      //       uri: 'http://www.google.com',
      //     }}
      //     // startInLoadingState={true}
      //   />
      // </SafeAreaView>
      <SafeAreaView>
        <Text>{this.props.user.username}</Text>
        <Text>{this.state.token}</Text>
        <Text>
          A Stripe account is required to use payMe. Please click the button
          below to be directed to link your existing Stripe account or create a
          new one.
        </Text>
        <Button
          title="This is the button to tap"
          onPress={() => {
            console.log('button pressed');
            AsyncStorage.getItem('jwt')
              .then(token => {
                console.log(token);
                this.setState({ token });
              })
              .catch(err => console.log(err));
          }}
        />
      </SafeAreaView>
    );
  }
}

const mapStateToProps = state => {
  return {
    code: state.auth.admin.stripe.code,
  };
};

export default connect(mapStateToProps)(ConnectStripe);
