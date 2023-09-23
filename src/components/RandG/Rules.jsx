import React from 'react';
import picture from '../../images/RandG.svg'
import './rules.css'


const Rules = () => {
    return (
        
        <div className="intro  border-b-2 border-gray-800">
        <div className="main-container flex flex-col  md:flex-row md:flex-row-reverse items-center justify-between px-20 py-20">
            <div className="left relative">
                <img className='picture' src={picture} alt="" />
               
            </div>

            <div className="right">
                <h1 className='font-bold'>Rules and <br></br>
                    <span className='text-purplePink'>Guidelines</span>
                </h1>
                <p>
                Our tech hackathon is a melting pot of visionaries, and its purpose is as
                clear as day: to shape the future. Whether you're a coding genius, a 
                design maverick, or a concept wizard, you'll have the chance to transform 
                your ideas into reality. Solving real-world problems, pushing the boundaries
                of technology, and creating solutions that can change the world,
                that's what we're all about!
                </p>
            </div>
        </div>
    </div>
    );
}


export default Rules;