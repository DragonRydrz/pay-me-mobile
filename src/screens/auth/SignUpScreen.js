import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { SafeAreaView, Text } from 'react-native';
import { loading, authError, register } from '../../actions/auth';
import {
  Card,
  CardSection,
  Button,
  Input,
  Header,
  Spinner,
} from '../../components/common';

class SignUpScreen extends Component {
  state = {
    username: 'reactnative@test.com',
    password: '123456',
    confirmPassword: '123456',
    fullName: 'React Native',
    companyName: '',
    phone: '9736709659',
  };

  render() {
    const { errorTextStyle } = styles;
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <Card>
          <Header headerText="Create an Account" />
        </Card>
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
            <Input
              label={'Confirm'}
              placeholder={'password'}
              value={this.state.confirmPassword}
              onChangeText={confirmPassword =>
                this.setState({ confirmPassword })
              }
              secureTextEntry
            />
          </CardSection>
          <CardSection>
            <Input
              label={'Full Name'}
              placeholder={'John Doe'}
              value={this.state.fullName}
              onChangeText={fullName => this.setState({ fullName })}
            />
          </CardSection>
          <CardSection>
            <Input
              label={'Company'}
              placeholder={'name'}
              value={this.state.companyName}
              onChangeText={companyName => this.setState({ companyName })}
            />
          </CardSection>
          <CardSection>
            <Input
              label={'Phone'}
              keyboardType={'number-pad'}
              placeholder={'(745) 555 - 1234'}
              value={this.state.phone}
              onChangeText={phone => this.setState({ phone })}
            />
          </CardSection>
          {this.props.message ? (
            <Text style={errorTextStyle}>{this.props.message}</Text>
          ) : null}
          <CardSection>{this.renderButtons()}</CardSection>
        </Card>
      </SafeAreaView>
    );
  }
  renderButtons = () => {
    return this.props.isLoading ? (
      <Spinner />
    ) : (
      <Fragment>
        <Button
          onPress={() => {
            this.props.loading(true);
            this.props.authError();
            this.verifyFields();
            // this.props.loading(true);
          }}
        >
          Create Account
        </Button>
        <Button onPress={() => this.props.navigation.navigate('Login')}>
          Log In
        </Button>
      </Fragment>
    );
  };
  verifyFields = () => {
    console.log(this.state.username);
    const {
      username,
      password,
      confirmPassword,
      fullName,
      companyName,
      phone,
    } = this.state;

    if (!username.includes('@') || !username.includes('.')) {
      this.props.authError('Username must be a Valid E-Mail Address');
      return this.props.loading(false);
    }
    if (password.length < 6) {
      this.props.authError('Password must be at least 6 characters');
      return this.props.loading(false);
    }
    if (password != confirmPassword) {
      this.props.authError('Passwords do not match.');
      return this.props.loading(false);
    }
    if (!fullName.includes(' ') || fullName.length < 3) {
      this.props.authError('Please enter First and Last name.');
      return this.props.loading(false);
    }
    if (phone.toString().length < 10) {
      this.props.authError('Phone should be 10 digits including area code.');
      return this.props.loading(false);
    }
    const user = { username, password, fullName, companyName, phone };
    this.props.register(user, this.props.navigation.navigate);
  };
}

const styles = {
  errorTextStyle: {
    padding: 5,
    textAlign: 'center',
    fontSize: 20,
    alignSelf: 'center',
    color: 'red',
  },
};

const mapStateToProps = state => {
  const { message, isLoading } = state.auth;
  return {
    message,
    isLoading,
  };
};

export default connect(
  mapStateToProps,
  { register, authError, loading }
)(SignUpScreen);
