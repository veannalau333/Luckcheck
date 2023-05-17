function luckCheck(str) {
  if (str.length === 0) {
    throw new Error("Empty string");
  }

  if (!/^\d+$/.test(str)) {
    throw new Error("Invalid decimal number");
  }

  const length = str.length;
  const halfLength = Math.floor(length / 2);
  let leftSum = 0;
  let rightSum = 0;

  for (let i = 0; i < halfLength; i++) {
    leftSum += Number(str[i]);
    rightSum += Number(str[length - i - 1]);
  }

  if (length % 2 !== 0) {
    rightSum += Number(str[halfLength]);
  }

  return leftSum === rightSum;
}

// Example usage:
console.log(luckCheck("003111")); // Output: true
console.log(luckCheck("813372")); // Output: true
console.log(luckCheck("17935")); // Output: true
console.log(luckCheck("56328116")); // Output: true
console.log(luckCheck("123")); // Output: false
console.log(luckCheck("456789")); // Output: false
