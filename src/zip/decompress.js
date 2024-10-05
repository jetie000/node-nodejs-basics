import { pipeline } from 'node:stream/promises';
import {
    createReadStream,
    createWriteStream,
} from 'node:fs';
import { createGunzip } from 'node:zlib';

const decompress = async () => {
    await pipeline(
        createReadStream('./src/zip/files/archive.gz'),
        createGunzip(),
        createWriteStream('./src/zip/files/fileToCompress.txt')
    );
};

await decompress();
