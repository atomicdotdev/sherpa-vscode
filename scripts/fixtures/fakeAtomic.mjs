const args = process.argv.slice(2);
if (args[0] === '--version') {
  process.stdout.write('atomic 0.0.0\n');
  process.exit(0);
}
process.stderr.write(`error: unknown-subcommand\ncmd: atomic\ngot: ${args[0] ?? ''}\n`);
process.exit(2);
