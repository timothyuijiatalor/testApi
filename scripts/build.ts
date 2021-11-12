import shell from 'shelljs';
import config from '../tsconfig.json';

const FOLDERS = new Set(['src/assets']);
const FILES = new Set(['LICENSE']);

// Copy Folders
FOLDERS.forEach((folder) =>
  shell.cp('-R', folder, config.compilerOptions.outDir),
);

// Copy Files
FILES.forEach((file) => shell.cp(file, config.compilerOptions.outDir));
