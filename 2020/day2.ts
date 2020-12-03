const input = document.body.innerText
  .split("\n")
  .filter(Boolean)
  .map(
    (v) =>
      v.match(
        "(?<min>[0-9]+)-(?<max>[0-9]+) (?<required>[a-z]): (?<password>[a-z]+)"
      ).groups
  );

const partOne = input.filter((curr) => {
  const count = [...curr.password].filter((v) => v === curr.required).length;
  return count >= parseInt(curr.min) && count <= parseInt(curr.max);
}).length;

console.log(partOne);

const partTwo = input.filter((curr) => {
  const min = parseInt(curr.min) - 1;
  const max = parseInt(curr.max) - 1;
  return (
    (curr.password[min] === curr.required ||
      curr.password[max] === curr.required) &&
    !(
      curr.password[min] === curr.required &&
      curr.password[max] === curr.required
    )
  );
}).length;

console.log(partTwo);
