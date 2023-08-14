import type { Component } from "solid-js";

import logo from "../../assets/delang.png";
import { SiGithub } from "solid-icons/si";
import { AiFillLinkedin } from "solid-icons/ai";
import { AiOutlineTwitter } from "solid-icons/ai";
import { VsRunAll } from "solid-icons/vs";
import { A } from "@solidjs/router";

import macbook from "../../assets/terminal.gif";

const Home: Component = () => {
  return (
    <>
      <div class="h-full">
        <div class="w-full container mx-auto">
          <div class="w-full flex items-center justify-between">
            <a
              class="flex items-center text-sky-300 no-underline hover:no-underline font-bold text-2xl lg:text-4xl"
              href="#"
            >
              <img src={logo} height={35} width={35} /> &nbsp; DE
              <span class="bg-clip-text text-transparent bg-gradient-to-r from-sky-300 via-pink-400 to-purple-400">
                Lang
              </span>
            </a>
            <div class="flex w-1/2 justify-end content-center">
              <a
                href="https://github.com/Mostafa-DE"
                class="hover:cursor-pointer mr-5 mt-0.5"
                target="_blank"
              >
                <SiGithub size={25} fill="#fff" />
              </a>
              <a
                href="https://www.linkedin.com/in/mostafa-de/"
                class="hover:cursor-pointer"
                target="_blank"
              >
                <AiFillLinkedin size={30} fill="#fff" />
              </a>
              <a
                href="https://twitter.com/m_fayyad0_0"
                class="hover:cursor-pointer ml-5"
                target="_blank"
              >
                <AiOutlineTwitter size={30} fill="#fff" />
              </a>
            </div>
          </div>
        </div>
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
            <div>
              <A
                href="/play"
                class="relative inline-flex items-center justify-center p-4 px-10 py-3 overflow-hidden font-medium text-indigo-600 rounded-lg shadow-2xl group"
              >
                <span class="absolute top-0 left-0 w-40 h-40 -mt-10 -ml-3 transition-all duration-700 bg-purple-500 rounded-full blur-md ease"></span>
                <span class="absolute inset-0 w-full h-full transition duration-700 group-hover:rotate-180 ease">
                  <span class="absolute bottom-0 left-0 w-24 h-24 -ml-10 bg-sky-500 rounded-full blur-md"></span>
                  <span class="absolute bottom-0 right-0 w-24 h-24 -mr-10 bg-pink-500 rounded-full blur-md"></span>
                </span>
                <span class="relative text-white flex items-center justify-center">
                  Start Coding &nbsp;
                  <VsRunAll size={25} />
                </span>
              </A>
            </div>
            <div></div>
          </div>
          <div class="w-full xl:w-3/5 md:flex md:justify-center p-12 overflow-hidden">
            <img
              class="w-full xl:w-4/5 lg:2-3/5 md:w-2/5 transform -rotate-6 transition hover:scale-105 duration-700 ease-in-out hover:rotate-6"
              src={macbook}
            />
          </div>
        </div>
      </div>
      <a
        class="no-underline text-sky-100 transition delay-50 hover:text-sky-500"
        href="https://mostafade.com"
        target="_blank"
      >
        By Mostafa-DE Fayyad
      </a>
    </>
  );
};

export default Home;
