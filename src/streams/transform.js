import { Transform } from 'stream';

const transform = async () => {
    console.log('Press Ctrl+C to finish\n');

    const reverseTransform = new Transform({
        transform(chunk, encoding, callback) {
            const reversed = chunk.toString().split('').reverse().join('').slice(1).concat('\n\n');
            callback(null, reversed);
        }
    });

    process.stdin.pipe(reverseTransform).pipe(process.stdout);
};

await transform();
