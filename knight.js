import React, { Component } from 'react';
import { decorator, transformer } from './pacomo';

@decorator
export default class Knight extends Component {
  render() {
    return <span className='active'>♘</span>;
  }
}