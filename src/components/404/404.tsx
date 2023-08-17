import Button from "../ui/button";
import { VsArrowLeft } from "solid-icons/vs";

const NotFoundPage = () => {
  return (
    <div class="flex flex-col justify-between items-center text-center mt-5">
      <h1 class="text-8xl bg-clip-text text-transparent bg-gradient-to-r from-sky-300 via-pink-400 to-purple-400">
        404
      </h1>
      <h2 class="mb-8 text-3xl text-sky-400">Sorry, page not found</h2>
      <Button
        text="Back To Home"
        link="/"
        iconPosition="left"
        icon={<VsArrowLeft size={20} />}
      />
    </div>
  );
};

export default NotFoundPage;
