# react-scrambled-email

Bot proof your email links. The ScrambledEmail component will keep
bots from stealing your email, but when a user clicks the link they
will get the correct email.

### Installation

`yarn add react-scrambled-email`

### Usage

```jsx
import React from 'react'
import { ScambledEmail } from 'react-scrambled-email'

export const App = () => {
  return (
    <span>
      Send me an
      <ScrambledEmail email="me@myemail.com" text="email" />
    </span>
  )
}
```
