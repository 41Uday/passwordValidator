// Write your code here

import {useState} from 'react'

import {
  BgContainer,
  CardOne,
  Heading,
  Para,
  Input,
  ParaTwo,
} from './styledComponents'

const PasswordValidator = () => {
  const [value, setValue] = useState('')

  const onChangeInput = event => {
    setValue(event.target.value)
  }

  return (
    <BgContainer>
      <CardOne>
        <Heading>Password Validator</Heading>
        <Para>Check how strong and secure is your password</Para>
        <Input type="password" onChange={onChangeInput} />
        {value.length < 8 && (
          <ParaTwo>Your password must be at least 8 characters</ParaTwo>
        )}
      </CardOne>
    </BgContainer>
  )
}

export default PasswordValidator
