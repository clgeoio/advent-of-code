const day3PartOne = (input: string[], rightNum: number, downNum: number) => {
  let trees = 0;
  let right = 0;
  for (let i = 0; i < input.length; i += downNum, right += rightNum) {
    if (input[i][right % input[i].length] === "#") {
      trees++;
    }
  }
  return trees;
};

const day3PartTwo = (input: string[]) => {
  return (
    day3PartOne(input, 1, 1) *
    day3PartOne(input, 3, 1) *
    day3PartOne(input, 5, 1) *
    day3PartOne(input, 7, 1) *
    day3PartOne(input, 1, 2)
  );
};

export { day3PartOne, day3PartTwo };
