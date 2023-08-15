import type { JSX } from "solid-js";
import { A } from "@solidjs/router";
import { Component } from "../../../types";

type Props = {
  text: string;
  link: string;
  icon?: JSX.Element;
  iconPosition?: "left" | "right";
  style?: { [key: string]: string | number };
};

const Button: Component<Props> = ({
  text,
  link,
  icon,
  iconPosition = "right",
  style,
}) => {
  return (
    <A
      href={link}
      style={style}
      class="relative inline-flex items-center justify-center p-4 px-10 py-3 overflow-hidden font-medium text-indigo-600 rounded-lg shadow-2xl group"
    >
      <span class="absolute top-0 left-0 w-40 h-40 -mt-10 -ml-3 transition-all duration-700 bg-purple-500 rounded-full blur-md ease"></span>
      <span class="absolute inset-0 w-full h-full transition duration-700 group-hover:rotate-180 ease">
        <span class="absolute bottom-0 left-0 w-24 h-24 -ml-10 bg-sky-500 rounded-full blur-md"></span>
        <span class="absolute bottom-0 right-0 w-24 h-24 -mr-10 bg-pink-500 rounded-full blur-md"></span>
      </span>
      <span class="relative text-white flex items-center justify-center">
        {iconPosition === "left" && icon ? icon : null}
        {text} &nbsp;
        {iconPosition === "right" && icon ? icon : null}
      </span>
    </A>
  );
};

export default Button;
