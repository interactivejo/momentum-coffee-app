import React from 'react'
import Container from '../components/layout/Container'
import BackButton from '../components/ui/BackButton'
import OrderReview from '../components/sections/OrderReview'

const OrderPage = () => {
  return (
    <div>
        <Container>
          <div className='mb-8'>
            <BackButton href='/'/>
          </div>

          <OrderReview />
        </Container>
    </div>
  )
}

export default OrderPage