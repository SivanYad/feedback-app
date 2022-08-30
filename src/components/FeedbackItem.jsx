import React from 'react';
import { useContext } from 'react';
import FeedbackContext from '../context/FeedbackContext';
import Card from './shared/Card';
import PropTypes from 'prop-types';
import { FaTimes, FaEdit } from 'react-icons/fa'

function FeedbackItem({ item }) {
  const { deleteFeedback, editFeedback } = useContext(FeedbackContext)
  

  return (
    <Card className='card' >
      <div className='num-display'>{item.rating}</div>
      <button className="close">
        <FaTimes onClick={() => deleteFeedback(item.id)} color='purple' />
      </button>
      <button onClick={() => editFeedback(item)} className="edit">
        <FaEdit color='purple' />
      </button>
      <div className='text-dispaly'>{item.text}</div>
      
    </Card>
  );
}

FeedbackItem.prototypes = {
  item: PropTypes.object.isRequired
}

export default FeedbackItem;
