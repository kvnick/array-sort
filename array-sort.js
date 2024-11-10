var type = (obj) =>
    Object.prototype.toString.call(obj).slice(8, -1).toLowerCase();

var isObject = (obj) => {
    if (obj == null) {
        throw new Error("function expected valid object");
    }
    return type(obj) === "object";
};

module.exports = (data, sortedItem, desc) => {
    if (!data || type(data) !== "array" || !data.every((x) => isObject(x))) {
        return false;
    }

    var order = desc === true ? -1 : 1;
    var sortFunction = (a, b) => {
        if (a[sortedItem] > b[sortedItem]) return 1 * order;
        if (a[sortedItem] < b[sortedItem]) return -1 * order;
        if (a[sortedItem] === b[sortedItem]) return 0;
    };

    var slice = data.slice();
    slice.sort(sortFunction);
    return slice;
};
