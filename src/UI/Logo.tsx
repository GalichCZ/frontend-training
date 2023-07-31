import { FC } from "react";
import logo from "../assets/logo.svg";

interface Props {
  className?: string;
}

const Logo: FC<Props> = ({ className }) => {
  return <img src={logo} className={className} alt="cat logo" />;
};

export default Logo;
