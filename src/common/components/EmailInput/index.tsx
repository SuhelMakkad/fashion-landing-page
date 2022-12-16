import Button from "../Button";

const EmailInput = () => {
  return (
    <form onSubmit={(e) => e.preventDefault()} className="flex gap-4 p-2 w-lg mx-auto rounded-lg bg-white">
      <input
        className="flex-1 px-2 bg-transparent w-full text-black"
        type="email"
        placeholder="Add your email here"
        required
      />

      <Button type="submit" intent={"monochrome"} size={"medium"} focusOutlined uppercase>
        Send
      </Button>
    </form>
  );
};

export default EmailInput;
