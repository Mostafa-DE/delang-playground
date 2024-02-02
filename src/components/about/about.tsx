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
            <p class="text-sky-200 mt-8 text-center md:w-1/2 sm:w-full text-lg">
              DE is an interpreted, dynamic, high-level programming
              language. It is Javascript-Python-like, combining the two language
              syntaxes to create a straightforward, easy-to-understand language.
            </p>
            <p class="text-sky-200 mt-4 text-center md:w-1/2 sm:w-full text-lg">
              DE was developed as a graduate project and has been under
              development until now. The language provides a unique blend of
              features, and it's built on the solid foundation of the Go
              language, ensuring reliability and robustness.
            </p>
            <p class="text-sky-200 mt-4 text-center md:w-1/2 sm:w-full text-lg">
              If you are interested in the core of Delang, and how it was
              developed
            </p>
            <div class="flex justify-center mt-2">
              <Button text="Read Delang Doc 📄" link={"/doc"} />
            </div>
            <p class="text-sky-200 mt-8 text-center md:w-1/2 sm:w-full text-lg">
              Or you may want to try Delang
            </p>
            <div class="flex justify-center mt-2">
              <Button text="Go For A Tour 🚀" link={"/play"} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
