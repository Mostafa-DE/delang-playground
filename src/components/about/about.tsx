import type { Component } from "solid-js";
import Header from "../header";
import Button from "../ui/button";

const About: Component = () => {
  return (
    <>
      <div class="h-full">
        <Header />
        <div>
          <h1 class="text-3xl text-center mt-8 md:text-4xl text-white opacity-75 font-bold leading-tight">
            <span class="bg-clip-text text-transparent bg-gradient-to-r from-sky-300 via-pink-400 to-purple-400">
              About Delang
            </span>
          </h1>
          <div class="flex flex-col justify-center items-center">
            <p class="text-sky-300 mt-8 text-center md:w-1/2 sm:w-full text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              a quibusdam, quia, voluptatum, voluptatem voluptas quod quos quas
              ea a autem Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Quisquam a quibusdam, quia, voluptatum, voluptatem voluptas
              quod quos quas ea a autem
            </p>
            <p class="text-sky-300 mt-4 text-center md:w-1/2 sm:w-full text-lg">
              a quibusdam, quia, voluptatum, voluptatem voluptas quod quos quas
              ea a autem Lorem ipsum dolor sit amet consectetur adipisicing ea a
              autem Lorem ipsum dolor sit amet consectetur adipisicing
            </p>
            <div class="flex justify-center mt-8">
              <Button text="Read Delang PDF Doc 📄" link={"/de-doc"} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
