import React, {useEffect,useState} from 'react'
import { useNavigate } from 'react-router-dom';

const RedirectCountin = () => {
    const [count,setCount]=useState(5);
    const navigate = useNavigate();
    useEffect(()=>{
        const interval = setInterval(()=>{
            setCount((currentCount:any)=>currentCount-1)
        },1000);
        count === 0 && navigate("/signin")
        return ()=> clearInterval(interval)
    },[navigate,count])
  return (
    <div className="h-screen flex items-center justify-center">
        <p className="mt-3 font-bold text-5xl">Redirecting you in {count} sec</p>
    </div>
  )
}

export default RedirectCountin