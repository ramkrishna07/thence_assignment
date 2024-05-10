import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import img from "../../img/bg.png";
import  Accordion from "../Accordion/Accordion"
// import Accordion from 'react-bootstrap/Accordion';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from '../Carousel/Carousel';
import {slides} from '../../data/carouselData';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';

const items = [
    {
      header: 'Do you offer freelancer?',
      body: 'Yes, we offer freelancer services for a wide range of projects. Our platform connects you with skilled freelancers across various industries to meet your specific project needs.'
    },
    {
      header: 'Whats the guarantee that I will be satisfied with the hired talent?',
      body: 'We strive to ensure your satisfaction by thoroughly vetting our talent pool and providing transparent reviews and ratings. Additionally, our support team is here to assist you in case of any issues or concerns.'
    },
    {
      header: 'Can I hire multiple talents at once?',
      body: 'Absolutely! You can hire multiple talents simultaneously for different aspects of your project or for multiple projects. Our platform is flexible to accommodate your diverse hiring needs.'
    },
    {
      header: 'Why should I not go to an agency directly?',
      body: 'While agencies offer valuable services, our platform provides you with direct access to a diverse pool of freelancers, often at competitive rates. You have more control over the selection process and can tailor your hiring experience to your specific requirements.'
    },
    {
      header: 'Who can help me pick the right skillset and duration for me?',
      body: 'Our customer support team and talent advisors are here to assist you in selecting the right skillset and determining the appropriate duration for your project. Feel free to reach out to us for personalized guidance and recommendations.'
    }
  ];
const Home = () => {

    
  return (
    <div className='main-container'>
        <div className='header'>
            <div className='header-left'>
                <span>Brunel</span>
            </div>
            <div className='header-right'>
                <Link to="./auth" style={{textDecoration:'none'}}>
                <div className='projects'>
                    Get Projects
                </div>
                </Link>
                <div className='talent'>
                    Onboard Talent
                </div>
            </div>
        </div>
        <div className='campaign'>
            <span style={{color:'#00d676',paddingBottom:'5px',fontSize:'20px'}}>Success Stories</span>
            <span>Every success journey</span>
            <span>we've encountered</span>
        </div>
        <div className='body'>
            <div className='catalog'>
                <div className='img-container'>
                    <div className='box1-container'>
                        <div className='box1'>
                            <div className='box1-part1' style={{fontWeight:'bold',fontSize:'25px'}}>
                                40%
                            </div>
                            <div className='box1-part2'>
                                Achive Reduction in project execution time by optimising team availibility
                            </div>
                        </div>
                    </div>
                    <div className='box2-container'>
            
                        <div className='box2'>
                            <div className='box2-logo'>
                                <RocketLaunchIcon color='primary'/>
                            </div>
                            <div className='box2-content'>
                                <div style={{fontWeight:'bold'}}>
                                    10 Days
                                </div>
                                <div style={{fontSize:'12px'}}>
                                    Staff Deployment
                                </div>
                            </div>
                        </div>
                        <div className='box3'>
                            <div>
                                <span style={{fontSize:'25px'}}>$0.5</span> MILLION 
                            </div>
                            <div>
                                Reduced client expenses by saving on hiring and employee costs
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='carousel-container'>
                <div className='carousel-content'>
                   <Carousel data={slides}/>
                </div>
            
               <div className='explore'>
                    <div className='explore-btn'>
                        Explore More <ArrowForwardIcon fontSize='small'/>
                    </div>
               </div>
            </div>

        </div>
        <div className='faq'>
            <div className='faq-title'>
                <span>whats's on your mind</span>
                <span style={{fontSize:'35px'}}>Ask Questions</span>
            </div>
            <div className='qsn-container'>

            <Accordion items={items} />
            </div>
        </div>
        <div className='footer'>
            <div className='terms'>
                <span>&copy;Talup 2023. All rights reserved</span>
            </div>
            <div className='list-container'>
                <li>
                    Terms & Conditions
                </li>
                <li>
                    Privacy Policy
                </li>
            </div>
        </div>
    </div>
  )
}

export default Home