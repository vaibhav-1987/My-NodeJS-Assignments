
const username = process.env.USERNAME;

if (username) {
  console.log(`Hello ${username}`);
} else {
  console.log('USERNAME environment variable not set.');
}
