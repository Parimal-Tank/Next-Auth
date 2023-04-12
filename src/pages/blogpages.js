import { getSession } from 'next-auth/react'
import React from 'react'

const blogpages = ({ data  }) => {
  return (
    <h1> Blog Page - {data} </h1>
  )
}


// Example of Secure Route Using Server Side
export async function getServerSideProps(context){
    const session = await getSession(context);
    console.log('session: ', session);


    if(!session){
        return{
            redirect : {
               destination : '/api/auth/signin?callbackUrl=http://localhost:3000/blogpages',
               permanent : false
            }
        }
    }

    return{
        props : {
            session ,
            data :  session ? 'List of 100 perzonalized blog' : 'List of Free Blog'
        }
    }
} 

export default blogpages
