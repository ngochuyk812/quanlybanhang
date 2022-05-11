import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './scss/menu.css'
import { HiLogin } from "react-icons/hi";
import { ImHome } from "react-icons/im";
import { FaClipboardList, FaChevronDown, FaShippingFast, FaMoneyCheck } from "react-icons/fa";
import { BsBoxSeam, BsPersonCircle, BsFileEarmarkBarGraph } from "react-icons/bs";
import { AiOutlineDoubleRight } from "react-icons/ai";
import useWindowDimensions from './getWidth'
Menu.propTypes = {
    
};

function Menu(props) {
    const arrListMenu = [
        {
            icon: ImHome,
            name: "Tổng quan",
            item: null
        },
        {
            icon: FaClipboardList,
            name: "Đơn hàng",
            item: ["Tạo đơn và giao hàng", "Danh sách đơn hàng", "Khách trả hàng"]
        },
        {
            icon: FaShippingFast,
            name: "Vận chuyển",
            item: ['Tổng quan', 'Quản lý giao hàng', 'Đối soát', 'Đối tác vận chuyển', 'Cấu hình']
        },
        {
            icon: FaMoneyCheck,
            name: "Sổ quỹ",
            item: ['Phiếu thu', "Phiếu chi"]
        },
        {
            icon:BsFileEarmarkBarGraph,
            name: "Báo cáo",
            item: ["Báo cáo bán hàng", "Báo cáo nhập hàng", "Báo cáo kho", "Báo cáo tài chính", "Báo cáo khách hàng"]
        },
        {
            icon: BsBoxSeam,
            name: "Sản phẩm",
            item: ['Danh sách sản phẩm', 'Quản lý kho', 'Nhập hàng', 'Kiểm hàng', 'Chuyển hàng', "Nhà cung cấp", 'Điểu chỉnh giá vốn']
        },
        {
            icon: BsPersonCircle,
            name: "Khách hàng",
            item: ['Danh sách khách hàng', 'Nhóm khách hàng']
        },
        
    ]
    const[openDrop, setOpenDrop] = useState("")
    const[open, setOpen] = useState(true)
   
    const [rsp,setRsp] = useState(false)
   
    const { height, width } = useWindowDimensions();

    const hanldeCloseMenu = ()=>{
        console.log("CHayyyy");
        if(open){
            props.handleHideBack(false)
            setOpen(false)
        }else{
            props.handleHideBack(true)
            setOpen(true)
        }
   
    }
    
    const hanldeOpen = ()=>{
        console.log("Chay");
        if(open){
            props.handleHideBack(false)
            setOpen(false)
        }else{
            props.handleHideBack(true)
            setOpen(true)
        }
    }

     const funcHanlde = ()=>{
        if(width < 1000 && rsp){
            hanldeCloseMenu()
        }
     } 

     
    
      
      useEffect(() => {
            funcHanlde()
            setRsp(true)
      }, [width])
    useEffect(()=>{
        setOpen(props.checkOpen )
      
    },[props.checkOpen ])
    
    const handleDrop = (name)=>{
        if(name === openDrop){
            setOpenDrop("")
        }else{
            setOpenDrop(name)
        }
    }
    return (
        
        <div className={!props.checkOpen ? 'menu hide' : 'menu left'} >
            <div className="open-menu" onClick={hanldeOpen} style={!props.checkOpen?{display:'none'}:{}}>
                <span>
                    <AiOutlineDoubleRight className='icon-open'/>
                </span>
            </div>
            <div className="header-menu">
                <div style={{display: "flex"}}>
                    <img src="http://react-material.fusetheme.com/assets/images/logos/fuse.svg" alt="" className='logo' />
                    <p>FUSE</p>
                </div>
                <span className="close-menu" onClick={hanldeCloseMenu}>
                    <HiLogin className='icon-close-header'/>
                    
                </span>
            </div>
            <div className="profile-menu">
                <span>
                    <div className='name-user '>
                    Nguyễn Ngọc Huy
                    </div>
                    <div className='email-user '>
                        ngohuyk80169@gmail.com
                    </div>
                </span>
                <div >
                    <img className="avatar-user-menu" src="http://react-material.fusetheme.com/assets/images/avatars/Velazquez.jpg" alt="" />
                </div>
            </div>

            <div className="menu-main">
                <h6>APPLICATIONS</h6>
                <div className='list-item'>
                    {arrListMenu.map((tmp, index) =>{
                        const Icon = tmp.icon
                        const item = tmp.item 
                        if(item === null){
                            return(
                               
                             <div key={index}>
                                 <div className="item-menu active">
                                 
                                  <Icon className='icon-item-menu'/>
     
                                      <p>{tmp.name}</p>
                                  </div>
                              </div>
                             
                            
                             )
                        }else{
                            return (
                                <div key = {index}>
                                <div className="item-menu" onClick={()=>handleDrop(tmp.name)}>
                                    <Icon className='icon-item-menu'/>
                                    <p>{tmp.name}</p>
                                    <FaChevronDown className='icon-item-menu' style={{fontSize: "10px", position: "absolute", right: "0", top: "0", bottom: "0"} }/>
                                </div>
                                    <div className={openDrop === tmp.name ? "main-drop show" : "main-drop"}>
                                        {item.map(tmp2 =>{
                                            return(
                                                <div className="item-menu" key={tmp2}>
                                                    <FaClipboardList className='icon-item-menu' style={{opacity:0}}/>
                                                    <p>{tmp2}</p>
                                                </div>
                                            )
                                        })}
                                        
                                </div>
                            </div>
                            )
                        }
                        
                    })}

                    {/* <div className="item-menu active">
                        <ImHome className='icon-item-menu'/>
                        <p>Tổng quan</p>
                    </div>
                    <div className="item-menu " onClick={handleDonHang}>
                        <FaClipboardList className='icon-item-menu'/>
                        <p>Đơn hàng</p>
                        <FaChevronDown className='icon-item-menu' style={{fontSize: "10px", position: "absolute", right: "0", top: "0", bottom: "0"} }/>
                    </div>
                        <div className={openDropDonHang ? "main-drop show" : "main-drop"}>
                            <div className="item-menu ">
                                <FaClipboardList className='icon-item-menu' style={{opacity:0}}/>
                                <p>Tạo đơn và giao hàng</p>
                            </div>
                            <div className="item-menu ">
                                <FaClipboardList className='icon-item-menu' style={{opacity:0}}/>
                                <p>Danh sách đơn hàng</p>
                            </div>
                            <div className="item-menu ">
                                <FaClipboardList className='icon-item-menu' style={{opacity:0}}/>
                                <p>Khách trả hàng</p>
                            </div>
                        </div>
                    <div className="item-menu ">
                        <FaShippingFast className='icon-item-menu'/>
                        <p>Vận Chuyển</p>
                        
                    </div>
                    <div className="item-menu ">
                        <ImHome className='icon-item-menu'/>
                        <p>Tổng Quan</p>
                    </div>
                    <div className="item-menu ">
                        <ImHome className='icon-item-menu'/>
                        <p>Tổng Quan</p>
                    </div> */}
                </div>
            </div>
        </div>
    );
}

export default Menu;