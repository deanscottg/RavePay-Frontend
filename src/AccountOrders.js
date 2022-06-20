import React, { useState, useEffect } from 'react'
import OrderCard from './OrderCard'

function AccountOrders({ account }) {
  const[orders, setOrders]=useState([])
useEffect(() => {
  fetch('/orders')
  .then(response => response.json())
  // .then(orderData => console.log(orderData, "orders"))
  .then((orderData => setOrders(orderData)))

}, [])

  return (
    <div> 
      {orders.map((order)=>  (<OrderCard order={order}/>)
         
      )}
      
     
   </div>
  )
    }

export default AccountOrders