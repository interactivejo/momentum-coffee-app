import React from 'react'
import {RiHistoryLine} from 'react-icons/ri'
import {AiOutlineHeart} from 'react-icons/ai'
import {BiShoppingBag} from 'react-icons/bi'
import SideDrawer from '../layout/SideDrawer'

const IconGroup = () => {
  return (
    <div className="">
                  <ul className="flex flex-row gap-2">
                    <li>
                      <SideDrawer
                        icon={<RiHistoryLine className="text-2xl hidden md:block" />}
                        label="History"
                        header="Order History"
                      />
                    </li>
                    <li>
                      <SideDrawer
                        icon={<AiOutlineHeart className="text-2xl hidden md:block" />}
                        label="Favs"
                        header="Favorites"
                      />
                    </li>
                    <li>
                      <SideDrawer
                        icon={<BiShoppingBag className="text-2xl" />}
                        label="Bag"
                        header="Review Order"
                      />
                    </li>
                  </ul>
                </div>
  )
}

export default IconGroup