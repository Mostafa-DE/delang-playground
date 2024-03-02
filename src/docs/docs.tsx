import type { Component } from "solid-js";
import { onMount } from "solid-js";
import {
  RiArrowsArrowRightDoubleFill,
  RiArrowsArrowLeftDoubleFill,
} from "solid-icons/ri";
import { A } from "@solidjs/router";
import { useParams } from "@solidjs/router";
import { getCurrentSectionData } from "./utils";

type Props = {
  setCode: (code: string) => void;
  exampleData: () => { id: number; slug: string };
  setExample: (example: { id: number; slug: string }) => void;
  getExample: (slug: string) => void;
  html: () => null | string;
  loading: () => boolean;
  error: () => null | string;
};

const Docs: Component<Props> = ({
  exampleData,
  setExample,
  setCode,
  getExample,
  html,
  loading,
  error,
}) => {
  const params = useParams();

  const sectionData = getCurrentSectionData(params.section);

  const handleNextExample = () => {
    const { id } = exampleData();
    if (id >= sectionData.length - 1) {
      return;
    }
    setExample({ id: id + 1, slug: sectionData[id + 1].slug });

    setCode(sectionData[id + 1].code);

    getExample(sectionData[id + 1].slug);
  };

  const handlePrevExample = () => {
    const { id } = exampleData();
    if (id <= 0) {
      return;
    }
    setExample({ id: id - 1, slug: sectionData[id - 1].slug });

    setCode(sectionData[id - 1].code);

    getExample(sectionData[id - 1].slug);
  };

  onMount(() => getExample(params.example));

  return (
    <div class="lg:w-6/12 flex flex-col justify-between h-full bg-gray-800 p-6 text-white">
      <div class="overflow-y-auto">
        <div class="text-white max-w-lg">
          {loading() ? (
            <div class="flex justify-center items-center h-full">
              <div class="rounded-md mt-40 h-12 w-12 border-4 border-t-4 border-blue-500 animate-spin absolute"></div>
            </div>
          ) : (
            <div innerHTML={html() ?? ""}></div>
          )}
          {error() && <div class="text-red-500">{error()}</div>}
        </div>
      </div>
      <div class="flex justify-center mt-4">
        <div class="flex">
          <A
            href={`/play/${params.section}/${
              sectionData[exampleData().id]?.slug
            }`}
            class="relative inline-flex items-center justify-center mr-3 px-1 overflow-hidden font-medium bg-sky-500 rounded-lg shadow-2xl group"
          >
            <span class="relative text-white flex items-center justify-center">
              <RiArrowsArrowLeftDoubleFill
                onclick={handlePrevExample}
                size={22}
              />
            </span>
          </A>
          {exampleData().id + 1} of {sectionData.length}
          <A
            href={`/play/${params.section}/${
              sectionData[exampleData().id]?.slug
            }`}
            class="relative inline-flex items-center justify-center ml-3 px-1 overflow-hidden font-medium bg-sky-500 text-indigo-600 rounded-lg shadow-2xl group"
          >
            <span class="relative text-white flex items-center justify-center">
              <RiArrowsArrowRightDoubleFill
                onClick={handleNextExample}
                size={22}
              />
            </span>
          </A>
        </div>
      </div>
    </div>
  );
};

export default Docs;
