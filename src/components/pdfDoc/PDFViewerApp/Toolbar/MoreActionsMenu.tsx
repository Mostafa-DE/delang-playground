import { type JSX } from "solid-js";
import { DropdownMenu } from "@kobalte/core";
import {
  VsKebabVertical,
  VsRefresh,
  VsFilePdf,
  VsArrowBoth,
  VsCheck,
  VsExport,
  VsPlay,
} from "solid-icons/vs";
import { ScrollMode, type PDFSlickState } from "@pdfslick/solid";

type MoreActionsMenuProps = {
  store: PDFSlickState;
};

const MoreActionsMenu = ({ store }: MoreActionsMenuProps) => {
  let openPdfFileRef!: HTMLInputElement;

  const handleOpenPdfFile: JSX.ChangeEventHandlerUnion<
    HTMLInputElement,
    Event
  > = (e) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const url = URL.createObjectURL(file);
      store.pdfSlick?.loadDocument(url, { filename: file.name });
    }
  };

  return (
    <>
      <div class="absolute overflow-hidden w-0 h-0">
        <input
          id="openPdfFileAction"
          ref={openPdfFileRef}
          tabIndex={-1}
          type="file"
          accept=".pdf,application/pdf"
          onChange={handleOpenPdfFile}
          class="absolute -top-[10000px]"
        />
      </div>
      <DropdownMenu.Root modal={false}>
        <DropdownMenu.Trigger
          class="enabled:hover:bg-slate-200 enabled:hover:text-black text-slate-500 disabled:text-slate-300 p-1 rounded-sm transition-all group relative focus:border-blue-400 focus:ring-0 focus:shadow outline-none border border-transparent"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
          }}
        >
          <span class="sr-only">Open more actions menu</span>
          <VsKebabVertical class="w-4 h-4" />
        </DropdownMenu.Trigger>
        <DropdownMenu.Portal>
          <DropdownMenu.Content
            class="absolute right-2 w-52 z-30 mt-2 origin-top-right divide-y divide-slate-200 rounded text-left bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none animate-content-hide ui-expanded:animate-content-show"
            role="menu"
            aria-orientation="vertical"
            tabindex="-1"
          >
            <div class="py-1">
              <DropdownMenu.Item
                onSelect={() => {
                  store.pdfSlick?.requestPresentationMode();
                }}
                class="w-full cursor-pointer items-center flex space-x-2 box-border text-left px-2 py-1.5 text-xs ui-disabled:opacity-50 ui-highlighted:bg-slate-100 ui-highlighted:text-gray-900 ui-not-highlighted:text-gray-700"
              >
                <VsPlay class="w-4 h-4" />
                <span>Presentation Mode</span>
              </DropdownMenu.Item>
            </div>

            <div class="py-1">
              <DropdownMenu.Item
                disabled={store.pageNumber === 1}
                onSelect={() => {
                  store.pdfSlick?.gotoPage(1);
                }}
                class="w-full cursor-pointer items-center flex space-x-2 box-border text-left px-2 py-1.5 text-xs ui-disabled:opacity-50 ui-highlighted:bg-slate-100 ui-highlighted:text-gray-900 ui-not-highlighted:text-gray-700"
              >
                <VsExport class="w-4 h-4 -rotate-90" />
                <span>Go to First Page</span>
              </DropdownMenu.Item>
              <DropdownMenu.Item
                disabled={store.pageNumber === store.numPages}
                onSelect={() => {
                  store.pdfSlick?.gotoPage(store.numPages);
                }}
                class="w-full cursor-pointer items-center flex space-x-2 box-border text-left px-2 py-1.5 text-xs ui-disabled:opacity-50 ui-highlighted:bg-slate-100 ui-highlighted:text-gray-900 ui-not-highlighted:text-gray-700"
              >
                <VsExport class="w-4 h-4 rotate-90" />
                <span>Go to Last Page</span>
              </DropdownMenu.Item>
            </div>

            <div class="py-1">
              <DropdownMenu.Item
                closeOnSelect={false}
                onSelect={() => {
                  store.pdfSlick?.setRotation(store.pagesRotation + 90);
                }}
                class="w-full cursor-pointer items-center flex space-x-2 box-border text-left px-2 py-1.5 text-xs ui-disabled:opacity-50 ui-highlighted:bg-slate-100 ui-highlighted:text-gray-900 ui-not-highlighted:text-gray-700"
              >
                <VsRefresh class="w-4 h-4" />
                <span>Rotate Clockwise</span>
              </DropdownMenu.Item>
              <DropdownMenu.Item
                closeOnSelect={false}
                onSelect={() => {
                  store.pdfSlick?.setRotation(store.pagesRotation - 90);
                }}
                class="w-full cursor-pointer items-center flex space-x-2 box-border text-left px-2 py-1.5 text-xs ui-disabled:opacity-50 ui-highlighted:bg-slate-100 ui-highlighted:text-gray-900 ui-not-highlighted:text-gray-700"
              >
                <VsRefresh class="w-4 h-4 -scale-x-100 scale-y-100" />
                <span>Rotate Counterclockwise</span>
              </DropdownMenu.Item>
            </div>

            <div class="py-1">
              <DropdownMenu.Item
                onSelect={() => {
                  store.pdfSlick?.setScrollMode(ScrollMode.PAGE);
                }}
                class="w-full cursor-pointer items-center flex space-x-2 box-border text-left px-2 py-1.5 text-xs ui-disabled:opacity-50 ui-highlighted:bg-slate-100 ui-highlighted:text-gray-900 ui-not-highlighted:text-gray-700"
              >
                <VsFilePdf class="w-4 h-4" />
                <span class="flex-1">Page Scrolling</span>
                {store.scrollMode === ScrollMode.PAGE && (
                  <VsCheck class="w-3" />
                )}
              </DropdownMenu.Item>
              <DropdownMenu.Item
                onSelect={() => {
                  store.pdfSlick?.setScrollMode(ScrollMode.VERTICAL);
                }}
                class="w-full cursor-pointer items-center flex space-x-2 box-border text-left px-2 py-1.5 text-xs ui-disabled:opacity-50 ui-highlighted:bg-slate-100 ui-highlighted:text-gray-900 ui-not-highlighted:text-gray-700"
              >
                <VsArrowBoth class="w-4 h-4 rotate-90" />
                <span class="flex-1">Vertical Scrolling</span>
                {store.scrollMode === ScrollMode.VERTICAL && (
                  <VsCheck class="w-3" />
                )}
              </DropdownMenu.Item>
              <DropdownMenu.Item
                onSelect={() => {
                  store.pdfSlick?.setScrollMode(ScrollMode.HORIZONTAL);
                }}
                class="w-full cursor-pointer items-center flex space-x-2 box-border text-left px-2 py-1.5 text-xs ui-disabled:opacity-50 ui-highlighted:bg-slate-100 ui-highlighted:text-gray-900 ui-not-highlighted:text-gray-700"
              >
                <VsArrowBoth class="w-4 h-4" />
                <span class="flex-1">Horizontal Scrolling</span>
                {store.scrollMode === ScrollMode.HORIZONTAL && (
                  <VsCheck class="w-3" />
                )}
              </DropdownMenu.Item>
            </div>
          </DropdownMenu.Content>
        </DropdownMenu.Portal>
      </DropdownMenu.Root>
    </>
  );
};

export default MoreActionsMenu;
