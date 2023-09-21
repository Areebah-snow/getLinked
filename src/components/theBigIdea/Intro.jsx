import React from 'react';
import TBI from '../../images/the big idea 1.svg'
import './intro.css'

const Intro = () => {
    return (
        <div className="intro  border-b-2 border-gray-800">
            <div className="main-container flex flex-col md:flex-row  items-center justify-between px-20 py-20">
                <div className="left relative">
                    <img src={TBI} alt="" />
                    <h2 className='w-16 text-center absolute font-bold top-1/2 left-52'>The Big Idea!</h2>
                </div>

                <div className="right">
                    <h1 className='font-bold'>Introduction to getlinked <br></br>
                        <span className='text-purplePink'>tech Hackathon 1.0</span>
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
    )
}



export default Intro;