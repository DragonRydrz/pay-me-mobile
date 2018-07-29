import React, { Component } from 'react';
import { SafeAreaView, Text } from 'react-native';
import { Card, CardSection, Button, Input } from '../../components/common';

class SignUpScreen extends Component {
  state = {
    username: '',
    password: '',
    confirmPassword: '',
    fullName: '',
    companyName: '',
    phone: '',
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
              onChange={username => this.setState({ username })}
              keyboardType="email-address"
            />
          </CardSection>
          <CardSection>
            <Input
              label={'Password'}
              placeholder={'password'}
              value={this.state.password}
              onChange={password => this.setState({ password })}
              secureTextEntry
            />
          </CardSection>
          <CardSection>
            <Input
              label={'Confirm'}
              placeholder={'password'}
              value={this.state.confirmPassword}
              onChange={confirmPassword => this.setState({ confirmPassword })}
              secureTextEntry
            />
          </CardSection>
          <CardSection>
            <Input
              label={'Full Name'}
              placeholder={'John Doe'}
              value={this.state.fullName}
              onChange={fullName => this.setState({ fullName })}
              secureTextEntry
            />
          </CardSection>
          <CardSection>
            <Input
              label={'Company'}
              placeholder={'name'}
              value={this.state.companyName}
              onChange={companyName => this.setState({ companyName })}
              secureTextEntry
            />
          </CardSection>
          <CardSection>
            <Input
              label={'Phone'}
              keyboardType={'number-pad'}
              placeholder={'(745) 555 - 1234'}
              value={this.state.username}
              onChange={password => this.setState({ password })}
              secureTextEntry
            />
          </CardSection>
          <CardSection>
            <Button>Create Account</Button>
            <Button onPress={() => this.props.navigation.navigate('Login')}>
              Log In
            </Button>
          </CardSection>
        </Card>
      </SafeAreaView>
    );
  }
}

export default SignUpScreen;
