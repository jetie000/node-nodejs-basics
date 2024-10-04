const parseArgs = () => {
    const args = process.argv.slice(2);
    const argValues = args.filter((arg) => !arg.startsWith('--'));
    console.log(args.filter((arg) => arg.startsWith('--')).map((arg, index) => `${arg.slice(2)} is ${argValues[index]}`).join(', '));
};

parseArgs();
