import './App.css'
import Profile from './Components/1/Profile'
import Variable from './Components/1/Variable'
import C1 from './Components/2/C/C1'
import B from './Components/2/B'
import A from './Components/2/A'
import PropPass from './Components/4/PropsPass'

function App() {


  return (
    <>
      <Variable />
      <Profile />
      <A />
      <B />
      <C1 />
      <PropPass name = 'Baburao Ganpatrao Aapte'  age = {100} bio = 'Jay Maharastra'  />
    </>
  )
}

export default App
