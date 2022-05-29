const http_build_query = require("./index");

test("Returns Object to URL-encoded query string", () => {
    expect(http_build_query({
        id: 143,
        message: 'Hello world!'
    })).toBe("id=143&message=Hello%20world!");
});

test("Returns data itself for non object parameter", () => {
    expect(http_build_query('Not an Object!')).toBe('Not an Object!');
});

const testObjects = [
    [{
        roll: 143,
        message: 'world'
    }, "roll=143&message=world"],
    [{
        foo: "bar",
        items: {
            salt: "suger",
            quantity: [2, 3, 4]
        }
    }, "foo=bar&items=%5Bobject%20Object%5D"],
    [undefined, undefined],
];

test.each(testObjects)(
    "It passes for value %j with result %j",
    (fixture, result) => expect(http_build_query(fixture)).toBe(result)
);