import React, {useState,useEffect} from 'react'
import "./Submit.css"
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { useNavigate } from 'react-router-dom';

const Submit = () => {

    const navigate = useNavigate();
    const [countdown, setCountdown] = useState(5);

    useEffect(() => {
        const intervalId = setInterval(() => {
          setCountdown((prevCountdown) => {
            if (prevCountdown === 1) {
              clearInterval(intervalId);
              navigate('/');
              return 0;
            } else {
              return prevCountdown - 1;
            }
          });
        }, 1000);
    
        return () => {
          clearInterval(intervalId);
        };
      }, [navigate]);
  return (
    <div className='submit-container'>
        <div className='submit-header'>
            <span style={{fontSize:'30px'}}>Brunel</span>
        </div>
        <div className='submit-body'>
            <div>
                <CheckCircleIcon color='success' fontSize='large'/>
                </div>
            <div>
                <span style={{color:'green'}}>success submitted</span>
            </div>
            <div>
                <span style={{fontSize:'25px'}}>Congratulations</span>
            </div>
            <div style={{width:'400px'}}>
                <span style={{textAlign:'left'}}>Your request has been successfully submitted to us. We will validate your information and reach out to you shortly with updates</span>
            </div>

        </div>
        <div className='submit-footer'>
            <span>Redirecting you to Homepage in <span style={{fontWeight:'bold'}}> {countdown} seconds</span></span>
        </div>
    </div>
  )
}

export default Submit