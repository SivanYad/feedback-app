import React from 'react';
import Card from './shared/Card';
import PropTypes from 'prop-types';
import { useState } from 'react';

function FeedbackItem({ item }) {

  return (
    <Card className='card' >
      <div className='num-display'>{item.rating}</div>
      <div className='text-dispaly'>{item.text}</div>
      
    </Card>
  );
}

FeedbackItem.prototypes = {
  item: PropTypes.object.isRequired
}

export default FeedbackItem;
