import React from 'react'
import TabsMenu from '../layout/TabsMenu'

const tabs = [
    {
        index: 1,
        title: 'Current Orders',
    },
    {
        index: 2,
        title: 'Order History',
    },
    {
        index: 3,
        title: 'Menu',
    },
    {
        index: 4,
        title: 'Dashboard',
    },
]

const BaristaHome = () => {
  return (
    <div>
        <TabsMenu tabs={tabs} />
    </div>
  )
}

export default BaristaHome