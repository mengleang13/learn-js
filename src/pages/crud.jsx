import { Button, Input } from "antd"
import { useState } from "react"


export const Crud = () => {
    const [textValue, setTextValue] = useState()
    const [list, setList] = useState([])  

    console.log(list)
    return(
        <div>
            <h2>GGWP</h2>
            <h2>Using antd and Crud</h2>
            <Input style={{ width: 400}} onChange={(event) =>{
                console.log(event.target.value)
                setTextValue(event.target.value)
            }} />
            <Button onClick={() =>{
                setList([...list, textValue])
            }}>Add</Button>
            {list.map((data)=> <li>{data}</li>)}
        </div>
    )
}