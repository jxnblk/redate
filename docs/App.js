
import React from 'react'
import cxs from 'cxs'
import Redate from 'redate'

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
      date: initDate(),
      empty: ''
    }
    this.onChange = this.onChange.bind(this)
  }

  onChange (e) {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }

  render () {
    const { date, empty } = this.state

    return (
      <div style={{
        padding: 48
      }}>
        <h1>Redate Demo</h1>
        <p>A React date input component with fallback for browsers that lack support</p>
        <h2>Default native input</h2>
        <label htmlFor='date'>Date</label>
        <input
          type='date'
          id='date'
          name='date'
          value={date}
          onChange={this.onChange}
          className={classNames.input}
        />
        <h2>Redate</h2>
        <label htmlFor='redate'>Date MM/DD/YYYY</label>
        <Redate
          id='redate'
          name='date'
          value={date}
          onChange={this.onChange}
          className={classNames.input}
        />
        <h2>Redate with empty value</h2>
        <label htmlFor='redate-empty'>Date MM/DD/YYYY</label>
        <Redate
          id='redate-empty'
          name='empty'
          value={empty}
          onChange={this.onChange}
          className={classNames.input}
        />
        <pre>empty: {`<${typeof empty}>`} {empty}</pre>
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
    },
    ':invalid': {
      borderColor: '#f03'
    },
    '::-webkit-inner-spin-button': {
      WebkitAppearance: 'none'
    },
    '::-webkit-outer-spin-button': {
      WebkitAppearance: 'none'
    }
  })
}

export default App

