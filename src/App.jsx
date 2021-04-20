import React, { useState, useContext } from 'react'
import { Container, MobileContainer, Icon, TopIcons, ImgWrapper, Img, UserTitle, Desc, Items, ItemsTitle, Line, Switch } from './Style'
import img from './assets/imgs/user.jpg'
import { ThemeContext } from './context'
const App = () => {
  const [mode, setMode] = useState(false);
  const [theme, setTheme] = useContext(ThemeContext)

  const dark = {
    icon: 'black',
    title: 'black',
    background: 'white',
  }
  const light = {
    icon: 'white',
    title: 'white',
    background: 'black',
  }
  const onChange = () => {
    setMode(!mode)
    setTheme(mode ? dark : light)
  }
  return (
    <Container >
      <MobileContainer className='Mobile' color={theme.background}>
        <TopIcons>
          <Icon.LeftIcon color={theme.icon} />
          <Icon.PowerIcon color={theme.icon} />
        </TopIcons>
        <ImgWrapper>
          <Img src={img} alt='user picture' />
          <UserTitle color={theme.title}>Uzb Sf Coder</UserTitle>
          <Desc color={theme.title}>Happy hacking</Desc>
        </ImgWrapper>

        {/* Dark Item */}
        <Items>
          <Icon.Dark color={theme.icon} />
          <ItemsTitle color={theme.title}>Dark mode</ItemsTitle>
          <Switch
            onChange={onChange}
            checked={mode}
            size={50}
            color={theme.background}
          />
        </Items>
        {/* Story */}
        <Items>
          <Icon.Grid />
          <ItemsTitle color={theme.title}>Story</ItemsTitle>
        </Items>
        {/* useCheck */}
        <Items>
          <Icon.UserCheck />
          <ItemsTitle color={theme.title}>Chat Heads</ItemsTitle>
        </Items>
        {/* UserPlus */}
        <Items>
          <Icon.UserPlus />
          <ItemsTitle color={theme.title}>Groups</ItemsTitle>
        </Items>
        <Line />
        {/* Media */}
        <Items>
          <Icon.FileMedia />
          <ItemsTitle color={theme.title}>Media and photos</ItemsTitle>
        </Items>
        {/* Setting */}
        <Items>
          <Icon.Settings />
          <ItemsTitle color={theme.title}>Settings and privacy</ItemsTitle>
        </Items>
        {/* Help */}
        <Items>
          <Icon.ChatLeftDots />
          <ItemsTitle color={theme.title}>Help centre</ItemsTitle>
        </Items>
        {/* Notification */}
        <Items>
          <Icon.Notification />
          <ItemsTitle color={theme.title}>Notification</ItemsTitle>
        </Items>
      </MobileContainer>
    </Container>
  )
}
export default App