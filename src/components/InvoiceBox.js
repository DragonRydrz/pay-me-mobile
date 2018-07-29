import React, { Component } from 'react';
import { SafeAreaView, Text } from 'react-native';
import { Card, CardSection, Button } from './common';

export default invoice => {
  return (
    <SafeAreaView>
      <Card>
        <CardSection>
          <Text>{`Number:  \t${invoice.number || 'N/A'}`}</Text>
        </CardSection>
        <CardSection>
          <Text>{`Company: \t${invoice.companyName || 'N/A'}`}</Text>
        </CardSection>
        <CardSection>
          <Text>{`Contact: \t${invoice.fullName || 'N/A'}`}</Text>
        </CardSection>
        <CardSection>
          <Text>{`Total: \t\t${invoice.totalAmount || 'N/A'}`}</Text>
        </CardSection>
      </Card>
    </SafeAreaView>
  );
};
