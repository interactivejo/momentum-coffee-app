import React from 'react'
import OrderCard from '../ui/OrderCard'

const orders = [
  {
    name: "John Doe",
    createdAt: "10:30am",
    orderNumber: "1056",
    order: "Iced Latte",
    customizations: [
      {
       milk: "Whole Milk",
       ice: "No Ice",
        syrup: "Vanilla",
        syrupQnt: "2",
        espresso: "Double Shot",
      },
    ]
  },
  {
    name: "John Doe",
    createdAt: "10:30am",
    orderNumber: "1056",
    order: "Iced Latte",
    customizations: [
      {
       milk: "Whole Milk",
       ice: "No Ice",
        syrup: "Vanilla",
        syrupQnt: "2",
        espresso: "Double Shot",
      },
    ]
  },
  {
    name: "John Doe",
    createdAt: "10:30am",
    orderNumber: "1056",
    order: "Iced Latte",
    customizations: [
      {
       milk: "Whole Milk",
       ice: "No Ice",
        syrup: "Vanilla",
        syrupQnt: "2",
        espresso: "Double Shot",
      },
    ]
  },
]

const CurrentOrders = () => {
  return (
    <div>
      
      <div className='grid grid-cols-3 gap-8'>
        {orders.map((order) => (
          <OrderCard 
            name={order.name}
            createdAt={order.createdAt}
            orderNumber={order.orderNumber}
            order={order.order}
            customizations={order.customizations}
          />
        ))}


        
      </div>

    </div>
  )
}

export default CurrentOrders