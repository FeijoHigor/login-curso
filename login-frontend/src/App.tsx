import { useState } from 'react'

import LoginScreen from './screens/Login'
import SignupScreen from './screens/Signup'

function App() {
  const [screen, setScreen] = useState(0)

  return (
      screen == 0 ? (
        <SignupScreen handleClick={() => setScreen(1)} />
      ) : (
        <LoginScreen handleClick={() => setScreen(0)} />)
  )
}

export default App
