function Sum(arr) {
    if (arr.length === 0)
        return 0;

    let sum = arr[0];
    for (let i = 1; i < arr.length; i++) {
        sum += arr[i];
    }

    return sum;
}

module.exports = Sum;