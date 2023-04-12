import { getSession, signIn } from 'next-auth/react';
import React, { useEffect, useState } from 'react'

const blog = () => {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [ loading , setLoading] = useState(true);

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [ userData , setUserData ] = useState({})
  
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
        const securePage = async () => {
           const session = await getSession()
          //  if(!session){
          //     signIn()
          //   }else{
             setUserData(session);
             setLoading(false)
          //  }
        }
        securePage()
    }, [])
  
    if(loading){
      return <h2>Loading....</h2>
    } 

  return (
    <>  
        {
          userData === null ? <h1>Hello Welcome To The Next Js!!!</h1> : (
            <>
              <h1>Hello {userData.user.name}  Welcome To The Next Js!!!</h1> 
              <img src={userData.user.image} alt='user image' width='200' height='200'></img>
            </>
          )
        }
       
    </>
  )
}

export default blog
