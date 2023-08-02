import React, { FC } from "react";
import { dateFormat } from "../utils/dateFormat";

interface Props {
  creator: string;
  date: Date;
}

const CreatorSpan: FC<Props> = ({ creator, date }) => {
  return (
    <span className="creator-span">
      {creator} <span>&bull;</span> {dateFormat(date)}
    </span>
  );
};

export default CreatorSpan;
