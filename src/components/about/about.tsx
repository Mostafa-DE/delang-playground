import type { Component } from "solid-js";
import Header from "../header";
import Button from "../ui/button";

const About: Component = () => {
  return (
    <>
      <div class="h-full">
        <Header />
        <div>
          <h1 class="text-5xl text-center text-white">About Delang</h1>
          <div class="flex flex-col justify-center items-center">
            <p class="text-sky-300 mt-16 text-center w-1/2 text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              a quibusdam, quia, voluptatum, voluptatem voluptas quod quos quas
              ea a autem Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Quisquam a quibusdam, quia, voluptatum, voluptatem voluptas
              quod quos quas ea a autem <br /> <br />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              a quibusdam, quia, voluptatum, voluptatem voluptas quod quos quas
              ea a autem Lorem ipsum dolor sit amet consectetur adipisicing ea a
              autem Lorem ipsum dolor sit amet consectetur adipisicing
              <br /> <br />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              a quibusdam, quia, voluptatum, voluptatem voluptas quod quos quas
              ea a autem Lorem ipsum dolor sit amet consectetur adipisicing ea a
              autem Lorem ipsum dolor sit amet consectetur adipisicing
            </p>

            <div class="flex justify-center mt-8">
              <Button text="Read Delang PDF Doc 📄" link={"/pdf-doc"} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
