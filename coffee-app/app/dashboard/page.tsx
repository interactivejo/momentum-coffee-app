import React from 'react'
import Container from '../components/layout/Container'
import TodaysOrdersBar from '../components/ui/TodaysOrdersBar'
import BaristaHome from '../components/sections/BaristaHome'

export default function DashboardPage() {
  return (
    <Container>
      
        <TodaysOrdersBar />

      <div className='pt-4'>
        <BaristaHome />
      </div>
        
    
    </Container>
  )
}
