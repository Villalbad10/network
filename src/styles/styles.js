import styled from "styled-components";

export const HeadDiv = styled.header`
  display: flex;
  justify-content: space-between;
  width: 95%;
  margin: 0 auto;
  align-items: center;
  margin-top: 5%;
`;

export const SliderDiv = styled.nav`
  width: 100%;
  overflow-x: scroll;
  margin-top: 10%;
  padding-left: 5%;
`;

export const UlList = styled.ul`
  display: flex;
  gap: 15px;
`;

export const Card = styled.div`
  background-color: white;
  box-shadow: 2px 2px 2px 1px #b8b8b8;
  width: 90%;
  margin: 0px auto;
  padding-bottom: 30px;
  border-radius: 10px;
`;

export const NameDiv = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin: 0 auto;
  gap: 10px;
  margin-top: 5%;
  padding: 5px;
`;

// FOOTER

export const FooterSection = styled.footer`
 background: url("https://res.cloudinary.com/dg29vcpk7/image/upload/v1654810853/FindyApp/Rectangle_60_v9x2pa.png");
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 5vh;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 55px;
`;

export const ImagePlus = styled.img` 
    width: 50px;
    height: 50px;
    position: relative;
    bottom: 20px;
    padding: 10px;
`

export const FooterBack = styled.div`
    display: flex;
    position: relative;
    bottom:40px;
    justify-content: space-between;
    width: 95%;
    align-items: center;
    font-size: 35px;
    color:white
`;
