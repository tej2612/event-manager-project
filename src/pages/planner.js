import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './styless.css';

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
        numberOfPeople: formData.get('numberOfPeople'),
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
        <form action={onSubmit}>
          <h1>Planning your event</h1>
          <div className="input-box">
            <input
              type="text"
              id="eventName"
              name="eventName"
              placeholder="Name of Event"
              required
            /><br /><br />
          </div>

          <div className="input-box">
            <select id="eventType" name="eventType" required>
              <option value="" disabled hidden>Select Type of Event</option>
              <option value="Concert">Concert</option>
              <option value="Marriage">Marriage</option>
              <option value="Standup Comedy">Standup Comedy</option>
            </select><br /><br />
          </div>

          <div className="input-box">
            <input type="date" id="eventDate" name="eventDate" required /><br /><br />
          </div>

          <div className="input-box">
            <input type="time" id="eventTime" name="eventTime" required /><br /><br />
          </div>

          <div className="input-box">
            <input
              type="text"
              id="eventAddress"
              name="eventAddress"
              placeholder="Address"
              required
            /><br /><br />
          </div>

          <div className="input-box">
            <input
              type="number"
              id="numberOfPeople"
              name="numberOfPeople"
              placeholder="Number of People"
              required
            /><br /><br />
          </div>

          <button type="submit" className="btn">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Planner;
