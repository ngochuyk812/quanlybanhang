import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './scss/mess.css';
import { AiFillMessage } from "react-icons/ai";

Mess.propTypes = {
    
};

function Mess(props) {
   
    return (
        <div className='mess'>
            <div className="header-mess">
                <AiFillMessage className='icon-mess'/>
            </div>
        </div>
    );
}

export default Mess;