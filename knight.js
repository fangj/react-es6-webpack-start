import React, { Component } from 'react';
import { decorator, transformer } from './pacomo';
require('./Knight.less');

@decorator
export default class Knight extends Component {
  render() {
    return <div className='active'>♘</div>;
  }
}