function mergeSortRec(arr) {
    if (arr.length< 2) {
        return arr
    }
    const middle = Math.floor(arr.length)/2;
    const left = arr.slice(0,middle);
    const right = arr.slice(middle, arr.length);

    return merge(mergeSortRec(left), mergeSortRec(right));
}

const merge = (leftArr, rightArr) => {
    const result = [];
    let iL = 0;
    let iR = 0;

    while (iL < leftArr.length && iR < rightArr.length) {
        if (leftArr[iL] < rightArr[iR]) {
            result.push(leftArr[iL]);
            iL++;
        } else {
            result.push(rightArr[iR]);
            iR++;
        }
    }
    while (iL <leftArr.length) {
        result.push(leftArr[iL]);
        iL++;
    }
    while (iR < rightArr.length) {
        result.push(rightArr[iR]);
        iR++;
    }
    return result;
}

console.log(mergeSortRec([]));
console.log(mergeSortRec([28,748,65,27,86,32,2,8]));
console.log(mergeSortRec([1,54,3,28,5]));
console.log(mergeSortRec([1,2,3,4,5,6,7,8]));
console.log(mergeSortRec([1,1,1,1,1,1]))