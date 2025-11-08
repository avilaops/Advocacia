#!/usr/bin/env node
import { promises as fs } from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { Resvg } from "@resvg/resvg-js";
import pngToIco from "png-to-ico";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const publicDir = path.resolve(__dirname, "..", "public");

const baseSvg = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="512" height="512" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bgGradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#134536" />
      <stop offset="100%" stop-color="#0f2f24" />
    </linearGradient>
    <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#e7c873" />
      <stop offset="50%" stop-color="#c9a349" />
      <stop offset="100%" stop-color="#a68a3d" />
    </linearGradient>
  </defs>
  
  <!-- Background -->
  <rect width="512" height="512" fill="url(#bgGradient)" />
  
  <!-- Decorative elements -->
  <circle cx="100" cy="100" r="60" fill="#ffffff" opacity="0.03" />
  <circle cx="412" cy="80" r="40" fill="#ffffff" opacity="0.02" />
  
  <!-- Shield/Badge shape -->
  <path d="M256 80 L160 120 L160 280 C160 350 200 400 256 432 C312 400 352 350 352 280 L352 120 Z" 
        fill="none" stroke="url(#goldGradient)" stroke-width="3" opacity="0.15" />
  
  <!-- Letter G -->
  <path d="M180 256 C180 200 210 160 256 160 C290 160 315 175 330 200 L305 215 C295 200 280 190 256 190 C225 190 210 215 210 256 C210 297 225 322 256 322 C275 322 290 315 290 300 L290 280 L256 280 L256 250 L320 250 L320 305 C320 340 295 352 256 352 C210 352 180 312 180 256 Z" 
        fill="url(#goldGradient)" />
  
  <!-- Ampersand & -->
  <text x="256" y="285" font-family="Georgia, serif" font-size="72" font-weight="bold" 
        fill="url(#goldGradient)" text-anchor="middle" dominant-baseline="middle">&amp;</text>
  
  <!-- Letter P -->
  <path d="M340 160 L370 160 L370 220 L410 220 C430 220 445 235 445 255 C445 275 430 290 410 290 L370 290 L370 352 L340 352 L340 160 Z M370 190 L370 260 L405 260 C415 260 420 255 420 250 C420 245 415 240 405 240 L370 240 L370 190 Z" 
        fill="url(#goldGradient)" transform="translate(-50, 0)" />
  
  <!-- Bottom text -->
  <text x="256" y="440" font-family="Georgia, serif" font-size="28" font-weight="normal" 
        fill="#c9a349" text-anchor="middle" letter-spacing="4">ADVOCACIA</text>
</svg>`;

const pngTargets = [
    { size: 16, name: "favicon-16x16.png" },
    { size: 32, name: "favicon-32x32.png" },
    { size: 48, name: "favicon-48x48.png" },
    { size: 64, name: "favicon-64x64.png" },
    { size: 180, name: "apple-touch-icon.png" },
    { size: 192, name: "android-chrome-192x192.png" },
    { size: 384, name: "android-chrome-384x384.png" },
    { size: 512, name: "android-chrome-512x512.png" }
];

async function main() {
    await fs.mkdir(publicDir, { recursive: true });

    const svgPath = path.join(publicDir, "favicon.svg");
    await fs.writeFile(svgPath, baseSvg, "utf8");

    const icoSources = [];

    for (const target of pngTargets) {
        const resvg = new Resvg(baseSvg, {
            fitTo: {
                mode: "width",
                value: target.size,
            },
            background: "transparent",
        });

        const pngData = resvg.render();
        const pngBuffer = pngData.asPng();
        const outputPath = path.join(publicDir, target.name);
        await fs.writeFile(outputPath, pngBuffer);

        if (target.size <= 64) {
            icoSources.push(outputPath);
        }
    }

    const icoBuffer = await pngToIco(icoSources);
    await fs.writeFile(path.join(publicDir, "favicon.ico"), icoBuffer);

    console.log("✅ Favicons generated em \"public\"");
}

main().catch((error) => {
    console.error("Falha ao gerar favicons:\n", error);
    process.exitCode = 1;
});
