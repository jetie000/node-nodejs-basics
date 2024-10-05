import { pipeline } from 'node:stream/promises';
import {
    createReadStream,
    createWriteStream,
} from 'node:fs';
import { createGzip } from 'node:zlib';

const compress = async () => {
    await pipeline(
        createReadStream('./src/zip/files/fileToCompress.txt'),
        createGzip(),
        createWriteStream('./src/zip/files/archive.gz')
    );
};

await compress();
