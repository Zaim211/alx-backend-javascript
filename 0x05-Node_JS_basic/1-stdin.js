process.stdout.write('Welcome to Holberton School, what is your name?\n');

if (process.stdin.isTTY) {
  process.stdin.on('agrs', (args) => {
    process.stdout.write(`Your name is: ${args.toString()}`);
    process.exit();
  });
} else {
  process.stdin.on('agrs', (args) => {
    process.stdout.write(`Your name is: ${args.toString()}`);
    process.exit();
  });
  process.on('end', () => {
    process.stdout.write('This important software is now closing\n');
  });
}
