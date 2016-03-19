import React, { Component } from 'react';
import { withPackageName } from 'react-pacomo'
const { decorator, transformer } = withPackageName('NewApp')

@decorator
export default class Knight extends Component {
  render() {
    return <span className='active'>♘</span>;
  }
}