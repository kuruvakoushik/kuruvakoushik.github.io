import { cp, mkdir, rm, access, readFile, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const projectRoot = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const outputDir = path.join(projectRoot, 'dist');
const siteFiles = ['index.html', '404.html', 'css', 'js'];

await rm(outputDir, { recursive: true, force: true });
await mkdir(outputDir, { recursive: true });

for (const entry of siteFiles) {
  await cp(path.join(projectRoot, entry), path.join(outputDir, entry), { recursive: true });
}

await mkdir(path.join(outputDir, 'assets', 'icons'), { recursive: true });
await mkdir(path.join(outputDir, 'assets', 'images'), { recursive: true });
await cp(path.join(projectRoot, 'assets', 'Kuruva-Koushik-Resume.pdf'), path.join(outputDir, 'assets', 'Kuruva-Koushik-Resume.pdf'));
await cp(path.join(projectRoot, 'assets', 'icons', 'favicon.svg'), path.join(outputDir, 'assets', 'icons', 'favicon.svg'));
await cp(path.join(projectRoot, 'assets', 'images', 'og-card.svg'), path.join(outputDir, 'assets', 'images', 'og-card.svg'));

const profileSource = path.join(projectRoot, 'assets', 'images', 'profile.jpg');
try {
  await access(profileSource);
  await cp(profileSource, path.join(outputDir, 'assets', 'images', 'profile.jpg'));
  const indexPath = path.join(outputDir, 'index.html');
  const indexHtml = await readFile(indexPath, 'utf8');
  await writeFile(indexPath, indexHtml.replace('class="profile-image"', 'class="profile-image" src="assets/images/profile.jpg"'), 'utf8');
} catch (error) {
  if (error.code !== 'ENOENT') throw error;
}

console.log(`Static site built in ${outputDir}`);
