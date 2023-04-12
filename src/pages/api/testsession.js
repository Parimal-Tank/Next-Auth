import { getSession } from 'next-auth/react'
import React from 'react'

const handler =  async (req , res) => {

    const session = await getSession({ req })
    
    if(!session){
         res.status(400).json({ error : 'unAuthorized User' })
    }else{
        res.status(200).json({ message :  'Success' , session })
    }
}

export default handler
