import React, { Component } from 'react';
import { decorator, transformer } from '../../utils/pacomo';
// require('./knight.css');
require('./knight.less');

@decorator
export default class Knight extends Component {
  render() {
    return <div className='active'>♘</div>;
  }
}