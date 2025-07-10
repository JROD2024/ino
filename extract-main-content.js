// Script para extraer solo el contenido <main>...</main> de archivos HTML
// Uso: node extract-main-content.js

const fs = require('fs');
const path = require('path');

const targetDir = 'google-sites-pages';
const files = fs.readdirSync(targetDir).filter(f => f.endsWith('.html'));

function extractMain(html) {
    const match = html.match(/<main[^>]*>([\s\S]*?)<\/main>/i);
    return match ? match[1].trim() : '';
}

// Procesar archivos de la carpeta google-sites-pages
files.forEach(file => {
    const filePath = path.join(targetDir, file);
    const html = fs.readFileSync(filePath, 'utf8');
    const mainContent = extractMain(html);
    const outPath = path.join(targetDir, file.replace('.html', '-main.html'));
    fs.writeFileSync(outPath, mainContent, 'utf8');
    console.log('✓ Extraído:', outPath);
});

// Procesar google-sites-index.html
const indexPath = 'google-sites-index.html';
if (fs.existsSync(indexPath)) {
    const html = fs.readFileSync(indexPath, 'utf8');
    const mainContent = extractMain(html);
    const outPath = 'google-sites-index-main.html';
    fs.writeFileSync(outPath, mainContent, 'utf8');
    console.log('✓ Extraído:', outPath);
} 