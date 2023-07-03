import React from 'react'
import TabsMenu from '../layout/TabsMenu'


const tabs = [
    {
        index: 1,
        title: 'Dashboard',
    },
    {
        index: 2,
        title: 'Order History',
    },
    {
        index: 3,
        title: 'Menu',
    },
]

const AdminHome = () => {
  return (
    <div>
        <TabsMenu tabs={tabs} />
    </div>
  )
}

export default AdminHome