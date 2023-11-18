import { useState } from "react"
import "./style.css"
const Calculator = () => {
    const [first, setFirst] = useState('')
    const [second, setSecond] = useState('')
    const [result, setResult] = useState(0)
    return (
        <>
            <div className="calculator_container">
                <input
                    value={first}
                    onChange={(e) => {
                        setFirst(+e.target.value)
                    }}
                    type="number" />
                <input
                    value={second}
                    onChange={(e) => {
                        setSecond(+e.target.value)
                    }}
                    type="number" />
                <div className="button_container">
                    <button onClick={() => {
                        setResult(first + second)
                    }}>+</button>
                    <button onClick={() => {
                        setResult(first - second)
                    }}>-</button>
                    <button onClick={() => {
                        setResult(first * second)
                    }}>*</button>
                    <button onClick={() => {
                        setResult(first * second)
                    }}>/</button>
                </div>
            </div>
            <div className="result">{result}</div>
        </>
    )
}

export default Calculator;