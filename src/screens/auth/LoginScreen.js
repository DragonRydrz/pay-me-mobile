import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { AsyncStorage, SafeAreaView, Text } from 'react-native';
import {
  Card,
  CardSection,
  Button,
  Input,
  Spinner,
} from '../../components/common/';
import { login, autoLogin, authError, loading } from '../../actions/auth';

class LoginScreen extends Component {
  state = {
    // TODO: Delete initial credentials.  Used for quick login access in development.
    username: 'DragonRydrz@me.com',
    password: '123456',
  };

  componentWillMount() {
    AsyncStorage.getItem('jwt')
      .then(token => {
        if (token) {
          this.props.autoLogin(token, this.props.navigation.navigate);
        }
      })
      .catch(err => console.log(err));
  }

  render() {
    const { errorTextStyle } = styles;
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <Card>
          <CardSection>
            <Input
              label={'Email'}
              placeholder={'user@email.com'}
              value={this.state.username}
              onChangeText={username => this.setState({ username })}
              keyboardType="email-address"
            />
          </CardSection>
          <CardSection>
            <Input
              label={'Password'}
              placeholder={'password'}
              value={this.state.password}
              onChangeText={password => this.setState({ password })}
              secureTextEntry
            />
          </CardSection>
          {this.props.auth.message ? (
            <Text style={errorTextStyle}>{this.props.auth.message}</Text>
          ) : null}
          <CardSection>{this.renderButtons()}</CardSection>
        </Card>
      </SafeAreaView>
    );
  }
  renderButtons() {
    return this.props.auth.loading ? (
      <Spinner />
    ) : (
      <Fragment>
        <Button
          onPress={() => {
            this.props.authError();
            this.props.loading(true);
            this.props.login(this.state, this.props.navigation.navigate);
          }}
        >
          Sign In
        </Button>
        <Button onPress={() => this.props.navigation.navigate('SignUp')}>
          Create Account
        </Button>
      </Fragment>
    );
  }
}

const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red',
  },
};

const mapStateToProps = state => {
  return { auth: state.auth };
};

// const mapDispatchToProps = () => {
//   return { login, autoLogin };
// };

export default connect(
  mapStateToProps,
  { login, authError, loading, autoLogin }
)(LoginScreen);
