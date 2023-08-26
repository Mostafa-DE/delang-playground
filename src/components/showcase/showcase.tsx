import { VsRunAll } from "solid-icons/vs";

import macbook from "../../assets/terminal.gif";
import Button from "../ui/button/";

const Showcase = () => {
  return (
    <div class="container pt-20 md:pt-18 mx-auto flex flex-wrap flex-col md:flex-row items-center">
      <div class="flex flex-col w-full xl:w-2/5 justify-center lg:items-start overflow-y-hidden">
        <h1 class="my-4 text-3xl md:text-5xl text-white opacity-75 font-bold leading-tight text-center md:text-left">
          Welcom to &nbsp; <br />
          <span class="bg-clip-text text-transparent bg-gradient-to-r from-sky-300 via-pink-400 to-purple-400">
            DE Language
          </span>{" "}
          🚀
        </h1>
        <p class="leading-normal text-sky-300 text- md:text-2xl mb-8 text-center md:text-left">
          Unleash innovation in code with DE - where simplicity meets
          versatility.
        </p>
        <div class="flex justify-center">
          <Button
            text="Start Coding"
            icon={<VsRunAll size={25} />}
            link={"/play"}
            iconPosition={"right"}
          />
        </div>
      </div>
      <div class="w-full xl:w-3/5 md:flex md:justify-center p-12 overflow-hidden">
        <img
          class="w-full xl:w-4/5 lg:2-3/5 md:w-2/5 transform -rotate-6 transition hover:scale-105 duration-700 ease-in-out hover:rotate-6"
          src={macbook}
        />
      </div>
    </div>
  );
};

export default Showcase;
