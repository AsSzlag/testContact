import { useState } from 'react';
import './index.css';
import Heading from '../../components/heading';
import Text from '../../components/text';

const Contact = () => {
  //TODO: and types
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phoneNumber: '',
    service: ''
  });

  //TODO: Add validation and error handling
  //TODO: add global variables in CSS + reusuable classes
  //TODO: add tests

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    //TODO: add functionality to submit form
    e.preventDefault();
    console.log('formData', formData);
  };

  return (
    <div className="contact" id="contact">
      <div className='container'>
        <div className="contact__left">
          <Heading level={2}>Contact</Heading>
          <Text>
            Questions or concerns? Just fill out the form below and our support team will get back to you within 24 hours
          </Text>
        </div>
        <div className='contact__form'>
          <div>
            <input type="text" name='firstName' value={formData.firstName} onChange={handleChange} placeholder='First Name' />
            <input type="text" name='lastName' value={formData.lastName} onChange={handleChange} placeholder='Last Name' />
          </div>
          <input type="tel" name='phoneNumber' value={formData.phoneNumber} onChange={handleChange} placeholder='Phone Number' />
          <textarea name='service' value={formData.service} onChange={handleChange} placeholder='What Service are you interested in?'></textarea>
          <button className="btn" type='submit' onClick={handleSubmit}>Submit Now</button>
        </div>
      </div>
    </div>
  )
};

export default Contact;
