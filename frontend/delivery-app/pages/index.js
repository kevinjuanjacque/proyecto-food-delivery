import Image from 'next/image'
import { Inter } from 'next/font/google'
import { useEffect, useState } from 'react'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const [orders, setOrders]=useState(null);

  useEffect(()=>{
    const getOrder = async()=>{
      
       
       let response = await fetch("http://localhost:8080/api/order", { 
         method: "GET",
         headers: {}
       });
       
       let data = await response.json();

       setOrders(data.data)


    }
    getOrder()
  },[])
  
  if(orders===null) {return<><div className="h-screen w-screen flex flex-col justify-center items-center">
      Cargando...
    </div></>}

  return (
    <h1 className='text-2xl flex flex-row  bg-gray-700 h-screen w-screen'>{
      orders.map(order=><>
      <div className="flex flex-col w-52 h-52 ">
      <div className=" ">{order.number} </div>
      <div className="">{order.totalPrice} </div>

      <div className=" text-red-700">{order.status} </div>

      </div>
      </>)
    }</h1>
  )
}
