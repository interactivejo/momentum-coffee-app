"use client";
import Container from "./components/layout/Container";
import MenuHome from "./components/sections/MenuHome";
import MenuAccordian from "./components/ui/MenuAccordian";
import Search from "./components/ui/Search";
import { AiOutlineHeart } from "react-icons/ai";
import {RiHistoryLine} from 'react-icons/ri'

export default function Home() {
  return (
    <Container>
      <div className="flex flex-row justify-between w-full gap-10">
        <div className="flex-grow lg:w-[75%] w-full">
          <MenuHome />
        </div>

        <div className="hidden lg:w-[25%] lg:flex-grow lg:flex flex-col">
          <div className="mb-8">
            <Search />
          </div>

          <div className="flex flex-col gap-4">
            <MenuAccordian
            title="Your Usual"
            chevron={false}
          />

          <MenuAccordian
            title="Favorites"
            icon={<AiOutlineHeart className="text-2xl text-black" />}
            chevron={true}
          />

          <MenuAccordian
            title="Past Orders"
            icon={<RiHistoryLine className="text-2xl text-black" />}
            chevron={true}
          />
          </div>
          
        </div>
      </div>
    </Container>
  );
}
