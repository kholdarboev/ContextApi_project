import styled, {css} from 'styled-components'
import {KeyboardArrowLeft} from '@styled-icons/material/KeyboardArrowLeft'
import {PowerOutline}from '@styled-icons/evaicons-outline/PowerOutline'
import {MoonStarsFill} from '@styled-icons/bootstrap/MoonStarsFill'
import {Grid} from '@styled-icons/ionicons-outline/Grid'
import {UserCheck} from '@styled-icons/boxicons-regular/UserCheck'
import {UserPlus} from '@styled-icons/boxicons-regular/UserPlus'
import {FileMedia} from '@styled-icons/octicons/FileMedia'
import {Settings} from '@styled-icons/fluentui-system-regular/Settings'
import {ChatLeftDots} from '@styled-icons/bootstrap/ChatLeftDots'
import {Notification4} from '@styled-icons/remix-fill/Notification4'
import Toggle from 'react-dark-mode-toggle';


export const Switch = styled(Toggle)`
margin-left:auto;
outline:none;
background:white;
`



export const Container = styled.div`
display:flex;
justify-content: center;
align-items: center;
width:100wh;
height:fit-content;
padding:100px 300px;
box-sizing:border-box;
`

export const MobileContainer = styled.div`
width:450px;
height:800px;
box-shadow: 5px 5px 12px 6px rgba(0,0,0,0.25);
background-color:white;
box-sizing:border-box;
background:${({color})=> color};
`

export const TopIcons = styled.div`
display: flex;
width:100%;
padding:20px;
box-sizing:border-box;
`
export const Icon = styled.div`
`

Icon.LeftIcon = styled(KeyboardArrowLeft)`
width:30px;
height:30px;
cursor: pointer;
color:${({color})=> color};
`

Icon.PowerIcon = styled(PowerOutline)`
width:20px;
height:20px;
cursor: pointer;
color:${({color})=> color};
margin-left:auto;
`

export const ImgWrapper = styled.div`
display:flex;
flex-direction:column;
justify-content: center;
align-items: center;
margin:0 0 20px 0;


`
export const UserTitle = styled.div`
font-size:22px;
font-weight:bold;
font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
color:${({color})=> color};
` 

export const Img = styled.img`
width:130px;
height:130px;
border-radius:50%;
padding:20px;
color:${({color})=> color};
cursor: pointer;
:hover{
    opacity:.7;
}
`

export const Desc = styled.div`
font-size:18px;
font-family: SF Pro Display;
font-style:bold;
color:${({color})=> color};
`

export const Items = styled.div`
display: flex;
padding:10px 50px ;
`
export const ItemsTitle = styled.div`
font-size:20px;
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
font-weight:700;
padding-left:20px;
color:${({color})=> color};
`

Icon.Dark = styled(MoonStarsFill)`
width:20px;
height:20px;
cursor: pointer;
color:${({color})=> color};
`

Icon.Grid = styled(Grid)`
width:20px;
height:20px;
cursor: pointer;
color:coral;
`   

Icon.UserCheck = styled(UserCheck)`
box-sizing:border-box;
width:25px;
height:25px;
cursor: pointer;
color:magenta;
`

Icon.UserPlus = styled(UserPlus)`
width:25px;
height:25px;
cursor: pointer;
color:cyan;
`

export const Line = styled.div`
width:80%;
box-sizing:border-box;
height:1px;
background:#e9e9e9;
margin:30px 50px;

`
Icon.FileMedia = styled(FileMedia)`
width:25px;
height:25px;
cursor: pointer;
color:#2947D8;
`
Icon.Settings = styled(Settings)`
width:25px;
height:25px;
cursor: pointer;
color:#3CB176;
`
Icon.ChatLeftDots = styled(ChatLeftDots)`
width:25px;
height:25px;
cursor: pointer;
color:#0D8120;
`
Icon.Notification = styled(Notification4)`
width:25px;
height:25px;
cursor: pointer;
color:#625485;
`