import React from 'react';
import criteriaPng from '../../images/criteria.svg'
import Attributes from '../Attributes';
import RegisterBtn from '../RegisterBtn';
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
                 description='Assess how well the solution works. Does it perform its 
                 intended functions effectively and without major issues? Judges would
                 consider the completeness and robustness of the solution.'
                 />
                  <Attributes
                 title='Impact and Relevance: '
                 description='Determine the potential impact of the solution 
                 in the real world. Does it address a significant problem, and is it relevant 
                 to the target audience? Judges would assess the potential social, 
                 economic, or environmental benefits.'
                 />
                  <Attributes
                 title='Technical Complexity: '
                 description='Evaluate the technical sophistication of the solution. 
                 Judges would consider the complexity of the code, the use of advanced 
                 technologies or algorithms, and the scalability of the solution.'
                 />
                  <Attributes
                 title='Adherence to Hackathon Rules: '
                 description='Judges will Ensure that the team adhered 
                 to the rules and guidelines of the hackathon, including deadlines, use of 
                 specific technologies or APIs, and any other competition-specific requirements.'
                 />
                
                <RegisterBtn title='Read More'/>
            </div>
        </div>
    </div>
    )
}


export default Criteria;