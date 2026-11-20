const fs = require('fs');
const path = require('path');

const distDir = path.join(__dirname, 'dist');
const htmlPath = path.join(distDir, 'index.html');

console.log('--- Verifying Astro Production Build ---');

if (!fs.existsSync(htmlPath)) {
    console.error('FAIL: dist/index.html does not exist');
    process.exit(1);
}

const html = fs.readFileSync(htmlPath, 'utf8');
console.log('✓ dist/index.html exists (Length:', html.length, 'bytes)');

// 1. Verify Structure & Headings
const requiredStrings = [
    '<title>Kaysan Rafi Akbar | Portfolio</title>',
    'id="hero"',
    'id="about"',
    'id="skills"',
    'id="projects"',
    'id="experience"',
    'KAYSAN RAFI',
    'AKBAR',
    'sifestunsri.com',
    '01 // PROFILE',
    '02 // INVENTORY',
    '03 // SHOWCASE',
    '04 // MISSION LOGS',
    '★ information system - Universitas Sriwijaya',
    'NARRATIVE DESIGNER',
    'UI/UX DESIGNER',
    'QA TESTER',
    'MEDIA EDITOR',
    'Amogus // LV.19',
    '★ TAKE YOUR TIME!',
    'Despite everything, It\'s still you.'
];

for (const str of requiredStrings) {
    if (!html.includes(str)) {
        console.error(`FAIL: Missing expected content: "${str}"`);
        process.exit(1);
    }
}
console.log('✓ All core sections, headings, tags, and content strings are present.');

// 2. Verify CSS bundle
const cssMatches = [...html.matchAll(/href="(\/_astro\/[^"]+\.css)"/g)];
if (cssMatches.length === 0) {
    console.error('FAIL: No stylesheet found in index.html');
    process.exit(1);
}
for (const match of cssMatches) {
    const cssRel = match[1].replace(/^\//, '');
    const cssPath = path.join(distDir, cssRel);
    if (!fs.existsSync(cssPath)) {
        console.error(`FAIL: CSS file referenced but missing on disk: ${cssRel}`);
        process.exit(1);
    }
    const cssContent = fs.readFileSync(cssPath, 'utf8');
    if (!cssContent.includes('#e60012') && !cssContent.includes('#E60012')) {
        console.error('FAIL: CSS missing Persona 5 red color #e60012');
        process.exit(1);
    }
    if (!cssContent.includes('Anton') || !cssContent.includes('Montserrat')) {
        console.error('FAIL: CSS missing expected font families');
        process.exit(1);
    }
    console.log(`✓ CSS file validated: ${cssRel} (${cssContent.length} bytes, includes custom colors & fonts)`);
}

// 3. Verify Referenced Images
const imgMatches = [...html.matchAll(/src="(\/_astro\/[^"]+\.(webp|png|jpg|jpeg))"/g)];
if (imgMatches.length === 0) {
    console.error('FAIL: No optimized images found in index.html');
    process.exit(1);
}
for (const match of imgMatches) {
    const imgRel = match[1].replace(/^\//, '');
    const imgPath = path.join(distDir, imgRel);
    if (!fs.existsSync(imgPath)) {
        console.error(`FAIL: Image file referenced but missing on disk: ${imgRel}`);
        process.exit(1);
    }
    const size = fs.statSync(imgPath).size;
    if (size === 0) {
        console.error(`FAIL: Image file is 0 bytes: ${imgRel}`);
        process.exit(1);
    }
    console.log(`✓ Image file validated: ${imgRel} (${size} bytes)`);
}

// 4. Verify Favicon
const faviconPath = path.join(distDir, 'favicon.svg');
if (!fs.existsSync(faviconPath)) {
    console.error('FAIL: favicon.svg missing in dist');
    process.exit(1);
}
console.log('✓ Favicon exists:', fs.statSync(faviconPath).size, 'bytes');

// 5. Verify Client-Side JavaScript
const requiredJsTokens = [
    'menu-btn',
    'menu-panel',
    'role-typewriter',
    'game-review',
    'ui-ux',
    'qa-testing',
    'video-editing',
    'p5-reveal-slash',
    '--split',
    'exp-heading'
];

for (const token of requiredJsTokens) {
    if (!html.includes(token)) {
        console.error(`FAIL: Missing JS functionality/token: "${token}"`);
        process.exit(1);
    }
}
console.log('✓ Client-side interactivity scripts verified (menu, typewriter, skills switch, scroll reveal, diagonal angle calculation).');

// 6. Verify Accessibility Attributes
const a11yChecks = [
    'aria-label="Open menu"',
    'aria-expanded="false"',
    'aria-controls="menu-panel"',
    'aria-label="Main"',
    'aria-label="GitHub"',
    'aria-label="LinkedIn"',
    'aria-label="Instagram"',
    'aria-label="X (Twitter)"',
    'aria-label="Steam"'
];
for (const a11y of a11yChecks) {
    if (!html.includes(a11y)) {
        console.error(`FAIL: Missing accessibility attribute: "${a11y}"`);
        process.exit(1);
    }
}
console.log('✓ Accessibility attributes verified.');

console.log('--------------------------------------------------');
console.log('🎉 ALL PRODUCTION DEPLOYMENT CHECKS PASSED!');
console.log('--------------------------------------------------');
