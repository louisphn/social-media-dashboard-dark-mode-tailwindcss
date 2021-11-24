import IconArea from "../common/IconArea";
import { icon } from "../../lib/data";
import { kFormatter } from "../../lib/helper";

// stats: {type: string, stat: number} (type: increase/ decrease, stat: number of increment/ decrement);

const ProfileCard = (props) => {
  const { userName, type, followers, stats } = props;

  return (
    <div
      className={`w-11/12 h-[220px] relative rounded-xl overflow-hidden my-8 ${
        type !== "instagram"
          ? `bg-${type}-primary`
          : "bg-gradient-to-r from-instagram-start to-instagram-end"
      } md:w-[21%]`}
    >
      <div
        className={`flex flex-col pointer-events-auto cursor-pointer hover:filter hover:brightness-95 dark:hover:brightness-125 rounded-lg items-center justify-center w-full h-full top-[4px] left-0 absolute bg-background-card-light dark:bg-background-card-dark`}
      >
        <div className="flex">
          <div className="block w-[24px] h-[24px] mb-4">
            <IconArea
              src={icon[type]}
              layout={"responsive"}
              width={56}
              height={56}
              objectFit={"cover"}
            />
          </div>
          <p className="font-bold ml-[8px] text-text-light dark:text-text-dark">{`@${userName}`}</p>
        </div>
        <div className="w-full h-3/6 flex flex-col items-center justify-between">
          <div className="flex flex-col items-center justify-center">
            <h3 className="text-5xl font-bold text-heading-text-light dark:text-heading-text-dark">
              {kFormatter(followers)}
            </h3>
            <p className="text-text-light dark:text-text-dark">FOLLOWERS</p>
          </div>
          <div className="flex items-center jutstify-center">
            <IconArea
              src={
                stats.type === "increase" ? "/icon-up.svg" : "/icon-down.svg"
              }
              width={12}
              height={8}
              objectFit={"contain"}
            />
            <p
              className={`ml-[8px] ${
                stats.type === "increase"
                  ? "text-lime-green"
                  : "text-bright-red"
              }`}
            >
              {stats.stat} Today
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
