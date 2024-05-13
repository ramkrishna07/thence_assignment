import React from 'react';
import './Home.css';

import  Accordion from "../../components/Accordion/Accordion";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from '../../components/Carousel/Carousel';
import {slides} from '../../data/carouselData';
import {items} from '../../data/carouselData';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import Catalog from '../../components/Catalog/Catalog';

const Home = () => {

    
  return (
    <div className='main-container'>
        <Header/>
        <div className='campaign'>
            <span style={{color:'#00d676',paddingBottom:'5px',fontSize:'20px',fontFamily:'Pacifico'}}>Success Stories</span>
            <span>Every success journey</span>
            <span>we've encountered</span>
        </div>
        <div className='body'>
            <Catalog/>
            
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
                <span style={{fontFamily:'Pacifico'}}>whats's on your mind</span>
                <span style={{fontSize:'35px'}}>Ask Questions</span>
            </div>
            <div className='qsn-container'>

            <Accordion items={items} />
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default Home