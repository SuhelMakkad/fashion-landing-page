import appStoreImg from "@/images/app/app-store.png";
import playStoreImg from "@/images/app/play-store.png";

type AppStoreImgProp = {
  storeType: "app-store" | "play-store";
  width: number;
};

const AppStoreImg = ({ storeType = "app-store", width }: AppStoreImgProp) => {
  return (
    <span className="transition-transform cursor-pointer hover:-translate-y-0.5 active:translate-y-px hover:drop-shadow-xl active:drop-shadow-md">
      {storeType === "app-store" ? (
        <a href="#">
          <img width={width} src={appStoreImg} alt="Link to the app store" />
        </a>
      ) : (
        <a href="#">
          <img width={width} src={playStoreImg} alt="Link to the play store" />
        </a>
      )}
    </span>
  );
};

export default AppStoreImg;
