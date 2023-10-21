import logo from "../../assets/delang.png";
import { SiGithub } from "solid-icons/si";
import { AiFillLinkedin } from "solid-icons/ai";
import { AiOutlineTwitter } from "solid-icons/ai";
import { A } from "@solidjs/router";

const Header = () => {
  return (
    <div class="w-full container mx-auto">
      <div class="w-full flex items-center justify-between">
        <A
          class="flex items-center text-sky-300 no-underline hover:no-underline font-bold text-2xl lg:text-4xl"
          href="/"
        >
          <img src={logo} height={35} width={35} /> &nbsp; DE
          <span class="bg-clip-text text-transparent bg-gradient-to-r from-sky-300 via-pink-400 to-purple-400">
            Lang
          </span>
        </A>
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
  );
};

export default Header;
