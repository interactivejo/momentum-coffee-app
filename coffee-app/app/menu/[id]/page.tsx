"use client";
import Container from "@/app/components/layout/Container";
import BackButton from "@/app/components/ui/BackButton";
import { Divider} from "@mui/material";
import Image from "next/image";
import * as React from "react";
import FormSelect from "@/app/components/ui/FormSelect";
import ButtonPrimary from "@/app/components/ui/ButtonPrimary";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

export default function MenuHome() {
  const [isFavorite, setIsFavorite] = React.useState(false);

  return (
    <Container>
      <div className="mb-4">
        <BackButton href="/" />
      </div>
      <div className="flex flex-row justify-between w-full gap-12">
        <div className="lg:w-[55%] w-full">


        <div className="flex flex-row gap-4">
          <div className="flex flex-col gap-8  w-[70%] lg:w-full">
            <h1 className="text-5xl font-semibold font-ObviouslyNarrow">
              Iced Latte
            </h1>
            <p className="font-Futura">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo
              exercitationem tempore sunt adipisci ex magni! Natus at laborum
              eum quaerat sunt quibusdam, dolorem esse, nam sint, dolor optio
              adipisci magni!
            </p>
          </div>
          <div className="relative flex flex-col justify-start w-[30%] align-middle lg:hidden xl:justify-center">
            <Image
              className="border-[1px]"
              src="/images/iced-latte.jpeg"
              alt="Iced Latte"
              fill={true}
              style={{
                objectFit: "cover",
              }}
              sizes="100%"
            />
          </div>
        </div>
        
        <div className="py-8">
          <Divider />
        </div>
          

          <div className="flex flex-col gap-8 mb-8">
            <h2 className="text-2xl font-semibold uppercase font-ObviouslyNarrow">
              Customizations
            </h2>

            <FormSelect
              label="Milk"
              items={[
                "2% Milk",
                "Skim Milk",
                "Almond Milk",
                "Oat Milk",
                "Soy Milk",
              ]}
            />
            <FormSelect
              label="Ice"
              items={["Light Ice", "Regular Ice", "Extra Ice"]}
            />
          </div>

          <div className="flex flex-col gap-8 mb-8">
            <h2 className="text-2xl font-semibold uppercase font-ObviouslyNarrow">
              Add-Ons
            </h2>

            <FormSelect
              label="Syrup"
              items={[
                "Vanilla",
                "Caramel",
                "Hazelnut",
                "Mocha",
                "Pumpkin Spice",
              ]}
              qnty={true}
            />
            <FormSelect
              label="Shots"
              items={["Extra Shot", "Double Shot", "Triple Shot"]}
              qnty={true}
            />
          </div>

          <div className="flex flex-col gap-8">
            <h2 className="text-2xl font-semibold uppercase font-ObviouslyNarrow">
              Notes
            </h2>

            <textarea
              className="w-full p-2 border-[1px] border-[#000000] rounded-[0px] font-Futura focus:outline-none align-top"
              maxLength={250}
            ></textarea>
          </div>

          <div className="flex flex-row items-center gap-4 pt-8">
            <ButtonPrimary cta="Add to Cart" />

            <div
              className="text-[#F15D2A] cursor-pointer"
              onClick={() => setIsFavorite(!isFavorite)}
            >
              {isFavorite ? (
                <AiFillHeart size={24} className="" />
              ) : (
                <AiOutlineHeart size={24} className="" />
              )}
            </div>
          </div>
        </div>

        <div className="hidden relative lg:flex flex-col justify-start lg:w-[45%] align-middle xl:justify-center">
          <Image
            className="border-[1px]"
            src="/images/iced-latte.jpeg"
            alt="Iced Latte"
            fill={true}
            style={{
              objectFit: "cover",
            }}
            sizes="100%"
          />
        </div>
      </div>
    </Container>
  );
}
