
const args = process.argv.slice(2);

if (args.length > 0) {
  const name = args[0];
  console.log(`Hello ${name}`);
} else {
  console.log('Please provide a name as a command line argument.');
}
