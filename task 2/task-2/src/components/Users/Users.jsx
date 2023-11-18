import { useState } from "react"
import {v4} from 'uuid'
import User from "./User"
const Users = ({ }) => {

    const [users, setUsers] = useState([
        {
            id: v4(),
            ad: 'ali',
            soyad: 'isiyev'
        },
        {
            id: v4(),
            ad: 'neman',
            soyad: 'yusifov'
        },
        {
            id: v4(),
            ad: 'nizam',
            soyad: 'şıxmətov'
        },
        {
            id: v4(),
            ad: 'madina',
            soyad: 'aliyeva'
        },
        {
            id: v4(),
            ad: 'elchin',
            soyad: 'reis, cenab, quliyev'
        },
    ])
    return (
        <>
            {
                users.map((obj) => {
                    return (
                        <User  key={obj.id} ad={obj.ad} soyad={obj.soyad}  />
                    )
                })
            }
        </>
    )
}
export default Users


//<div key={obj.id}>
//     <h3>Ad: {obj.name}</h3>
//     <h3>Soyad: {obj.soyad}</h3>
//     <hr/>
// </div>