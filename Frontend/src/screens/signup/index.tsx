import React from 'react'
import { Button } from '@mui/material'
import CS_input from '../../Components/input'
import { Post } from '../../config/Api/apihandling'

const Signup = () => {

  const [Input, setInput] = React.useState<{
    userName: string,
    password: string,
    contact: string
  }>({
    userName: "",
    password: "",
    contact: ''
  })
  let getValues = (e: any) => setInput({ ...Input, [e.target.name]: e.target.value })
  let SignupFx = () => Post('/auth/signup', Input).then((res) => { console.log(res), alert('User Signup Please Open console') }).catch((er) => { console.log(er), alert('There Is some error Please Check console') })
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className='border flex flex-col gap-4 p-5 rounded'>
        <h1 className="text-3xl  font-semibold text-center my-5">SignUp</h1>
        <CS_input onChangeEvt={getValues} label="User Name" Name="userName" />
        <CS_input onChangeEvt={getValues} label="Password" Name="password" />
        <CS_input onChangeEvt={getValues} label="Contact" Name="contact" />
        <Button variant="contained" onClick={SignupFx}>Signup</Button>
      </div>
    </div>
  )
}

export default Signup