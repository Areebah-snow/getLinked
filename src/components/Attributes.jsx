import React from 'react';

const Attributes = ({title, description}) => {
    return (
        <div>
             <p className='my-5 text-xs'>
                 <span className='text-attriPink font-bold'>{title}</span>
                  {description}
                </p>
        </div>
    )
}



export default Attributes;