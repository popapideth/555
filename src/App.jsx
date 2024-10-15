import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import MyButton from './components/MyButton'

function App() {
  const [count, setCount] = useState(0)// สร้างstate ค่าเริ่มต้นเป็น0
  

  return (
    // react fragment: ใช้แทนdivได้เลย ถ้าใช้divด้วยมันจะเป็นdivซ้อนdiv
    <>
      <h1 style={{color:'red',border:'1px solid black'}}>Welcome to my app</h1>
      {/* เอาข้อมูลในstateมาใช้ */}
      <p>{count}</p>
      <MyButton/>
    </>
  )
}

export default App
