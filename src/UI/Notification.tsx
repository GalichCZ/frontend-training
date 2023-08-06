import { Alert } from "@mui/material";
import { FC } from "react";
import { createPortal } from "react-dom";

interface Props {
  severity: "error" | "warning" | "info" | "success";
  content: string;
}

const Notification: FC<Props> = ({ severity, content }) => {
  return (
    <>
      {createPortal(
        <Alert className="notification" severity={severity}>
          {content}
        </Alert>,
        document.body
      )}
    </>
  );
};

export default Notification;
