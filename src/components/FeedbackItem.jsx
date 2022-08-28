import React from 'react';
import PropTypes from 'prop-types';
import { useState } from 'react';

function FeedbackItem({ item }) {

  return (
    <div className='card'>
      <div className='num-display'>{item.rating}</div>
      <div className='text-dispaly'>{item.text}</div>
      
    </div>
  );
}

export default FeedbackItem;
