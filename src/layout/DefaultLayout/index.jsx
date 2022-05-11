import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Header from './components/Header';
import Mess from './components/Mess';
import Menu from './components/Menu'
import './components/scss/styleLayout.css'
IndexLayout.propTypes = {
    
};

function IndexLayout(props) {
   
    const[checkHideBack, setCheckHideBack]= useState(true)
    const[checkOpen, setCheckOpen]= useState(true)
    const handleHideBack2 = (rs)=>{
        setCheckHideBack(rs)
        setCheckOpen(rs)
    }
    const handleHideBack3 = (rs)=>{
        setCheckHideBack(rs)
        setCheckOpen(rs)

    }
    useEffect(()=>{
        setCheckOpen(false)
    },[])
    
    return (
        <div className={!checkOpen ? "wrapper pl" : "wrapper"}>
            <Header  handleHideBack = {handleHideBack3} check = {checkHideBack} checkOpen = {checkOpen} />
            <div className="layout-content" >
                    <Menu handleHideBack = {handleHideBack2} checkOpen = {checkOpen}></Menu>
                <div className="content" >
                    {props.children}
                </div>
            </div>
        </div>
    );
}

export default IndexLayout;