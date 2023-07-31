import { forwardRef, useState } from 'react'
import './App.css'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { ko } from 'date-fns/locale'
import { getYear, getMonth, format } from 'date-fns'

const MONTHS = [
  '01',
  '02',
  '03',
  '04',
  '05',
  '06',
  '07',
  '08',
  '09',
  '10',
  '11',
  '12',
]

function App() {
  const [start, setStart] = useState(new Date())
  const [month, setMonth] = useState(new Date().getMonth())
  const changeDate = (date) => {
    setStart(date)
  }
  console.log(start)

  const CustomDatePicker = forwardRef(({ value, onClick }) => (
    <div>
      <button
        style={{
          width: '100%',
          cursor: 'pointer',
        }}
        onClick={onClick}
      >
        {value}
      </button>
    </div>
  ))

  const handleMonthChange = (date) => {
    setMonth(date.getMonth())
  }

  return (
    <div className="main">
      <div className="calendar-box">
        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
          <div
            style={{
              width: '50%',
            }}
          >
            <DatePicker
              className="calendar-input"
              dateFormat={'yyyy년 MM월 dd일'}
              locale={ko}
              selected={start}
              onChange={changeDate}
              onMonthChange={handleMonthChange}
              dayClassName={(day) =>
                day.getDate() === start.getDate() &&
                day.getMonth() === month &&
                month === start.getMonth()
                  ? 'select-day'
                  : day.getMonth() === month
                  ? 'custom-day'
                  : 'gray-day'
              }
              renderCustomHeader={({
                date,
                decreaseMonth,
                increaseMonth,
                prevMonthButtonDisabled,
                nextMonthButtonDisabled,
              }) => (
                <div className="calendar-header">
                  <span>{`${getYear(date)}년 ${
                    MONTHS[getMonth(date)]
                  }월`}</span>

                  <div>
                    <button
                      onClick={decreaseMonth}
                      disabled={prevMonthButtonDisabled}
                    >
                      {'<'}
                    </button>
                    <button
                      onClick={increaseMonth}
                      disabled={nextMonthButtonDisabled}
                    >
                      {'>'}
                    </button>
                  </div>
                </div>
              )}
              customInput={<CustomDatePicker />}
            />
          </div>
          <div style={{ width: '30%' }}>
            <select defaultValue={1}>
              <option>1</option>
              <option>2</option>
              <option>3</option>
            </select>
          </div>
        </div>

        <div>{'timestamp: ' + start.getTime()}</div>
        <div>{'day: ' + start.getDay()}</div>
      </div>
    </div>
  )
}

export default App
