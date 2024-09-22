import {decode} from "./decode.js";

describe('decode', () => {
    it('returns G for R', () => {
        expect(decode('R')).toEqual('G')
    });

    it('returns GE for RT', () => {
        expect(decode('RT')).toEqual('GE')
    });

    it('returns GENERAŁ for RTLTGŻM', () => {
        expect(decode('RTLTGŻM')).toEqual('GENERAŁ')
    });

    it('returns GENERAŁ COFFEE for RTLTGŻM YJSSTT', () => {
        expect(decode('RTLTGŻM YJSSTT')).toEqual('GENERAŁ COFFEE')
    });
});
