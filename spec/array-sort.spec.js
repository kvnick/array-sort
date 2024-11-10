var arraySort = require("../array-sort");

describe("Array sorting", () => {
    var users = [
        {
            id: 7,
            name: "Foo",
            age: "34",
            email: { primary: "foo@email.com" },
        },
        {
            id: 3,
            name: "Baz",
            age: "77",
            email: { primary: "baz@email.com" },
        },
        {
            id: 4,
            name: "Bar",
            age: "67",
            email: { primary: "bar@email.com" },
        },
    ];

    var coords = [
        { x: 4, y: 1, z: { a: 2 } },
        { x: 3, y: 1, z: { a: 3 } },
        { x: 2, y: 3, z: { a: 3 } },
        { x: 1, y: 2, z: { a: 1 } },
    ];

    it("should sort array by x asc", () => {
        const sortedArray = arraySort(coords, "x");

        expect(sortedArray[0]).toEqual(
            jasmine.objectContaining({ x: 1, y: 2 }),
        );
        expect(sortedArray[1]).toEqual(
            jasmine.objectContaining({ x: 2, y: 3 }),
        );
        expect(sortedArray[2]).toEqual(
            jasmine.objectContaining({ x: 3, y: 1 }),
        );
        expect(sortedArray[3]).toEqual(
            jasmine.objectContaining({ x: 4, y: 1 }),
        );
    });

    it("should return array sorted by y asc", () => {
        const sortedArray = arraySort(coords, "y");

        expect(sortedArray[0]).toEqual(
            jasmine.objectContaining({ x: 4, y: 1 }),
        );
        expect(sortedArray[1]).toEqual(
            jasmine.objectContaining({ x: 3, y: 1 }),
        );
        expect(sortedArray[2]).toEqual(
            jasmine.objectContaining({ x: 1, y: 2 }),
        );
        expect(sortedArray[3]).toEqual(
            jasmine.objectContaining({ x: 2, y: 3 }),
        );
    });

    it("should return array sorted by y desc", () => {
        const sortedArray = arraySort(coords, "y", true);

        expect(sortedArray[0]).toEqual(
            jasmine.objectContaining({ x: 2, y: 3 }),
        );
        expect(sortedArray[1]).toEqual(
            jasmine.objectContaining({ x: 1, y: 2 }),
        );
        expect(sortedArray[2]).toEqual(
            jasmine.objectContaining({ x: 4, y: 1 }),
        );
        expect(sortedArray[3]).toEqual(
            jasmine.objectContaining({ x: 3, y: 1 }),
        );
    });

    it("should return false with non array types", () => {
        expect(arraySort("")).toEqual(false);
        expect(arraySort("string")).toEqual(false);
        expect(arraySort([1, 2, 3, 4, 5])).toEqual(false);
        expect(arraySort({ key: "value" })).toEqual(false);
        expect(arraySort(NaN)).toEqual(false);
        expect(arraySort(Infinity)).toEqual(false);
        expect(arraySort(null)).toEqual(false);
        expect(arraySort(undefined)).toEqual(false);
    });

    it("should thrown exception if some element is null", () => {
        const data = [{ x: 1, y: 1 }, null];

        expect(() => {
            arraySort(data);
        }).toThrowError("function expected valid object");
    });

    it("should test even order argument is not a boolean", () => {
        expect(() => {
            arraySort(users, "id", "string");
        }).not.toThrowError();
    });

    it("should test even order argument is not a boolean", () => {
        const sortedArray = arraySort(users, "id");

        expect(sortedArray[0].id).toEqual(3);
        expect(sortedArray[1].id).toEqual(4);
        expect(sortedArray[2].id).toEqual(7);
    });
});
