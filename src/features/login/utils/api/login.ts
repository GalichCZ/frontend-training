import { generateFakeToken } from "../../../../utils/generateFakeToken";

const mockedEmail = "daniil.galitskii@applifting.cz";
const mockedPassword = "IwantToWorkHere";

//mock of login handler
export const login = (email: string, password: string) => {
  if (email === mockedEmail && mockedPassword === password) {
    localStorage.setItem("token", generateFakeToken());
    return { status: 200, response: "Success" };
  } else {
    return { status: 400, response: "Wrong email or password" };
  }
};
