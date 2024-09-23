import { encode } from "./encode.js";

describe("encode", () => {
  it("returns R for G", () => {
    expect(encode("G")).toEqual("R");
  });

  it("returns RTLTGŻM for GENERAŁ", () => {
    expect(encode("GENERAŁ")).toEqual("RTLTGŻM");
  });

  it("returns RTLTGŻM YJSSTT for GENERAŁ COFFEE", () => {
    expect(encode("GENERAŁ COFFEE")).toEqual("RTLTGŻM YJSSTT");
  });

  it("returns 'Rtltgżm Yjsstt lót łóżm mjłd' for 'Generał Coffee nie miał łomu'", () => {
    expect(encode("Generał Coffee nie miał łomu")).toEqual(
      "Rtltgżm Yjsstt lót łóżm mjłd"
    );
  });
});
