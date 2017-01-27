
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

[View Demo](http://jxnblk.com/redate)

[MIT License](LICENSE.md)

