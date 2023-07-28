import { useState } from 'react'
import './App.css'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
function App() {
  let [start, setStart] = useState(new Date())
  return (
    <div className="main">
      <div className="calendar-box">
        <DatePicker selected={start} />
      </div>
    </div>
  )
}

export default App
