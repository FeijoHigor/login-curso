import { useState } from 'react'

import Button from './components/Button'
import Input from './components/Input'
import Header from './components/Header'
import ChangeScreen from './components/ChangeScreen'
import ScreenSection from './components/ScreenSection'
import Errors from './components/Errrors'

function SignupScreen(props: any){
  document.title = "Cadastrar | Além do Código"

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const reciveData = (childData: any) => {

    if(childData.name == 'name') {
      setName(childData.value)
    }else if(childData.name == 'email') {
      setEmail(childData.value)
    }else if(childData.name == 'password') {
      setPassword(childData.value)
    }

  }

  return (
    <ScreenSection>
      <Header>Cadastrar-se</Header>
      <Input sendText={reciveData} type={'name'}></Input>
      <Input sendText={reciveData} type={'email'}></Input>
      <Input sendText={reciveData} type={'password'}></Input>
      <Errors errors={props.errors} />
      <Button handleClick={() => props.sendForm({name, email, password})}>Cadastrar</Button>
      <ChangeScreen handleClick={props.changeScreenClick} screen={'login'} />
    </ScreenSection>
  )
}

export default SignupScreen