
# Redate

React date input with fallback for browsers that lack support

```sh
npm i redate
```

## Usage

Use Redate exactly like you would a normal `<input type='date' />`. Note: value must be specified as `YYYY-MM-DD`.

```jsx
import React from 'react'
import Redate from 'redate'

const Form = ({
  date,
  onChange,
  onSubmit
}) => (
  <form onSubmit={onSubmit}>
    <label htmlFor='date'>Date</label>
    <Redate
      id='date'
      name='date'
      value={date}
      onChange={onChange}
      className='Redate-custom-class'
    />
    <button>OK</button>
  </form>
)
```

### Styling

Redate includes minimal styling to place the fallback inputs inline horizontally. To add custom styles, pass a `className` to the Redate component, which will be applied to each individual input.

```jsx
<Redate
  name='date'
  value={date}
  onChange={onChange}
  className='my-custom-classname'
/>
```

### Customizing the order

The order of the fallback inputs defaults to the American `MM-DD-YYYY` order.
For other localizations, provide an array of keys as the order prop:

```jsx
<Redate
  name='date'
  value={date}
  onChange={onChange}
  order={[
    'year', 'month', 'day'
  ]}
/>
```

[View Demo](http://jxnblk.com/redate)

[MIT License](LICENSE.md)

