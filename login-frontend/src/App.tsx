import { useState } from 'react'

import LoginScreen from './screens/Login'
import SignupScreen from './screens/Signup'

function validatingForm(formType: number, data: any) {
  let allErrors = []
  if(data.email.length <= 0) {
    allErrors.push('Insira um email!')
  }else if(data.email.includes('@') == false || data.email.includes('.') == false) {
    allErrors.push('Insira um email válido')
  }

  if(formType == 1) {
    if(data.password.length <= 0) {
      allErrors.push('Insira uma senha!')
    }
  }

  if(formType === 0) {
    if(data.name.length <= 0) {
      allErrors.push('Insira um nome!')
    }

    if(data.password.length < 4) {
      allErrors.push('Insira uma senha com pelo menos 4 digitos!')
    }
  }

  if(allErrors.length > 0) {
    return {
      valid: false, 
      errors: allErrors
    }
  }else{
    return {
      valid: true,
    }
  }
}

function App() {
  const [screen, setScreen] = useState(0)
  const [errors, setErrors] = useState([])

  const sendErrors = (recivedErrors: any) => {
    setErrors(recivedErrors)
  }

  const changeScreen = () => {
    if(screen == 0) {
      setScreen(1)
    }else if(screen == 1) {
      setScreen(0)
    }
    setErrors([])
  }

  const analyseForm = (data: any) => {
    setErrors([])
    const validation = validatingForm(screen, data)

    if(validation.valid == false) {
      sendErrors(validation.errors)
    }
  }

  return (
      screen == 0 ? (
        <SignupScreen errors={errors} sendForm={(formDatas: any) => analyseForm(formDatas)} changeScreenClick={() => changeScreen()} />
      ) : (
        <LoginScreen errors={errors} sendForm={(formDatas: any) => analyseForm(formDatas)} changeScreenClick={() => changeScreen()} />)
  )
}

export default App
