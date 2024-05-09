import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import img from "../../img/bg.png";
import Accordion from 'react-bootstrap/Accordion';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from '../Carousel/Carousel';
import {slides} from '../../data/carouselData';

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
            <span style={{color:'green',paddingBottom:'5px',fontSize:'20px'}}>Success Stories</span>
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
                                logo
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
                <div style={{display:'flex',width:'100%',height:'50%',justifyContent:'center'}}>
                   <Carousel data={slides}/>
                </div>
            
               <div className='explore'>
                    <div className='explore-btn'>
                        Explore More
                    </div>
               </div>
            </div>

        </div>
        <div className='faq'>
            <div className='faq-title'>
                <span>whats's on your mind</span>
                <span style={{fontSize:'40px'}}>Ask Questions</span>
            </div>
            <div className='qsn-container'>
            <Accordion defaultActiveKey="0" flush style={{backgroundColor:'#aab29a'}}>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Accordion Item #1</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Accordion Item #2</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>Accordion Item #2</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header>Accordion Item #2</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="4">
        <Accordion.Header>Accordion Item #2</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="5">
        <Accordion.Header>Accordion Item #2</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
            </div>
        </div>
        <div className='footer'>
            <div className='terms'>
                <span>Talup 2023. All rights reserved</span>
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