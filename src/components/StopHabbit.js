import React, { Component } from 'react';
import { Icon } from 'react-native-elements';

export default class StopHabbit extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (<Icon
      name="stop-circle-o"
      type="font-awesome"
      color="#000000"
      iconStyle={{ marginRight: 10, marginLeft: 10 }}
    />);
  }
}
