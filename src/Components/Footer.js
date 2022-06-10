import React from 'react'
import {FooterBack, FooterSection, ImagePlus } from '../styles/styles'
import {AiFillHome, AiOutlineSearch} from 'react-icons/ai'
import {IoMdNotifications} from 'react-icons/io'

const FooterDiv= () => {
  return (
    <FooterSection>
          <ImagePlus src='https://res.cloudinary.com/dg29vcpk7/image/upload/v1654811413/FindyApp/Ellipse-F_lpfpw0.png' alt='plus'/>  
    <FooterBack>
        <AiFillHome/>
        <AiOutlineSearch/>
        <IoMdNotifications/>
        <img style={{'width':'30px'}} src='https://res.cloudinary.com/dg29vcpk7/image/upload/v1654812124/FindyApp/Ellipse_1_lu66jq.png' alt='profileFoot'/>
    </FooterBack>
        
    </FooterSection>
   
  )
}

export default FooterDiv