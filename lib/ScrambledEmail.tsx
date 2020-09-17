import React, { useCallback, useState } from 'react'
import emailScramble from 'email-scramble'

export interface IScrambledEmailProps {
  readonly email: string
  readonly text: string
  readonly className: string
}

export const ScrambledEmail: React.FC<IScrambledEmailProps> = ({ email, text, className }) => {
  const [state] = useState(emailScramble.encode(email))

  const onClick = useCallback((e) => {
    e.preventDefault()
    const a = document.createElement('a')
    a.href = `mailto: ${emailScramble.decode(state)}`
    a.click()
  }, [state])

  return <a href={`mailto:${state}`} onClick={onClick} className={className}>{text}</a>
}