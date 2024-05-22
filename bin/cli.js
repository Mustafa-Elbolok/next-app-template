#!/usr/bin/env node

const { execSync } = require('child_process');
const path = require('path');
const fs = require('fs');

const repoUrl = 'https://github.com/Mustafa-Elbolok/next-app-template';

const targetDir = process.argv[2] || 'new-project';

const cloneCommand = `git clone ${repoUrl} ${targetDir}`;
const installCommand = `cd ${targetDir} && yarn install`;

console.log(`Installing safe-next-app template into ${targetDir}...`);
execSync(cloneCommand, { stdio: 'inherit' });

if (fs.existsSync(path.join(targetDir, 'package.json'))) {
  console.log('Installing dependencies...');
  execSync(installCommand, { stdio: 'inherit' });
} else {
  console.log('No package.json found, skipping package installation.');
}

console.log('Happy hacking!');
