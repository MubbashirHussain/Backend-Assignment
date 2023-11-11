import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";
import Card from "../../Components/Card";
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useEffect, useState } from 'react';
import { Delete, Get } from '../../config/Api/apihandling';
function Home() {
    const [Data, setData] = useState<any | null>(null)
    let Navigate = useNavigate()

    useEffect(() => {
        Get('/api/courses').then((res) => setData(res.data))
            .catch((err) => { console.log(err) })
    }, [])
    console.log(Data)

    let DeleteFx = (id: string) => {
        Delete('/courses', id).then((res) => {
            console.log(res)

            let Obj = Data.findIndex((x: any) => x._id === id)
            Data.splice(Obj, 1)
            setData([...Data])
        })
    }
    return (
        <>
            <div className="flex my-10 items-center min-h-screen flex-col">
                <Button variant='contained' className="self-end mx-5" onClick={() => { Navigate('/Form') }}>Add One </Button>
                <div className="max-w-md flex flex-col">
                    <h1 className="text-3xl font-semibold text-center">Our Courses</h1>
                    <div className="flex flex-wrap gap-5 justify-center items-center w-[100%]">
                        {Data ? Data.map((x: any, i: number) => <Card key={i} Data={
                            {
                                title: x.shortName,
                                description: x.name,
                                BottomComp: <>Fee  : {x.fee}</>,
                                WithTitleComponent: <div className="flex mx-1 justify-end">
                                    <Button onClick={() => Navigate(`Form/${x._id}`)} variant='contained' color="success" sx={{ m: 0, p: 0 }}><ModeEditIcon sx={{ heigth: 17, width: 17 }} /></Button>
                                    <Button onClick={() => DeleteFx(x._id)} variant='contained' color="error" sx={{ mx: 1, p: 0 }}><DeleteIcon sx={{ heigth: 17, width: 17 }} /></Button>
                                </div>
                            }

                        } />) : null}

                    </div>
                </div>
            </div>
        </>
    )
}
export default Home;
