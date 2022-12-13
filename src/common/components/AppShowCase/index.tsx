import appImage from "@/images/app/app.png";
import AppStoreImg from "../AppStoreImg";
import BgRing from "../BgRing";

const AppShowCase = () => {
  return (
    <section className="flex items-center max-lg:flex-col-reverse justify-around gap-8 max-lg:text-center overflow-hidden">
      <div className="flex flex-col gap-8">
        <h3 className="text-3xl max-lg:text-2xl font-bold">
          DOWNLOAD APP & <br /> GET THE VOUCHER!
        </h3>

        <p className="max-w-sm text-base max-lg:text-sm">
          Get 30% off for first transaction using Rondovision mobile app for now.
        </p>

        <div className="flex items-center max-lg:justify-center gap-5">
          <AppStoreImg storeType="app-store" width={140} />
          <AppStoreImg storeType="play-store" width={140} />
        </div>
      </div>

      <div className="relative">
        <img width={370} src={appImage} alt="Image of the mobile app" />

        <BgRing size={"small"} />
        <BgRing size={"medium"} />
        <BgRing size={"large"} />

        <span className="block w-8 h-8 rounded-full bg-yellow-500 absolute top-16 -right-4"></span>
        <span className="block w-4 h-4 rounded-full bg-slate-400 absolute top-12 -left-4"></span>
        <span className="block w-5 h-5 rounded-full bg-yellow-500 absolute bottom-24 -left-8"></span>
        <span className="block w-2 h-2 rounded-full bg-slate-400 absolute bottom-32 -right-8"></span>
      </div>
    </section>
  );
};

export default AppShowCase;
