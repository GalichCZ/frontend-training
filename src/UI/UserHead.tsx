import { MouseEvent, useRef, useState } from "react";
import Menu from "@mui/material/Menu";
import { Button, MenuItem } from "@mui/material";
import img from "../assets/img.png";
import { Link, useNavigate } from "react-router-dom";
import { useAppDispatch } from "../hooks/reduxHooks";
import { logout } from "../store/slice/authorizedSlice";

const UserHead = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };
  const handleDropDownClick = () => {
    if (buttonRef.current) {
      buttonRef.current.click();
    }
  };

  return (
    <div className="user-head">
      <img onClick={handleDropDownClick} src={img} alt="avatar" />
      <Button
        ref={buttonRef}
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        Dashboard
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem>
          <Link to="/create">Create Article</Link>
        </MenuItem>
        <MenuItem>
          <Link to="/myarticles">My Articles</Link>
        </MenuItem>
        <MenuItem onClick={handleLogout}>Logout</MenuItem>
      </Menu>
    </div>
  );
};

export default UserHead;
