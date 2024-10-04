const parseEnv = () => {
    console.log(Object.entries(process.env).filter((key) => key[0].startsWith('RSS_')).map((key) => `${key[0]}=${key[1]};`).join('\n'));
};

parseEnv();
