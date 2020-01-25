const requiredSum = (arr = [1, 4, 3, 5, 7, 8], num = 8) => {
    let max = 0,
        sum = 0,
        i,
        j = 1;

    for (i = 0; i < arr.length; ++i) {
        sum = arr[i] + arr[j];
        if (max == num) return console.log([i, j]);
        max = sum;
        sum = 0;
        j++;
    }
    return;
};

requiredSum();
