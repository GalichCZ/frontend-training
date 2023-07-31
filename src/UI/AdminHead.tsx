import { Button } from "@mui/material";
import React, { FC } from "react";

interface Props {
  title: string;
  buttonName: string;
}

const AdminHead: FC<Props> = ({ title, buttonName }) => {
  return (
    <div className="admin-head">
      <h1>{title}</h1>
      <Button size="small" variant="contained">
        {buttonName}
      </Button>
    </div>
  );
};

export default AdminHead;
