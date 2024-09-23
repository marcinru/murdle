import { decode } from "./decode.js";

describe("decode", () => {
  it("returns G for R", () => {
    expect(decode("R")).toEqual("G");
  });

  it("returns GENERAŁ for RTLTGŻM", () => {
    expect(decode("RTLTGŻM")).toEqual("GENERAŁ");
  });

  it("returns GENERAŁ COFFEE for RTLTGŻM YJSSTT", () => {
    expect(decode("RTLTGŻM YJSSTT")).toEqual("GENERAŁ COFFEE");
  });

  it("returns 'Generał Coffee nie miał łomu' for 'Rtltgżm Yjsstt lót łóżm mjłd'", () => {
    expect(decode("Rtltgżm Yjsstt lót łóżm mjłd")).toEqual(
      "Generał Coffee nie miał łomu"
    );
  });
});
