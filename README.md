# IRIS Model 3 — Standalone Offline AI Vision Neckband

> **Compact Standalone Offline AI Vision Neckband for Blind and Low-Vision Individuals**  
> Physical 3D CAD engineering visualizer, embedded Linux system architecture, and multilingual accessibility platform.

---

## 🌟 Live Public Demonstrations

- **Production Deployment (Live Cloud Run)**:  
  [https://ais-pre-aebglldyhlivwjcdq7xwoe-248158682761.asia-southeast1.run.app](https://ais-pre-aebglldyhlivwjcdq7xwoe-248158682761.asia-southeast1.run.app)
- **Development App**:  
  [https://ais-dev-aebglldyhlivwjcdq7xwoe-248158682761.asia-southeast1.run.app](https://ais-dev-aebglldyhlivwjcdq7xwoe-248158682761.asia-southeast1.run.app)

---

## 🚀 Key Features

1. **Realistic 3D Human Wearing Scene**:
   - Anatomically proportionate adult human bust (head, facial features, ears, neck, clavicles, shoulders, crewneck shirt).
   - Ergonomic U-shaped neckband resting naturally across collarbones without clipping.
   - Forward-facing 14.5 × 14.5 × 9.2 mm center-front optical pod with anti-reflective lens, micro-LED halo ring, and MEMS mic.
2. **Three Functional 3D View Presets**:
   - **Mode A (Human Fit)**: Full bust wearing the neckband from head to upper torso.
   - **Mode B (Product Close-Up)**: Macro zoom on camera pod, optic aperture, and tactile controls.
   - **Mode C (Exploded Assembly)**: Exploded technical sub-assembly separation (slider 0–100%).
   - **Technical Views A, B, C, & D**: Exterior render, exploded view, cutaway X-ray, and interactive system bus schematic.
3. **Multilingual Voice Assistant (IRIS Voice & Language)**:
   - Extensible registry: English, Tamil (தமிழ்), Hindi (हिन्दी), Telugu, Kannada, Malayalam, Bengali, Marathi.
   - Truthful offline status matrices (STT, TTS, OCR, VLM).
   - Interactive speech synthesis, repeat/stop controls, and simulated camera perception feed.
4. **Continuous Local Video Recording**:
   - Dual-pipeline architecture: hardware H.265 video recording to eMMC and real-time NPU vision inference.
   - Storage space meter, loop recording toggle, and timestamped segment manager.
5. **Comprehensive Technical Engineering Documentation**:
   - 11 Hardware subsystems with electrical and thermal specifications.
   - 12 Embedded Linux system daemons and IPC topology.
   - Battery runtime formula ($\text{Hours} \approx \text{Wh} \div \text{Watts}$) and skin safety thermals ($\le 38^\circ\text{C}$).
   - Provisional ₹40,000–₹1,00,000 prototype planning budget.
   - Accessibility ergonomics and critical white-cane mobility disclaimer.

---

## 🛠️ Quick Start & Local Development

### Prerequisites
- Node.js 18+ or 20+
- npm or bun

### Installation
```bash
git clone <your-repo-url>
cd iris-model-3
npm install
```

### Run Development Server
```bash
npm run dev
# Opens on http://localhost:3000
```

### Production Build
```bash
npm run build
# Outputs optimized production assets into /dist
```

### Run Production Server
```bash
npm start
# Serves the compiled dist directory on port 3000
```

---

## ☁️ Deployment Configurations

This project is pre-configured for one-click deployment:

- **Vercel**: Includes `vercel.json` with SPA routing rewrites and 1-year immutable caching.
- **Netlify**: Includes `netlify.toml` with `/* -> /index.html 200` redirect rules.
- **Firebase Hosting**: Includes `firebase.json`.
- **Docker / Cloud Run**: Run `npm run build && npm start`.

---

## 📦 How to Push to GitHub

1. Create a new repository on [GitHub](https://github.com/new) named `iris-model-3`.
2. Link your remote repository and push:
```bash
git remote add origin https://github.com/<YOUR_GITHUB_USERNAME>/iris-model-3.git
git branch -M main
git push -u origin main
```
