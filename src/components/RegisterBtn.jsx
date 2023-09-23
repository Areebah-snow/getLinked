import React from 'react';

const RegisterBtn = ({title}) => {
    return <div>
          <a
              className="registerBtn bg-gradient-to-r from-pink-500 to-purple-500 px-8 py-2 border-transparent rounded"
              href="/"
            >{title}</a>
    </div>;
}



export default RegisterBtn;