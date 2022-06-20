import React from 'react'

function OrderCard({ order }) {
  return (
    <div className="my-4">
      <div>
        <h2>
          {' '}
          Order:{order.id} Total: {order.purchase_total} RavePay credits Placed
          at:{order.created_at}
        </h2>
        {order.order_items.map((order_item) => (
          <ul>
            {order_item.item.item_name} x {order_item.item.quantity}
          </ul>
        ))}
      </div>
    </div>
  )
}

export default OrderCard
