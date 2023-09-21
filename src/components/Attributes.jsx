import React from 'react';

const Attributes = ({title, description}) => {
    return (
        <div>
             <p className='my-5'>
                 <span className='text-pink-500 font-bold'>{title}</span>
                  {description}
                </p>
        </div>
    )
}



export default Attributes;