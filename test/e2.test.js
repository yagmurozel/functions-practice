import { vitest, it, describe, expect } from "vitest";
import { f } from "../exercises/e2";

describe('rectArea', () => {
    it('The test function should exist', () => {
        expect(f.rectArea).instanceOf(Function);
    });
    it('The value from the final test function should return 83', () => {
        const side1 = 5;
        const side2 = 6;
        expect(f.rectArea(side1, side2)).toEqual(side1 * side2);
    });
});

describe('roomVars', () => {
    it('The variable of Array type should exist', () => {
        expect(f.roomVars).instanceOf(Array);
    });
    it('All rooms variable values should be defined', () => {
        expect(f.roomVars.filter(item => !item)).toEqual([]);
    });
});

describe('result', () => {

    it('The function should exist', () => {
        expect(f.result).instanceOf(Function);
    });
    it('The result should log a message with a proper value', () => {
        const spy = vitest.spyOn(console, 'log');
        f.result();
        expect(spy).toBeCalledTimes(1);
        expect(spy).toBeCalledWith(95);
    });
});

describe('totalRoomsArea', () => {
    it('The test function should exist', () => {
        expect(f.totalRoomsArea).instanceOf(Function);
    });
    it('The value from the final test function should return 83', () => {
        const room1 = f.rectArea(4,6);
        const room2 = f.rectArea(13, 3);
        const room3 = f.rectArea(4, 8);
        expect(f.totalRoomsArea(room1, room2, room3)).toEqual(95);
    });
});
