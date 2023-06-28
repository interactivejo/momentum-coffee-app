import React from 'react'
import TabsMenuItem from './TabsMenuItem'

const TabsMenu = () => {
  return (
    <div
      className='
        flex
        flex-row
        items-center
        gap-4
      '
    >
      <TabsMenuItem />
      <TabsMenuItem />
      <TabsMenuItem />
    </div>
  )
}

export default TabsMenu