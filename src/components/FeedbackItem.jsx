import React from 'react';
import Card from './shared/Card';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { FaTimes } from 'react-icons/fa'

function FeedbackItem({ item, handleDelete }) {

  

  return (
    <Card className='card' >
      <div className='num-display'>{item.rating}</div>
      <button className="close">
        <FaTimes onClick={() => handleDelete(item.id)} color='purple' />
      </button>
      <div className='text-dispaly'>{item.text}</div>
      
    </Card>
  );
}

FeedbackItem.prototypes = {
  item: PropTypes.object.isRequired
}

export default FeedbackItem;
