
import React from 'react'
import cxs from 'cxs'
import DateInput from 'react-date'

const padLeft = (str, pad) => {
  return String(pad + str).slice(-pad.length)
}

const initDate = () => {
  const date = new Date()
  const yyyy = date.getFullYear()
  const mm = padLeft(date.getMonth() + 1, '00')
  const dd = padLeft(date.getDate(), '00')

  return `${yyyy}-${mm}-${dd}`
}

class App extends React.Component {
  constructor () {
    super()
    this.state = {
      date: initDate()
    }
    this.onChange = this.onChange.bind(this)
  }

  onChange (e) {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }

  render () {
    const { date } = this.state

    return (
      <div style={{
        padding: 48
      }}>
        <h1>React Date Input</h1>
        <h2>Default native input</h2>
        <label htmlFor='date'>Date</label>
        <input
          type='date'
          name='date'
          value={date}
          onChange={this.onChange}
          className={classNames.input}
        />
        <h2>React DateInput</h2>
        <DateInput
          type='date'
          name='date'
          value={date}
          onChange={this.onChange}
          className={classNames.input}
        />
      </div>
    )
  }
}

const classNames = {
  input: cxs({
    fontFamily: 'inherit',
    fontSize: 'inherit',
    padding: 8,
    borderRadius: 0,
    border: '1px solid #ddd',
    ':first-child': {
      borderRadius: '4px 0 0 4px'
    },
    ':last-child': {
      borderRadius: '0 4px 4px 0'
    },
    ':first-child:last-child': {
      borderRadius: 4
    }
  })
}

export default App

