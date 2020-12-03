import { day3PartOne, day3PartTwo } from "./day3";

describe("day3", () => {
  it("validates the example case", () => {
    const input = `
..##.......
#...#...#..
.#....#..#.
..#.#...#.#
.#...##..#.
..#.##.....
.#.#.#....#
.#........#
#.##...#...
#...##....#
.#..#...#.#
`
      .split("\n")
      .filter(Boolean);

    expect(day3PartOne(input, 1, 1)).toBe(2);
    expect(day3PartOne(input, 3, 1)).toBe(7);
    expect(day3PartOne(input, 5, 1)).toBe(3);
    expect(day3PartOne(input, 7, 1)).toBe(4);
    expect(day3PartOne(input, 1, 2)).toBe(2);
    expect(day3PartTwo(input)).toBe(336);
  });
});
