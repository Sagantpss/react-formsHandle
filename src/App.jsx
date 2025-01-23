import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CounterChallenge from './components/hooks/useState/Challenge'
import { RegistrationFormReact } from './components/hooks/useState/RegistrationReact'
import { LoginForm } from './components/hooks/useState/LoginForm'
import { ContactForm } from './components/hooks/useState/ContactForm'
import { EffectChanllenge } from './components/hooks/useState/UseEffect/EffectChallenge'
import { CleanUp } from './components/hooks/useState/UseEffect/CleanUp'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <CounterChallenge />
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <div>
        <RegistrationFormReact />
        <LoginForm />
        <ContactForm />
        <EffectChanllenge />
        <CleanUp />
        </div>
        
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
