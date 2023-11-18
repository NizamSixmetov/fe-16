import { useState } from "react"
import { v4 } from 'uuid';

const User = ({ ad, soyad }) => {
    return (
        <div>
            <h1>{ad} {soyad}</h1>
        </div>
    )
}

export default User

