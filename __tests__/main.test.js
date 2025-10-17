const hello = require('../src/main');

describe('Mengetest function hello', () => {
		test('Hello World', () => {
		    expect(hello('World')).toBe("Hello World");
		});
		test('Hello Roid', () => {
		    expect(hello('Roid')).toBe("Hello Roid");
		});
});