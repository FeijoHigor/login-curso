import styled from 'styled-components'

import Button from './components/Button'
import Input from './components/Input'
import Header from './components/Header'
import ChangeScreen from './components/ChangeScreen'
import ScreenSection from './components/ScreenSection'

function LoginScreen(props: any){
  document.title = "Login | Além do Código"
    return (
      <ScreenSection>
        <Header>Entrar</Header>
        <Input type={'email'}></Input>
        <Input type={'password'}></Input>
        <Button handleClick={() => console.log('Entrar')}>Entrar</Button>
        <ChangeScreen handleClick={props.handleClick} screen={'signup'} />
      </ScreenSection>
    )
}

export default LoginScreen