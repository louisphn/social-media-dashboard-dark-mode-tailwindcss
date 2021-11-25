import React from "react";

import ProfileCard from "../profile/ProfileCard";
import OverviewCard from "../overview/OverviewCard";
import { data, overview } from "../../lib/data";

const CardContainer = (props) => {
  const { kind } = props;

  const currentData = kind === "profile" ? data : overview;
  return (
    <div className="w-screen flex flex-col items-center md:w-11/12 md:justify-around md:flex-row md:flex-wrap md:gap-4">
      {currentData.map((data, index) => (
        <React.Fragment key={`${data.type}-${data.stats.type}-${index}`}>
          {kind === "profile" ? (
            <ProfileCard
              type={data.type}
              followers={data.followers}
              userName={data.userName}
              stats={data.stats}
            />
          ) : (
            <OverviewCard
              type={data.type}
              number={data.number}
              stats={data.stats}
            />
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default CardContainer;
