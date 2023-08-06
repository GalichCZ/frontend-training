import { useEffect } from "react";
import { setIsAuthorized } from "../store/slice/authorizedSlice";
import { useAppDispatch, useAppSelector } from "./reduxHooks";

const useLoggedIn = () => {
  const dispatch = useAppDispatch();

  const isLoggedIn = useAppSelector((state) => state.authorized.isAuthorized);

  useEffect(() => {
    dispatch(setIsAuthorized());
  }, [dispatch]);

  return isLoggedIn;
};

export default useLoggedIn;
