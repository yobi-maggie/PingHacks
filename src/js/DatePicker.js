import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import moment from 'moment';
import { DatePicker } from 'antd';
const RangePicker = DatePicker.RangePicker;
function range(start, end) {
  const result = [];
  for (let i = start; i < end; i++) {
    result.push(i);
  }
  return result;
}
function disabledDate(current) {
    // console.log()
  return current && current.valueOf() < Date.now() ||  current > new Date(2017, 7, 31) ;
}
ReactDOM.render(
  <div>
    <DatePicker  format="YYYY-MM-DD HH:mm:ss" disabledDate={disabledDate}/>
  </div>,
  document.getElementById('root')
);