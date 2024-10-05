import { spawn } from 'child_process';

const spawnChildProcess = async (args) => {
    const child = spawn('node', ['./src/cp/files/script.js', ...args], { stdio: ['pipe', 'pipe', 'inherit'] });

    process.stdin.pipe(child.stdin);
    child.stdout.pipe(process.stdout);
};

spawnChildProcess(['arg1', 'arg2']);
