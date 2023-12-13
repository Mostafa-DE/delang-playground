import Button from "../ui/button";
import { VsArrowLeft } from "solid-icons/vs";

const DEDownload = () => {
  const url = import.meta.env.VITE_API_URL;

  window.location.href = `${url}/api/de/ubuntu/de_install.sh`;

  return (
    <div class="flex flex-col justify-center items-center">
      <div class="flex justify-center">
        <h3 class="text-white text-center">
          Downloading DE Installer, please wait a few seconds... If the download
          doesn't start automatically <br /> <br />
          <a
            class="text-sky-100 transition delay-50 hover:text-sky-500 p-1 border-b-2 border-sky-100"
            href={`${url}/api/de/ubuntu/de_install.sh`}
            target="_blank"
          >
            Click here
          </a>
        </h3>
      </div>
      <div class="mt-20">
        <Button
          text="Back To Home"
          link="/"
          iconPosition="left"
          icon={<VsArrowLeft size={20} />}
        />
      </div>
    </div>
  );
};

export default DEDownload;
