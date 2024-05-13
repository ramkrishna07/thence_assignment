import React from 'react'
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
const Catalog = () => {
  return (
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
  )
}

export default Catalog