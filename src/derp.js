function derp(inputStr) {
  let res = [];
  const stringNums = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];
  const initCounts = {};
  for (const char of inputStr) initCounts[char] = initCounts[char] + 1 || 1;

  function backtrack(cand = [], idx = 0, counts = initCounts) {
    // console.log(cand);
    if (Object.values(counts).every((count) => count === 0)) {
      res = [...cand];
      return;
    }
    if (idx >= stringNums.length) return;

    const stringNum = stringNums[idx];
    if (Array.from(stringNum).every((char) => counts[char] > 0)) {
      const countsClone = { ...counts };
      cand.push(stringNums.indexOf(stringNum));
      for (const c of stringNum) countsClone[c] -= 1;
      if (Array.from(stringNum).every((char) => countsClone[char] >= 1)) {
        //call where all chars were found and all counts are still >= 1 => backtrack(cand, idx, countsClone) countsClone modified
        backtrack(cand, idx, countsClone);
        cand.pop();
      } else {
        backtrack(cand, idx + 1, countsClone);
        //call where all chars were found but all counts are not >= 1 => backtrack(cand, idx + 1, countsClone) countsClone modified
        cand.pop();
      }
    }

    //call where we dont take element => backtrack(cand, idx + 1, countsClone) countsClone unmodified
    //call where a char in stringNum was not in inputStr => backtrack(cand, idx + 1, countsClone) countsClone unmodified
    backtrack(cand, idx + 1, counts); //
  }

  backtrack();
  return res;
}

const str2 = "oneone";
console.log(derp(str2));
const str3 = "tefshovrnueere";
console.log(derp(str3));
const str4 = "ntneihrrefoue";
console.log(derp(str4));

//iterate thru stringNums
//if all chars in str num are in inputStr, decrement counts frequencies accordingly in a clone of counts
//push int version of found stringNums into cand
//if one of the frequencies of char equals zero, increment start

//call where we dont take element => backtrack(cand, idx + 1, countsClone) countsClone unmodified
//call where a char in stringNum was not in inputStr => backtrack(cand, idx + 1, countsClone) countsClone unmodified
//call where all chars were found and all counts are still >= 1 => backtrack(cand, idx, countsClone) countsClone modified
//call where all chars were found but all counts are not >= 1 => backtrack(cand, idx + 1, countsClone) countsClone modified
