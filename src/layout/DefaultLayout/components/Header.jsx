import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './scss/header.css';
import {ImCoinDollar, ImUser, ImStack} from "react-icons/im";
import { AiFillCaretDown } from "react-icons/ai";
import { HiLogin } from "react-icons/hi";

import { MdLiveHelp, MdFavorite, MdLogout } from "react-icons/md";
Header.propTypes = {
    
};
const OptionUser = ()=>{
    return(
        <div className='option-user'>
            <span className='item-option-header item-option'>
                        <ImUser className='icon-item-header'/>
                        <p className='title-item-header'>Tài khoản của tôi</p>
            </span>
            <span className='item-option-header item-option'>
                        <ImStack className='icon-item-header'/>
                        <p className='title-item-header'>Thông tin  dịch vụ</p>
            </span>
            <span className='item-option-header item-option'>
                        <MdLogout className='icon-item-header'/>
                        <p className='title-item-header'>Đăng xuất</p>
            </span>
        </div>
    )
}
function Header(props) {
    const[openDrop, setOpenDrop] = useState("")
    const[open, setOpen] = useState(true)
    useEffect(()=>{
        setOpen(props.check)
    },[props.check])
    const hanldeCloseMenu = ()=>{
        if(open){
            props.handleHideBack(false) 
            setOpen(false)

        }else{
            props.handleHideBack(true) 
            setOpen(true)
        }
    }
    const[title,setTitle] = useState(props.title || '')
    const[openOption, setOpenOption] = useState(false)
    const hanldeOpenOption = ()=>{
        openOption ? setOpenOption(false) : setOpenOption(true)
    }
    return (
        <div className='header'>
           
            <div className={props.checkOpen ? 'content-header' : 'content-header pl'} >
                <p className='title titleml'>Tổng quan</p>
                <div className="right-header">
                    <span className='item-right-header'>
                        <ImCoinDollar className='icon-item-header'/>
                        <p className='title-item-header hide' >Vay vốn kinh doanh</p>
                    </span>
                    <span className='item-right-header'>
                        <MdLiveHelp className='icon-item-header'/>
                        <p className='title-item-header hide'>Trợ giúp</p>
                    </span>
                    <span className='item-right-header'>
                        <MdFavorite className='icon-item-header'/>
                        <p className='title-item-header hide'>Góp ý</p>
                    </span>
                    <span className='item-option-header' style={{position: 'relative'}} onClick = {hanldeOpenOption}>
                        <span style={{display: "flex"}}>
                            <span className='avatar-user '>N</span>
                            <p className='name-user-header'>Nguyễn Ngọc Huy</p>
                            <AiFillCaretDown className='icon-down-header'/>

                        </span>
                        {openOption ? <OptionUser  /> : ""}
                        
                    </span>
                    <span className='item-right-header'>
                        
                    </span>
                </div>
            </div>
        </div>
    );
}

export default Header;