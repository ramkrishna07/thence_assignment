import React, { useState } from "react";
import "./Auth.css";
import CloseIcon from '@mui/icons-material/Close';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Auth = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [emailError, setEmailError] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
    checkFormValidity(event.target.value, email);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    if(!isValidEmail(event.target.value)){
      setEmailError('Please enter a valid email address');
    }else{
      setEmailError('');
    }
    checkFormValidity(name, event.target.value);
  };

  const checkFormValidity = (name, email) => {
    if (name.trim() !== '' && email.trim() !== '') {
      setIsButtonDisabled(false);
    } else {
      setIsButtonDisabled(true);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!isValidEmail(email)) {
      setEmailError('Please enter a valid email address');
    } else {
      setEmailError('');
      navigate('/submit');
      // Perform form submission logic here
    }
  };

  const isValidEmail = (email) => {
    // Basic email validation
    const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    return regex.test(email);
  };

  return (
    <div className='auth-container'>
        <div className='auth-header'>
            <div className='auth-header-brand'>
                <span style={{fontSize:'30px',fontFamily:'Emblema One'}}>Brunel</span>
            </div>
            <div className='auth-header-cross-btn'>
                <span>
                    <Link to="/"><CloseIcon/></Link>
                </span> 
            </div>
        </div>
        <div className='auth-body'> 
            <span style={{fontSize:'20px',color:'#00d676',fontFamily:'Pacifico'}}>Registration Form</span>
            <span>Start your success</span>
            <span>journey here!</span>
            {/* <div className='auth-form'> */}
            <form onSubmit={handleSubmit} className='auth-form'>

        <input
          type="text"
          id="name"
          placeholder="Enter your name"
          autoComplete="off"
          value={name}
          onChange={handleNameChange}
        />
        
        <input
          type="email"
          id="email"
          placeholder="Enter your email"
          autoComplete="off"
          value={email}
          onChange={handleEmailChange}
        />
        {emailError && <p style={{ color: 'red' }}>{emailError}</p>}
        <button type="submit" disabled={isButtonDisabled} style={{ backgroundColor: isButtonDisabled ? '#ccc' : 'black', cursor: isButtonDisabled ? 'not-allowed' : 'pointer' }}>
        Submit
      </button>
      </form>
        </div>
    </div>
  )
}

export default Auth