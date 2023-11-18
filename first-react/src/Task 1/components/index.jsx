import { useState } from "react"

const Counter = () => {
const [count, setCount] = useState(0)
return (
<>
    <h1>{count}</h1>
    <button onClick={()=> {
        setCount(count + 1)
        }}
        >increase</button>
    <button onClick={()=> {
        setCount(count - 1)
        }}
        >decrease</button>
    <button onClick={()=> {
        setCount(0)
        }}
        >reset</button>
    <button onClick={()=> {
        let ed = +prompt('ededi daxil edin')
        setCount(ed)
        }}
        >special</button>
    <button onClick={()=> {
        console.log(count)
        }}
        >console</button>
</>
)
}

export default Counter;