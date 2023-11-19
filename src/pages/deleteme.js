import { useNavigate } from 'react-router-dom';
import './style.css';
import React from 'react';
import axios from 'axios';

function Planner() {
  const navigate = useNavigate();

  const onSubmit = async (event) => {
    event.preventDefault();

    const form = event.target;
    const formData = new FormData(form);

    try {
      const response = await axios.post('http://localhost:8000/planner-input', {
        eventName: formData.get('eventName'),
        eventType: formData.get('eventType'),
        eventDate: formData.get('eventDate'),
        eventTime: formData.get('eventTime'),
        eventAddress: formData.get('eventAddress'),
        numberOfPeople: formData.get('numberOfPeople')
      });

      console.log('Event data submitted:', response.data);
      navigate('/home');
    } catch (error) {
      console.error('Error submitting event data:', error);
    }
  };

  return (
    <div>
      <div className="wrapper">
        <form onSubmit={onSubmit}>
          {/* Your form elements */}
        </form>
      </div>
    </div>
  );
}

export default Planner;
