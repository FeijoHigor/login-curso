import styled from 'styled-components'

import Button from './components/Button'
import Input from './components/Input'
import Header from './components/Header'
import ChangeScreen from './components/ChangeScreen'
import ScreenSection from './components/ScreenSection'

function SignupScreen(props: any){
  document.title = "Cadastrar | Além do Código"
    return (
      <ScreenSection>
        <Header>Cadastrar-se</Header>
        <Input type={'name'}></Input>
        <Input type={'email'}></Input>
        <Input type={'password'}></Input>
        <Button handleClick={() => console.log('Entrar')}>Cadastrar</Button>
        <ChangeScreen handleClick={props.handleClick} screen={'login'} />
      </ScreenSection>
    )
}

export default SignupScreen