import { copyFile, mkdir } from 'node:fs/promises';

// O Sites publica por meio de um Worker; o front-end continua totalmente estático.
await mkdir(new URL('../dist/server/', import.meta.url), { recursive: true });
await copyFile(
  new URL('../worker/index.js', import.meta.url),
  new URL('../dist/server/index.js', import.meta.url),
);
