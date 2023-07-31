import { stringCut } from "../stringCut";
describe("stringCut.ts", () => {
  it("should return cutted string from 0 to 15 with ... on end if string is longer than 15 symbols", () => {
    expect(stringCut("this string should be longer than 15 symbols")).toBe(
      "this string sho..."
    );
  });

  it("should return original string if it is shorter than 15 symbols", () => {
    expect(stringCut("short string")).toBe("short string");
  });
});
