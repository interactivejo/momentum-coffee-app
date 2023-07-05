import React from 'react'
import TabsMenu from '../layout/TabsMenu'
import MenuHeader from '../layout/MenuHeader'
import DashboardStats from '../ui/DashboardStats'




const Dashboard = () => {
  return (
    <div>
        <MenuHeader 
          title="Momentum Cafe Dashboard"
          downloadButton={true}
        />

        <div>
          <DashboardStats />
        </div>

    </div>
  )
}

export default Dashboard