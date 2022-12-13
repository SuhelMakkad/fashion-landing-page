import Button from "../Button";

const EmailInput = () => {
  return (
    <div className="flex gap-4 p-2 w-lg mx-auto rounded-lg bg-white">
      <input
        className="flex-1 px-2 bg-transparent w-full"
        type="email"
        placeholder="Add your email here"
      />

      <Button intent={"monochrome"} size={"medium"} focusOutlined uppercase>
        Send
      </Button>
    </div>
  );
};

export default EmailInput;
