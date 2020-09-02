/**
 * @param {number} m
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
const movingCount = function(m, n, k) {
    let count = 0;

    const square = [];
    for (let i = 0; i < m; i++) {
        square.push(Array(n).fill(null));
    }

    function walk(row, col) {
        if (row > (m - 1) || col > (n - 1) || row < 0 || col < 0
            || square[row][col] === 'x'
            || (sumNumber(row) + sumNumber(col) > k)
        ) {
            return;
        }
        square[row][col] = 'x';
        count++;
        walk(row + 1, col);
        walk(row, col + 1);
        walk(row - 1, col);
        walk(row, col - 1);
    }

    walk(0, 0);

    return count;
};

function sumNumber(number) {
    let sum = 0;
    while (number) {
        sum += (number % 10);
        number = Math.floor(number / 10);
    }
    return sum;
}

console.assert(movingCount(90, 90, 15) === 2334);
