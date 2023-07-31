import React, { FC } from "react";

interface Props {
  creator: string;
  date: string;
}

const CreatorSpan: FC<Props> = ({ creator, date }) => {
  return (
    <span className="creator-span">
      {creator} <span>&bull;</span> {date}
    </span>
  );
};

export default CreatorSpan;
