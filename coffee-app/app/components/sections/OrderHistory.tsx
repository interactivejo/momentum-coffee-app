import React from 'react'
import MenuHeader from '../layout/MenuHeader'
import OrderHistoryTable from '../ui/OrderHistoryTable'

const OrderHistory = () => {
  return (
    <div>
      <MenuHeader 
        title="Order History" />

        <OrderHistoryTable />
    </div>
  )
}

export default OrderHistory