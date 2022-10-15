import { useState } from 'react'

import Button from './components/Button'
import Input from './components/Input'
import Header from './components/Header'
import ChangeScreen from './components/ChangeScreen'
import ScreenSection from './components/ScreenSection'
import Errors from './components/Errrors'

function LoginScreen(props: any){
  document.title = "Login | Além do Código"

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const reciveData = (childData: any) => {

    if(childData.name == 'email') {
      setEmail(childData.value)
    }else if(childData.name == 'password') {
      setPassword(childData.value)
    }

  }

  return (
    <ScreenSection>
      <Header>Entrar</Header>
      <Input sendText={reciveData} type={'email'}></Input>
      <Input sendText={reciveData} type={'password'}></Input>
      <Errors errors={props.errors} />
      <Button handleClick={() => props.sendForm({email, password})}>Entrar</Button>
      <ChangeScreen handleClick={props.changeScreenClick} screen={'signup'} />
    </ScreenSection>
  )
}

export default LoginScreen