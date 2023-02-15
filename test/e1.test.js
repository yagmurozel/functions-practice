import { vitest, it, describe, expect } from "vitest";
import { f } from "../exercises/e1";

const name = "Andrey";
const age = 18;
const message = 'Here is my first output ever!'

describe('logMessage', () => {
    it('The test function should exist', () => {
        expect(f.logMessage).instanceOf(Function);
    });
    it('The function logs a message in console', async () => {
        const logSpy = vitest.spyOn(console, 'log');
        f.logMessage();
        expect(logSpy).toBeCalledTimes(1);
        expect(logSpy).toBeCalledWith('Hello, World!');
    });
})

describe('logMyMessage', () => {
    it('The test function should exist', () => {
        expect(f.logMyMessage).instanceOf(Function);
    });
    it('The function logs a message passed as argument in console', () => {
        const logSpy = vitest.spyOn(console, 'log');
        f.logMyMessage(message);
        expect(logSpy).toBeCalledTimes(1);
        expect(logSpy).toBeCalledWith(message);
    });
})

describe('logMessageWithMyName', () => {
    it('The test function should exist', () => {
        expect(f.logMessageWithMyName).instanceOf(Function);
    });
    it('The function logs a message using the argument passed', () => {
        const logSpy = vitest.spyOn(console, 'log');
        f.logMessageWithMyName(name);
        expect(logSpy).toBeCalledTimes(1);
        expect(logSpy).toBeCalledWith(`My name is ${name}!`);
    });
})

describe('logMyInfo', () => {
    it('The test function should exist', () => {
        expect(f.logMyData).instanceOf(Function);
    });
    it('The function logs a message using two arguments passed', () => {
        const logSpy = vitest.spyOn(console, 'log');
        const testStart = 'My name is';
        const testName = ` ${name}`;
        const testMiddle = '. I am';
        const testAge = ` ${age} `;
        const testEnd = 'years old!'
        f.logMyData(name, age);
        expect(logSpy).toBeCalledTimes(1);
        expect(logSpy).toBeCalledWith(`${testStart + testName + testMiddle + testAge + testEnd}`);
    });
})
