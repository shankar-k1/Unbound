
//TESTING PURPOSE
import React, { useState } from 'react';
import "./contact.css";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useNavigate } from 'react-router-dom';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess('');

    // Simulate an API call
    try {
      // Replace this with your API endpoint and logic
      await new Promise((resolve) => setTimeout(resolve, 2000));
      
      // Clear the form
      setFormData({ name: '', email: '', message: '' });
      setSuccess('Your message has been sent successfully!');
    } catch (err) {
      setError('There was an error sending your message. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="contact-page">
      <h1>Contact Us</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <TextField 
            label="Your Name" 
            name="name" 
            value={formData.name}
            onChange={handleChange}
            required 
            variant="outlined" 
          />
        </div>
        <br />
        <div>
          <TextField 
            label="Email" 
            name="email" 
            type="email"
            value={formData.email}
            onChange={handleChange}
            required 
            variant="outlined" 
          />
        </div>
        <br />
        <div>
          <TextField 
            label="Your Message" 
            name="message" 
            multiline
            rows={4}
            value={formData.message}
            onChange={handleChange}
            required 
            variant="outlined" 
          />
        </div>
        <br />
        <div>
          <Button 
            variant="contained" 
            type="submit" 
            disabled={loading}
          >
            {loading ? 'Sending...' : 'Send a Message'}
          </Button>
        </div>
      </form>

      {error && <p className="error-message">{error}</p>}
      {success && <p className="success-message">{success}</p>}

      <br />
      <div className="Details-btn">
        <Button variant="contained" onClick={() => navigate("/")}>Back</Button>
      </div>
    </div>
  );
}