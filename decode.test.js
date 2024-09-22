import {decode} from "./decode.js";

describe('decode', () => {
    it('returns G for R', () => {
        expect(decode('R')).toEqual('G')
    });

    it('returns E for T', () => {
        expect(decode('T')).toEqual('E')
    });

    it('returns GE for RT', () => {
        expect(decode('RT')).toEqual('GE')
    });

    it('returns GENERAŁ for RTLTGŻM', () => {
        expect(decode('RTLTGŻM')).toEqual('GENERAŁ')
    });
});
