const arr = [23, 44, 71];
let myfunc = (a) => {
    console.log(`too:${a}`);
};
const arr2 = [...arr, 78, 89];
myfunc(arr[2]);
