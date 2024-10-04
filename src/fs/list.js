import { promises } from 'fs';

const list = async () => {
    try {
        const files = await promises.readdir('./src/fs/files');
        files.forEach((file) => console.log(file));
    } catch (error) {
        if (error.code === 'ENOENT') {
            throw new Error('FS operation failed');
        }
    }
};

await list();
