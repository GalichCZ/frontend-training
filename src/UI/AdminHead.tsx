import { Button } from "@mui/material";
import React, { FC } from "react";

interface Props {
  title: string;
  buttonName: string;
  onClick?: () => void;
}

const AdminHead: FC<Props> = ({ title, buttonName, onClick }) => {
  return (
    <div className="admin-head">
      <h1>{title}</h1>
      <Button onClick={onClick} size="small" variant="contained">
        {buttonName}
      </Button>
    </div>
  );
};

export default AdminHead;
