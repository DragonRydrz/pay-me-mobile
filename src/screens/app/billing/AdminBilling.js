import React, { Component } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  Picker,
  Modal,
  Button,
} from 'react-native';
import { connect } from 'react-redux';

class AdminBilling extends Component {
  state = {
    showTypePicker: false,
    showQuantityPicker: false,
    type: {
      label: '$20/30Days/Unlimited',
      value: 'sub',
    },
    quantity: 1,
  };

  render() {
    return (
      <SafeAreaView
        style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
      >
        <TouchableOpacity
          onPress={() => this.setState({ showTypePicker: true })}
        >
          <Text>{this.state.type.label}</Text>
        </TouchableOpacity>
        {this.state.type.value === 'credit' ? (
          <TouchableOpacity
            onPress={() => this.setState({ showQuantityPicker: true })}
          >
            <Text>{this.state.quantity}</Text>
          </TouchableOpacity>
        ) : null}
        {this.state.showTypePicker
          ? this.typePicker()
          : this.state.showQuantityPicker
            ? this.quantityPicker()
            : null}
      </SafeAreaView>
    );
  }

  types() {
    return [
      { label: '$20 / 30Days / Unlimited', value: 'sub' },
      { label: '$1.99 per Invoice', value: 'credit' },
    ];
  }

  typePicker() {
    return (
      <Modal>
        {/* <TouchableOpacity
          onPress={() => this.setState({ showTypePicker: false })}
        > */}
        <SafeAreaView
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
          }}
        >
          <View backgroundColor="#ffffff">
            <Picker
              style={{ width: 250 }}
              selectedValue={this.state.type.value}
              onValueChange={newType => {
                console.log(this.state.type);
                const { label } = this.types().filter(
                  x => x.value === newType
                )[0];
                this.setState({ type: { value: newType, label } });
              }}
            >
              {this.types().map(type => {
                return (
                  <Picker.Item
                    key={type.value}
                    label={type.label}
                    value={type.value}
                  />
                );
              })}
            </Picker>
            <Button
              onPress={() => this.setState({ showTypePicker: false })}
              title="SELECT"
            />
          </View>
        </SafeAreaView>
        {/* </TouchableOpacity> */}
      </Modal>
    );
  }

  quantities() {
    return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  }

  quantityPicker() {
    return (
      <Modal>
        <SafeAreaView
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
          }}
        >
          <View backgroundColor="#ffffff">
            <Picker
              style={{ width: 250 }}
              selectedValue={this.state.quantity}
              onValueChange={quantity => this.setState({ quantity })}
            >
              {this.quantities().map(count => {
                return (
                  <Picker.Item
                    key={count}
                    label={count.toString()}
                    value={count}
                  />
                );
              })}
            </Picker>
            <Button
              onPress={() => this.setState({ showQuantityPicker: false })}
              title="SELECT"
            />
          </View>
        </SafeAreaView>
      </Modal>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.auth.admin,
  };
};

export default connect(mapStateToProps)(AdminBilling);
