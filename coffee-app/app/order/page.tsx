import React from 'react'
import Container from '../components/layout/Container'
import BackButton from '../components/ui/BackButton'
import OrderReview from '../components/sections/OrderReview'

const order = {
  orderNumber: 605,
  lineOrder: 3,
  items: [
    {
      name: 'Iced Latte',
      img: '/images/iced-latte.jpeg',
      info: [
        {
          milk: 'Skim Milk',
          ice: 'Light Ice',
          syrup: 'Vanilla',
          syrupQnt: '2 Pumps',
          espresso: ''
        }
      ]
    },
    {
      name: 'Iced Apple Cider Chai',
      img: '/images/iced-latte.jpeg',
      info: [
        {
          milk: '2% Milk',
          ice: 'Light Ice',
          syrup: '',
          syrupQnt: '',
          espresso: ''
        }
      ]
    }
  ],
}

const OrderPage = () => {
  return (
    <div>
        <Container>
          <div className='mb-8'>
            <BackButton href='/'/>
          </div>
          <OrderReview 
            orderNumber={order.orderNumber}
            lineOrder={order.lineOrder}
          />
        </Container>
    </div>
  )
}

export default OrderPage