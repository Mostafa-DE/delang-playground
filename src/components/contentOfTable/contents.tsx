import { createSignal } from "solid-js";

const Contents = () => {
  const [showDrawer, setShowDrawer] = createSignal(false);

  const handleShowDrawer = () => {
    setShowDrawer(!showDrawer());
    const drawer = document.querySelector("#drawer");
    if (drawer) {
      if (showDrawer()) {
        drawer.classList.remove("translate-x-full");
        return;
      }

      drawer.classList.add("translate-x-full");
    }
  };

  return (
    <>
      <div class="text-center">
        <button
          class="text-white bg-sky-500 hover:bg-sky-500 focus:ring-4 focus:ring-sky-500 font-medium rounded-lg text-sm px-5 py-1.5 mr-2 mb-2 dark:bg-sky-500 dark:hover:bg-sky-600 focus:outline-none dark:focus:ring-sky-700"
          onClick={handleShowDrawer}
        >
          contents
        </button>
      </div>

      <div
        id="drawer"
        class="fixed top-0 right-0 z-40 h-screen p-4 overflow-y-auto translate-x-full transition-transform bg-white w-80 dark:bg-gray-800"
        tabindex="-1"
      >
        <h5
          id="drawer-right-label"
          class="inline-flex items-center mb-4 text-base font-semibold text-gray-500 dark:text-gray-400"
        >
          Table of contents
        </h5>
        <button
          type="button"
          onClick={handleShowDrawer}
          class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 absolute top-2.5 right-2.5 inline-flex items-center justify-center dark:hover:bg-gray-600 dark:hover:text-white"
        >
          <svg
            class="w-3 h-3"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 14"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
            />
          </svg>
        </button>
        <p class="mb-6 text-sm text-gray-500 dark:text-gray-400">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          necessitatibus incidunt ut officiis explicabo inventore.
        </p>
      </div>
    </>
  );
};

export default Contents;
