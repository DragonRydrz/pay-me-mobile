import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SafeAreaView, Text } from 'react-native';
import { Card, CardSection, Button, Input } from '../../components/common/';
import { login, autoLogin } from '../../actions/auth';

class LoginScreen extends Component {
  state = {
    // TODO: Delete initial credentials.  Used for quick login access in development.
    username: 'DragonRydrz@me.com',
    password: '123456',
  };

  render() {
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
          <CardSection>
            <Button
              onPress={() =>
                this.props.login(this.state, this.props.navigation.navigate)
              }
            >
              Sign In
            </Button>
            <Button onPress={() => this.props.navigation.navigate('SignUp')}>
              Create Account
            </Button>
          </CardSection>
        </Card>
      </SafeAreaView>
    );
  }
}

const mapStateToProps = state => {
  return { state: state };
};

// const mapDispatchToProps = () => {
//   return { login, autoLogin };
// };

export default connect(
  mapStateToProps,
  { login }
)(LoginScreen);
