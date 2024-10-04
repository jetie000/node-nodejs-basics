import { promises } from 'node:fs';

const copy = async () => {
    const filesDirPath = './src/fs/files';
    const filesCopyDirPath = './src/fs/files_copy';
    const renameFiles = (files) => files.forEach((file) => promises.rename(`${filesDirPath}/${file}`, `${filesCopyDirPath}/${file}`));
    try {
        const files = await promises.readdir(filesDirPath);
        const filesCopy = await promises.readdir(filesCopyDirPath);
        if (filesCopy.length === 0) {
            renameFiles(files);
            return;
        }
    } catch (error) {
        if (error.code === 'ENOENT' && error.path.includes('files_copy')) {
            await promises.mkdir(filesCopyDirPath);
            const files = await promises.readdir(filesDirPath);
            renameFiles(files);
            return;
        }
    }
    throw new Error('FS operation failed');
};

await copy();
