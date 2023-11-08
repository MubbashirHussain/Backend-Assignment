import React from 'react'
import Input from '../../Components/input'
import { Button } from '@mui/material'
import { useParams } from 'react-router-dom'
import { Get, Post, Put } from '../../config/Api/apihandling'

const Form = () => {
    const [InputObj, setInputObj] = React.useState({
        name: '',
        shortName: "",
        fee: "",
    })
    let params = useParams()

    React.useEffect(() => {
        if (params.id) {
            Get('courses', params.id).then((res) => setInputObj(res.data)).catch((err) => console.log(err))
        }
    }, [])

    let getValues = (e: any) => {
        setInputObj({ ...InputObj, [e.target.name]: e.target.value })
    }
    let submitbtn = (e: any) => {
        if (params.id) {
            Put('courses', params.id, InputObj)
        } else {
            Post('courses', InputObj)
        }
    }
    return (
        <div className="flex flex-col min-h-screen items-center p-5">
            <h1 className="text-3xl font-semibold ">Form {params.id ? 'Edit' : "Add"} </h1>
            <div className='my-10 flex flex-col gap-5'>
                <Input onChangeEvt={getValues} Value={InputObj.name} label="Name" Name="name" />
                <Input onChangeEvt={getValues} Value={InputObj.shortName} label="ShortName" Name="shortName" />
                <Input onChangeEvt={getValues} Value={InputObj.fee} label="fees" Name="fee" />
                <Button variant="contained" onClick={submitbtn}>{params.id ? 'edit' : "add"} </Button>
            </div>
        </div>
    )
}

export default Form