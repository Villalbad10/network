import React, { useEffect } from 'react'
import { Back, Botones, Button, CadImg, Col2, Cont, Conthead, Desc, Foll, Foto, Header, Imagenes, Palabras, Signal, Textos, Types } from '../styles/Perfil'

const Perfil = () => {
    return (
        <Cont><Conthead> <Header src="https://res.cloudinary.com/dcsn54xoj/image/upload/v1654805847/AuraHooks/False_oloyq1.png" alt="" /><Signal src="https://res.cloudinary.com/dcsn54xoj/image/upload/v1654805881/AuraHooks/Group_14_sriagl.png" alt="" /></Conthead>
            <Textos><Foll><h4>10.7M</h4> <p>Followers</p></Foll>
                <Foto   ><img src="https://res.cloudinary.com/dcsn54xoj/image/upload/v1654806088/AuraHooks/Group_12_czk9tx.png" alt="" />
                    <h6>Jennie Kim</h6><Desc>J.Hello Guys <br /> Follow me and like my post </Desc></Foto  > <Foll> <h4>108.3M</h4> <p>Likes</p></Foll>

            </Textos >
            <Botones><Button>Follow</Button> <Button>Messages</Button></Botones>
            <Back><Types><Palabras>Photos</Palabras> <Palabras>Videos</Palabras><Palabras>Album</Palabras><Palabras>Tag</Palabras></Types>
                <Imagenes><div><CadImg src="https://res.cloudinary.com/dcsn54xoj/image/upload/v1654806089/AuraHooks/Group_16_cvqgss.png" alt="" />
                    <CadImg src="https://res.cloudinary.com/dcsn54xoj/image/upload/v1654806092/AuraHooks/Group_17_xv6tdn.png" alt="" />
                </div><Col2><CadImg src="https://res.cloudinary.com/dcsn54xoj/image/upload/v1654806089/AuraHooks/Group_16_cvqgss.png" alt="" /><CadImg src="https://res.cloudinary.com/dcsn54xoj/image/upload/v1654806091/AuraHooks/Group_15_inxifq.png" alt="" /></Col2></Imagenes></Back></Cont>
    )
}

export default Perfil