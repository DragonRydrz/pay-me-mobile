import React, { Component } from 'react';
import { SafeAreaView, Text } from 'react-native';
import { connect } from 'react-redux';
import ConnectStripe from './ConnectStripe';
import AdminBilling from './AdminBilling';

class BillingScreen extends Component {
  render() {
    console.log(this.props.user.stripe);
    return this.props.user.stripe.code ? (
      <AdminBilling />
    ) : (
      <ConnectStripe user={this.props.user} />
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.auth.admin,
  };
};

export default connect(mapStateToProps)(BillingScreen);
