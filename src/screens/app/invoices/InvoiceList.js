import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SafeAreaView, Text, FlatList } from 'react-native';
import { Card, CardSection, Button } from '../../../components/common';
import InvoiceBox from '../../../components/InvoiceBox';

class InvoiceList extends Component {
  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        {console.log(this.props.subscription, this.props.invoiceCredits)}
        <FlatList
          data={this.props.invoice.invoices}
          keyExtractor={item => item._id}
          renderItem={({ item }) => InvoiceBox(item)}
        />
        <CardSection>{this.addInvoiceButton()}</CardSection>
      </SafeAreaView>
    );
  }

  addInvoiceButton() {
    const activeSub = new Date().getTime() - this.props.subscription < 0;
    if (activeSub) {
      return <Button>Add Invoice (Sub Active)</Button>;
    } else if (this.props.invoiceCredits > 0) {
      return (
        <Button>{`Add Invoice -- Credits: ${
          this.props.invoiceCredits
        }`}</Button>
      );
    } else {
      return (
        <Button onPress={() => this.props.navigation.navigate('Billing')}>
          Get Invoice Credits
        </Button>
      );
    }
  }
}

const mapStateToProps = state => {
  const { subscription, invoiceCredits } = state.auth.admin;
  return {
    invoice: state.invoice,
    subscription,
    invoiceCredits,
  };
};

export default connect(mapStateToProps)(InvoiceList);
