import EmailInput from "../EmailInput";

const EmailForm = () => {
  return (
    <section
      className={`
        flex flex-col gap-8 px-4 py-24
        full-bleed bg-yellow-300 shadow-yellow-300 shadow-[0_0_0_100vmax]
      `}
    >
      <h4 className="text-4xl  mx-auto font-bold max-w-xl text-center text-white uppercase">
        JOIN SHOPPING COMMUNITY TO GET MONTHLY PROMO
      </h4>

      <p className="text-xl font-medium text-white text-center">
        Type your email down below and be young wild generation
      </p>

      <EmailInput />
    </section>
  );
};

export default EmailForm;
