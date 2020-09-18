import React from 'react'

import { ScrambledEmail } from 'react-scrambled-email'

/**
 * Example application that uses the `ScrambledEmail` component.
 */

export const App = () => {
  return (
    <span>
      Send me an
      <ScrambledEmail email="me@myemail.com" text="email" />
    </span>
  )
}
