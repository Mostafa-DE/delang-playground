import { createEffect, createSignal, type Accessor, onCleanup } from "solid-js";
import {
  VsChevronDown,
  VsChevronUp,
  VsLayoutSidebarLeft,
  VsLayoutSidebarLeftOff,
} from "solid-icons/vs";
import ZoomSelector from "./ZoomSelector";
import InkMenu from "./InkMenu";
import FreetextMenu from "./FreetextMenu";
import Splitter from "./Splitter";

import { type PDFSlickState } from "@pdfslick/solid";
import MoreActionsMenu from "./MoreActionsMenu";
import { A } from "@solidjs/router";
import { AiOutlineArrowLeft } from "solid-icons/ai";

type ToolbarProps = {
  store: PDFSlickState;
  isThumbsbarOpen: Accessor<boolean>;
  setIsThumbsbarOpen: (s: boolean) => void;
};

const Toolbar = ({
  store,
  isThumbsbarOpen,
  setIsThumbsbarOpen,
}: ToolbarProps) => {
  let pageNumberRef!: HTMLInputElement;

  const [wantedPageNumber, setWantedPageNumber] = createSignal<number | string>(
    1
  );

  const updatePageNumber = ({ pageNumber }: any) => {
    setWantedPageNumber(pageNumber);
  };

  createEffect(() => {
    if (store.pdfSlick) {
      store.pdfSlick?.on("pagechanging", updatePageNumber);
    }
  });

  onCleanup(() => {
    store.pdfSlick?.off("pagechanging", updatePageNumber);
  });

  return (
    <>
      <div class="w-full overflow-x-auto h-9 flex items-center justify-between bg-slate-50 border-b border-b-slate-300 shadow-sm text-xs select-none sticky top-0 bg-opacity-100 backdrop-blur z-10">
        <div class="px-1 flex items-center space-x-1">
          <A
            class={`flex enabled:hover:bg-slate-200 enabled:hover:text-black text-slate-500 disabled:text-slate-300 p-1 rounded-sm transition-all group relative focus:border-blue-400 focus:ring-0 focus:shadow outline-none border border-transparent`}
            href="/about"
          >
            <AiOutlineArrowLeft class="h-4 w-4 mr-2" />
            <span class="text-black">Back</span>
          </A>

          <div class="hidden md:flex">
            <Splitter />
          </div>

          <div class="hidden md:flex">
            <button
              class={`enabled:hover:bg-slate-200 enabled:hover:text-black text-slate-500 disabled:text-slate-300 p-1 rounded-sm transition-all group relative focus:border-blue-400 focus:ring-0 focus:shadow outline-none border border-transparent`}
              onClick={() => setIsThumbsbarOpen(!isThumbsbarOpen())}
            >
              {isThumbsbarOpen() ? (
                <VsLayoutSidebarLeftOff class="h-4 w-4" />
              ) : (
                <VsLayoutSidebarLeft class="h-4 w-4" />
              )}
            </button>
          </div>

          <Splitter />

          <ZoomSelector {...{ store }} />

          <Splitter />

          <button
            disabled={store.pageNumber <= 1}
            class="enabled:hover:bg-slate-200 enabled:hover:text-black text-slate-500 disabled:text-slate-300 p-1 rounded-sm transition-all group relative focus:border-blue-400 focus:ring-0 focus:shadow outline-none border border-transparent"
            onClick={() => store.pdfSlick?.viewer?.previousPage()}
          >
            <VsChevronUp class="h-4 w-4" />
          </button>

          <button
            disabled={!store.pdfSlick || store.pageNumber >= store.numPages}
            class="enabled:hover:bg-slate-200 enabled:hover:text-black text-slate-500 disabled:text-slate-300 p-1 rounded-sm transition-all group relative focus:border-blue-400 focus:ring-0 focus:shadow outline-none border border-transparent"
            onClick={() => store.pdfSlick?.viewer?.nextPage()}
          >
            <VsChevronDown class="h-4 w-4" />
          </button>

          <div class="flex items-center text-center space-x-2">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const newPageNumber = parseInt(wantedPageNumber() + "");

                if (
                  Number.isInteger(newPageNumber) &&
                  newPageNumber > 0 &&
                  newPageNumber <= store.numPages
                ) {
                  store.pdfSlick?.linkService.goToPage(newPageNumber);
                } else {
                  setWantedPageNumber(store.pageNumber);
                }
              }}
            >
              <input
                ref={pageNumberRef}
                type="text"
                value={wantedPageNumber()}
                class="block w-12 text-right rounded-sm border border-slate-300 focus:shadow focus:border-blue-400 focus:ring-0 outline-none text-xs p-1 px-1.5 placeholder:text-gray-300 focus:placeholder:text-gray-400 placeholder:italic"
                onFocus={() => pageNumberRef!.select()}
                onChange={(e) => {
                  setWantedPageNumber(e.currentTarget.value);
                }}
                onKeyDown={(e) => {
                  switch (e.key) {
                    case "Down":
                    case "ArrowDown":
                      store.pdfSlick?.gotoPage(
                        Math.max(1, (store.pageNumber ?? 0) - 1)
                      );
                      break;
                    case "Up":
                    case "ArrowUp":
                      store.pdfSlick?.gotoPage(
                        Math.min(
                          store.numPages ?? 0,
                          (store.pageNumber ?? 0) + 1
                        )
                      );
                      break;
                    default:
                      return;
                  }
                }}
              />
            </form>

            <span class="w-8"> of {store.numPages}</span>
          </div>
        </div>

        <div class="px-1 space-x-1 flex items-center justify-end">
          <div class="hidden md:flex">
            <FreetextMenu {...{ store }} />
            <InkMenu {...{ store }} />
          </div>

          <Splitter />

          <div class="hidden md:block">
            <MoreActionsMenu {...{ store }} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Toolbar;
