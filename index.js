const largestSubarraySum = array => {
    let max = 0;
    array.reduce((sum, element) => {
        max = Math.max(max, sum + element);
        return sum + element > 0 ? sum + element : 0;
    }, 0)

    return max
}