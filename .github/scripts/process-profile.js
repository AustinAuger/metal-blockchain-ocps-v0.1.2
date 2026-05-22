const fs = require('fs');
const yaml = require('js-yaml');
const sharp = require('sharp');
const { createCanvas, loadImage, registerFont } = require('canvas');

// Find the YAML file that changed (simplified - takes first in profiles for now)
const profileFiles = fs.readdirSync('profiles').filter(f => f.endsWith('.yaml') || f.endsWith('.yml'));
const profilePath = `profiles/${profileFiles[0]}`;

const profile = yaml.load(fs.readFileSync(profilePath, 'utf8'));

// Save DAO name for later
fs.writeFileSync('profile-name.txt', profile.dao_name || 'Unknown DAO');

// Generate visual label
async function generateLabel() {
  const width = 800;
  const height = 600;
  const canvas = createCanvas(width, height);
  const ctx = canvas.getContext('2d');

  // Background
  ctx.fillStyle = '#0f172a';
  ctx.fillRect(0, 0, width, height);

  // Title
  ctx.fillStyle = '#ffffff';
  ctx.font = 'bold 36px Arial';
  ctx.fillText('DAO NUTRITION LABEL', 50, 80);

  ctx.font = '24px Arial';
  ctx.fillText(profile.dao_name || 'DAO Name', 50, 130);

  // Key metrics (example layout - expand as needed)
  const metrics = [
    `Decentralization Score: ${profile.decentralization_score || 'N/A'}`,
    `Nodes: ${profile.node_count || 'N/A'}`,
    `Validators: ${profile.validator_distribution || 'N/A'}`,
    `Governance Participation: ${profile.governance_participation || 'N/A'}`,
  ];

  ctx.font = '20px Arial';
  metrics.forEach((text, i) => {
    ctx.fillText(text, 50, 200 + (i * 40));
  });

  // Save image
  const buffer = canvas.toBuffer('image/png');
  fs.writeFileSync('generated-label.png', buffer);
  console.log('✅ Visual label generated: generated-label.png');
}

generateLabel().catch(console.error);
