import React from 'react';
import criteriaPng from '../../images/criteria.svg'
import Attributes from '../Attributes';

const Criteria = () => {
    return (
        <div className="intro  border-b-2 border-gray-800">
        <div className="main-container flex flex-col  md:flex-row  items-center justify-between px-20 py-20">
            <div className="left relative">
                <img className='picture' src={criteriaPng} alt="" />
               
            </div>

            <div className="right">
                <h1 className='font-bold'>Judging Criteria <br></br>
                    <span className='text-purplePink'>Key attributes</span>
                </h1>
                 <Attributes
                 title='Innovation and Creativity: '
                 description='Evaluate the uniqueness and creativity of the
                 solution. Consider whether it addresses a real-world problem in a novel 
                 way or introduces innovative features.'
                 />
                  <Attributes
                 title='Functionality: '
                 description='Evaluate the uniqueness and creativity of the
                 solution. Consider whether it addresses a real-world problem in a novel 
                 way or introduces innovative features.'
                 />
                  <Attributes
                 title='Innovation and Creativity: '
                 description='Evaluate the uniqueness and creativity of the
                 solution. Consider whether it addresses a real-world problem in a novel 
                 way or introduces innovative features.'
                 />
                  <Attributes
                 title='Innovation and Creativity: '
                 description='Evaluate the uniqueness and creativity of the
                 solution. Consider whether it addresses a real-world problem in a novel 
                 way or introduces innovative features.'
                 />
                  <Attributes
                 title='Innovation and Creativity: '
                 description='Evaluate the uniqueness and creativity of the
                 solution. Consider whether it addresses a real-world problem in a novel 
                 way or introduces innovative features.'
                 />
                
            </div>
        </div>
    </div>
    )
}


export default Criteria;