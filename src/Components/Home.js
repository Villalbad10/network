import React, { useEffect, useState } from 'react'
import { FiHeart } from 'react-icons/fi'
import { IoChatbubblesOutline, IoPaperPlaneOutline } from 'react-icons/io5'
import { Card, HeadDiv, ImageAvatar, ImageAvatar2, NameDiv, SliderDiv, UlList } from '../styles/styles'
import { BsFillBookmarkFill, BsChat } from 'react-icons/bs'
import FooterDiv from './Footer'
import getData from '../helpers/getData'
import { Link } from 'react-router-dom'


const Home = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        getData()
            .then(res => setData(res))
    }, [])

    return (

        <div style={{ 'overflowX': 'hidden', 'background': '##F8F8F8' }}>
            <HeadDiv>
                <img src='https://res.cloudinary.com/dg29vcpk7/image/upload/v1654805779/FindyApp/LOGOLOGO_3_v5ciw4.png' alt='logo' />
                <div style={{ 'display': 'flex', 'width': '20%', 'fontSize': '30px', 'gap': '5px' }} >
                    <FiHeart />
                    <IoChatbubblesOutline />
                </div>
            </HeadDiv>

            <SliderDiv>
                <UlList>
                    {
                        data.map(avatar => (
                            <li key={avatar.id} style={{ 'listStyleType': 'none' }}><ImageAvatar src={avatar.avatar} alt="img" /></li>
                        ))
                    }

                </UlList>
            </SliderDiv>

            <div style={{ 'display': 'flex', 'flexDirection': 'column', 'gap': '20px', 'marginTop': '30px', 'marginBottom': '75px' }}>

                {

                    data.map(user => (
                        <Card key={user.id}>
                            <NameDiv>
                                <Link to="/perfil"> <ImageAvatar2 style={{ 'width': '80%' }} src={user.avatar} alt="profile" /></Link>
                                <p style={{ 'fontSize': '14px', 'fontWeight': '600' }} >{user.name}</p>
                            </NameDiv>
                            <img style={{ 'width': '95%', 'display': 'flex', 'margin': '0 auto' }} src={user.image} alt='picturePub' />
                            <div style={{ 'display': 'flex', 'width': '92%', 'margin': '0 auto', 'justifyContent': 'space-between', 'fontSize': '25px', 'alignItems': 'start', 'marginTop': '10px' }} >
                                <div style={{ 'display': 'flex', 'gap': '20px' }}>
                                    <div style={{ 'display': 'flex', 'flexDirection': 'column', 'justifyContent': 'center', 'textAlign': 'center', 'gap': '5px' }}><FiHeart /><p style={{ 'fontSize': '12px' }}>{user.likes}K</p></div>
                                    <div style={{ 'display': 'flex', 'flexDirection': 'column', 'justifyContent': 'center', 'textAlign': 'center', 'gap': '5px' }}><BsChat /><p style={{ 'fontSize': '12px' }}>{user.commet}k</p></div>
                                    <div style={{ 'display': 'flex', 'flexDirection': 'column', 'justifyContent': 'center', 'textAlign': 'center', 'gap': '5px' }}><IoPaperPlaneOutline /><p style={{ 'fontSize': '12px' }}>{user.shared}k</p></div>
                                </div>
                                <BsFillBookmarkFill style={{ 'color': '#FFE3E2' }} />
                            </div>
                            <span style={{ 'fontWeight': '600', 'width': '92%', 'margin': '0 auto', 'display': 'flex', 'flexDirection': 'column', 'marginTop': '10px' }} >{user.name}<p style={{ 'fontWeight': '400', 'fontSize': '10px', 'color': '#B8B8B8' }}>{user.des}</p></span>
                        </Card>
                    ))
                }


            </div>

            <FooterDiv />


        </div>
    )
}

export default Home