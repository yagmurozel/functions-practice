import { vitest, it, describe, expect } from "vitest";
import { f } from "../exercises/e4";

describe('splitFirstAndLastNames', () => {
  it('The function should exist', () => {
    expect(f.splitFirstAndLastNames).instanceOf(Function);
  });
  it('Should return an array of strings from a string', () => {
    const nameStr = 'Someone Somebodyvich';
    expect(f.splitFirstAndLastNames(nameStr)).toEqual(['Someone', 'Somebodyvich']);
  });
});

describe('personAge', () => {
  it('The function should exist', () => {
    expect(f.personAge).instanceOf(Function);
  });
  it('Should return the value of the age property of the object passed', () => {
    const obj = { id: 1, name: 'Someone', age: 43 };
    expect(f.personAge(obj)).toEqual(43);
  });
});

describe('isNameInArray', () => {
  it('The function should exist', () => {
    expect(f.isNameInArray).instanceOf(Function);
  });
  it('Should return the value of the age property of the object passed', () => {
    const arr = ['Jon', 'Michael', 'Andrey'];
    expect(f.isNameInArray(arr, 'Michael')).toEqual(true);
    expect(f.isNameInArray(arr, 'James')).toEqual(false);
  });
});

describe('logSecondsUpToMax', () => {
  it('The test function should exist', () => {
    expect(f.logSecondsUpToMax).instanceOf(Function);
  });
  it('The function logs a message passed as argument in console', () => {
    const logSpy = vitest.spyOn(console, 'log');
    const max = 10;
    f.logSecondsUpToMax(max);
    setTimeout(() => {
      expect(logSpy).toBeCalledTimes(max);
    }, (max + 1) * 100);
  });
})
