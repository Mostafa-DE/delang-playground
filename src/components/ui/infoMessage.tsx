const InfoMessage = (props: { msg: string }) => {
  return (
    <div
      class="flex items-center p-4 mb-4 text-sm text-blue-800 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400"
      role="alert"
    >
      {props.msg}
    </div>
  );
};

export default InfoMessage;
