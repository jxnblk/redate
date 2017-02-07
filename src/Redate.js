
import React from 'react'

class Redate extends React.Component {
  constructor () {
    super()
    this.state = {
      supports: true
    }
  }

  componentDidMount () {
    // Check for native date input support
    const input = document.createElement('input')
    input.type = 'date'
    const supports = input.type === 'date'
    this.setState({ supports })
  }

  render () {
    if (!this.state.supports) {
      return (
        <DateInputs {...this.props} />
      )
    }
    const {
      divider,
      ...props
    } = this.props

    return (
      <input
        type='date'
        {...props}
      />
    )
  }
}

const DateInputs = ({
  id,
  name,
  value,
  onChange,
  order,
  className,
  divider,
  ...props
}) => {
  const [ year, month, day ] = value.split('-')

  const handleChange = (part) => (e) => {
    const { value } = e.target
    let date

    switch (part) {
      case 'year':
        date = hyphenate(value, month, day)
        break
      case 'month':
        date = hyphenate(year, value, day)
        break
      case 'day':
        date = hyphenate(year, month, value)
        break
    }

    const next = {
      ...e,
      target: {
        ...e.target,
        name: name,
        value: date
      }
    }

    onChange(next)
  }

  const inputs = {
    month: (
      <input
        key='month'
        type='number'
        name={name + '-month'}
        pattern='[0-9]*'
        min={1}
        max={12}
        value={month}
        onChange={handleChange('month')}
        className={className}
        style={inputStyles.monthDay}
      />
    ),
    day: (
      <input
        key='day'
        type='number'
        name={name + '-day'}
        pattern='[0-9]*'
        min={1}
        max={daysInMonth(year, month)}
        value={day}
        onChange={handleChange('day')}
        className={className}
        style={inputStyles.monthDay}
      />
    ),
    year: (
      <input
        key='year'
        type='number'
        name={name + '-year'}
        pattern='[0-9]*'
        value={year}
        max={9999}
        onChange={handleChange('year')}
        className={className}
        style={inputStyles.year}
      />
    )
  }

  const orderedInputs = order.map(key => inputs[key])
    .map((input, i) => {
      if (divider && i < 2) {
        return (
          <div style={inputStyles.dividerWrap}>
            {input}
            <span>{divider}</span>
          </div>
        )
      }
      return input
    })


  // To do: allow month name select option
  return (
    <div id={id || name}
      style={inputStyles.root}>
      {orderedInputs}
    </div>
  )
}

const hyphenate = (...args) => args.join('-')

const daysInMonth = (year, month) => {
  return new Date(year, month, 0).getDate()
}

const dateValuePropType = (props, name, comp) => {
  if (!/[0-9]{4}-[0-9]{2}-[0-9]{2}/.test(props[name])) {
    return new Error(
      'Invalid prop `' + name + '` supplied to' +
      ' `' + comp + '`. Validation failed. ' +
      'Value should be in the format YYYY-MM-DD.'
    )
  }
}

Redate.propTypes = {
  value: dateValuePropType,
  onChange: React.PropTypes.func
}

Redate.defaultProps = {
  order: [
    'month', 'day', 'year'
  ]
}

const inputStyles = {
  root: {
    display: 'flex',
  },
  monthDay: {
    boxSizing: 'border-box',
    flex: '1 1 auto',
    width: '25%',
    margin: 0
  },
  year: {
    boxSizing: 'border-box',
    flex: '1 1 auto',
    width: '50%',
    margin: 0
  },
  dividerWrap: {
    display: 'flex',
    flex: '1 1 auto',
    width: '25%'
  }
}

export default Redate

