import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './eventDisplay.css'; // Create a CSS file for EventDisplay component styles

function EventDisplay() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    async function fetchEvents() {
      try {
        const response = await axios.get('http://localhost:8000/events');
        setEvents(response.data); // Set events retrieved from the backend
      } catch (error) {
        console.error('Error fetching events:', error);
      }
    }

    fetchEvents();
  }, []);

  return (
    <div className="event-display">
      <h2>Events Available:</h2>
      <div className="events-container">
        {events.map((event) => (
          <div className="event-card" key={event._id}>
            <h3>{event.eventName}</h3>
            <p>Type: {event.eventType}</p>
            <p>Date: {new Date(event.eventDate).toLocaleDateString()}</p>
            <p>Time: {event.eventTime}</p>
            <p>Address: {event.eventAddress}</p>
            <p>Number of People: {event.numberOfPeople}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default EventDisplay;
