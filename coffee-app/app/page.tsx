"use client";
import Container from "./components/layout/Container";
import MenuHome from "./components/sections/MenuHome";
import Search from "./components/ui/Search";

export default function Home() {
  return (
    <Container>
      <div className="flex flex-row justify-between w-full gap-10">
        <div className="flex-grow lg:w-[75%] w-full">
          <MenuHome />
        </div>

        <div className="hidden lg:w-[25%] lg:flex-grow lg:flex flex-col">
          <Search />
        </div>
      </div>
    </Container>
  );
}
