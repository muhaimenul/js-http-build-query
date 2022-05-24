const http_build_query = require("./index");

test("Returns Object to URL-encoded query string", () => {
    expect(http_build_query({
        roll: 143,
        message: 'world'
      })).toBe("roll=143&message=world");
});

test("Returns data itself for non object parameter", () => {
    expect(http_build_query('Not an Object!')).toBe('Not an Object!');
});

