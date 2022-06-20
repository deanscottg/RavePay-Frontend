import React, { useState, useEffect } from 'react'
import OrderCard from './OrderCard'
import {API_URL }from './apiAdapter'

function AccountOrders({ account }) {
  const[orders, setOrders]=useState([])
useEffect(() => {
  fetch(`${API_URL}/orders`)
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