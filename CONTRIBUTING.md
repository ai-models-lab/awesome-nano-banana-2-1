# Contributing to Awesome Nano Banana 2.1

Thank you for your interest in contributing to **Awesome Nano Banana 2.1**! We welcome high-fidelity prompts, new visual styles, workflow discoveries, and prompt engineering formulas tested on Nano Banana 2.1.

---

## 📌 Submission Criteria

To ensure our showcase maintains high standard quality:

1. **Tested on Nano Banana 2.1**: The prompt must be tested on the 2.1 model family (`Gemini-2.5-flash-image` / `Nano Banana 2.1 Pro`).
2. **Reproducibility**: The prompt must yield consistent, high-fidelity results without relying on extreme seed cherry-picking.
3. **No Slop / No Overprocessed Buzzwords**: Avoid generic spam like `"8k unreal engine masterpiece octane render"` unless genuinely style-specific. Prioritize physical optics, lighting setups, and camera descriptions.
4. **Attribution**: Always give credit to original prompt creators or Twitter/X handles.

---

## 📋 Prompt Template

When submitting a PR, add your entry into `dataset/prompts.json` or create an issue with the following format:

```json
{
  "title": "Your Prompt Title in English",
  "titleZh": "中文标题",
  "category": "portraits",
  "prompt": "Full detailed prompt text...",
  "aspectRatio": "16:9",
  "cameraOptics": "Lens or camera used in the prompt description",
  "lightingSetup": "Lighting setup described",
  "author": "Your Name / Creator Name",
  "authorHandle": "@your_x_handle",
  "testedModel": "Nano Banana 2.1 (Gemini-2.5-flash-image)",
  "tags": ["Tag1", "Tag2"]
}
```

---

## 🚀 Quick Git Workflow

1. Fork this repo on GitHub.
2. Clone your fork:
   ```bash
   git clone https://github.com/<your-username>/awesome-nano-banana-2-1.git
   cd awesome-nano-banana-2-1
   ```
3. Create your feature branch:
   ```bash
   git checkout -b feat/add-new-prompt
   ```
4. Commit and push:
   ```bash
   git commit -m "feat(prompts): add Ricoh street snap prompt"
   git push origin feat/add-new-prompt
   ```
5. Open a Pull Request!
