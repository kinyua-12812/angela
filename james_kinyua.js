const input = process.argv[2];

if (!input) {
  console.log("Please provide a word as an argument.");
  process.exit(1);
}

const result = input.replace(/[aeiouAEIOU]/g, '');
console.log(result);
