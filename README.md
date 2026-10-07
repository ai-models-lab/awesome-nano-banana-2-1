# 🍌 Awesome Nano Banana 2.1 [![Awesome](https://awesome.re/badge.svg)](https://github.com/topics/awesome) [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT) [![Model: Nano Banana 2.1](https://img.shields.io/badge/Model-Nano%20Banana%202.1-orange.svg)](https://deepmind.google/technologies/gemini/) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](CONTRIBUTING.md)

> **Curated collection of viral prompts, visual showcases, prompt engineering patterns, and technical guidelines for Nano Banana 2.1 (Gemini-2.5-flash-image / Imagen 3 series).**  
> *精选 Nano Banana 2.1 顶级提示词、实拍复刻案例、提示词工程公式与设计指南。*

---

## 📖 English / 中文导航

- [What is Nano Banana 2.1? / 什么是 Nano Banana 2.1](#-what-is-nano-banana-21)
- [The 2.1 Prompt Engineering Formula / 黄金提示词公式](#-the-21-prompt-formula)
- [Curated Showcase Categories / 提示词分类精选](#-curated-showcase-categories)
  - [1. Cinematic Portraits / 电影级写实人像](#1-cinematic-portraits)
  - [2. Camera Screen & UI Realism / 数码相机屏幕与HUD](#2-camera-screen--ui-realism)
  - [3. Commercial & Macro Materials / 商业静物与微距材质](#3-commercial--macro-materials)
  - [4. Exploded Views & Technical Knolling / 结构拆解与信息透视](#4-exploded-views--technical-knolling)
  - [5. Neo-Oriental & Cultural Fusion / 新国风与东方美学](#5-neo-oriental--cultural-fusion)
  - [6. Typography & Editorial Posters / 字体海报与排版渲染](#6-typography--editorial-posters)
  - [7. Surreal & Conceptual Art / 超现实与概念艺术](#7-surreal--conceptual-art)
  - [8. Architectural & Spatial Light / 建筑空间与光影诗学](#8-architectural--spatial-light)
  - [9. Character Turnarounds & Consistency / 角色三视图与连续性](#9-character-turnarounds--consistency)
  - [10. Film Stocks & Vintage CCD / 经典胶片与复古CCD](#10-film-stocks--vintage-ccd)
  - [11. Culinary Sensual Realism / 美食微距与诱人光泽](#11-culinary-sensual-realism)
  - [12. Haute Couture Fashion / 先锋高级定制与秀场](#12-haute-couture-fashion)
- [Nano Banana 2.1 Tips & Pitfalls / 技巧与避坑指南](#-tips--pitfalls)
- [How to Contribute / 如何贡献](#-how-to-contribute)
- [License / 开源协议](#-license)

---

## ⚡ What is Nano Banana 2.1?

**Nano Banana 2.1** represents the latest leap in the Gemini Flash Image family:
1. **Flawless In-Image Typography**: Exact letter-by-letter text rendering without gibberish or melted glyphs.
2. **Authentic Micro-Skin Texture**: Elimination of the "plastic airbrush" look; preserves sub-surface scattering, fine pores, natural peach fuzz, and realistic eye catchlights.
3. **Dual-Layer & HUD Awareness**: Unprecedented capability to generate real screens (e.g. camera viewfinders, retro monitors, HUD displays) with sharp readable numbers and dials.
4. **Physically Grounded Caustics & Materials**: Complex refractive glass, anisotropic metal reflections, and translucent water drops.
5. **High Natural Language Prompt Adherence**: Direct interpretation of complex multi-clause camera descriptions, lighting setups, and spatial knolling configurations.

---

## 🧪 The 2.1 Prompt Formula

To get reproducible, magazine-grade results with Nano Banana 2.1, follow the **5-Pillar Anatomy**:

```text
[Subject & Micro-Detail]
  + [Environment & Foreground/Background Depth]
  + [Lighting Physics & Volumetric Atmosphere]
  + [Camera Hardware, Lens Focal Length & Aperture]
  + [Color Science, Film Stock & In-Image Typography Directives]
```

### 💡 Example Prompt Assembly:
```text
A candid 35mm photograph of a 26-year-old woman in Kyoto during late golden hour, warm slanted sunlight illuminating fine peach fuzz and natural skin pores, delicate subtle freckles across the nose bridge, hazel eyes with soft catchlights, relaxed unposed half-smile, wearing an oversized raw-linen ivory trench coat. Shallow depth of field, gentle lens flare kissing the edge of the frame, Kodak Portra 400 color science, authentic grain, natural imperfection, shot on Leica M11 with Summilux 35mm f/1.4 lens.
```

---

## 🎨 Curated Showcase Categories

### 1. Cinematic Portraits

#### 📸 Candid Golden Hour 35mm Street Portrait
> *黄金时刻35mm街头抓拍自然微纹理人像*

<div align="center">
  <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1000&q=85" width="600" alt="Candid Golden Hour Portrait" />
</div>

- **Aspect Ratio**: `4:5`
- **Camera/Optics**: `Leica M11, Summilux 35mm f/1.4 @ f/1.8`
- **Author**: `@rostova_visuals`
- **Key Technique**: Use words like "peach fuzz", "pores", "slanted sunlight", "candid unposed" to defeat plastic skin.

```text
A candid 35mm photograph of a 26-year-old woman in Kyoto during late golden hour, warm slanted sunlight illuminating fine peach fuzz and natural skin pores, delicate subtle freckles across the nose bridge, hazel eyes with soft catchlights, relaxed unposed half-smile, wearing an oversized raw-linen ivory trench coat. Shallow depth of field, gentle lens flare kissing the edge of the frame, Kodak Portra 400 color science, authentic grain, natural imperfection, shot on Leica M11 with Summilux 35mm f/1.4 lens.
```

---

### 2. Camera Screen & UI Realism

#### 📷 Ricoh GR III Street Screen Viewfinder HUD
> *理光GR3相机后背屏幕拟真街头取景显示屏*

<div align="center">
  <img src="https://images.unsplash.com/photo-1502982720700-bfff97f2ecac?auto=format&fit=crop&w=1000&q=85" width="600" alt="Ricoh GR III Camera Screen" />
</div>

- **Aspect Ratio**: `16:9`
- **Optics**: `50mm Macro f/2.8, focus on LCD matrix`
- **Author**: `@kenji_shibuya_gr`
- **Key Technique**: Enclose exact UI values in double quotes: `"+0.3"`, `"1/160s"`, `"F2.8"`, `"ISO 800"`.

```text
Macro eye-level photo of the back of a black Ricoh GR III compact digital camera held in hands on a Tokyo rainy night. The 3-inch LCD screen is crystal clear and actively previewing a bustling neon crosswalk in Shibuya through wet glass. On the LCD screen, realistic camera UI is sharply rendered: exposure scale reading "+0.3", shutter speed "1/160s", aperture "F2.8", ISO "800", green focus brackets locked onto a pedestrian with umbrella, white battery icon at 78%, and grid overlay lines. The camera body shows subtle matte texture and thumb grip wear. Background is moody out-of-focus bokeh of city headlights.
```

---

### 3. Commercial & Macro Materials

#### 💎 Frosted Glass Minimalist Perfume on Wet Basalt
> *微观冰晶折射：湿润玄武岩上的极简雾面玻璃香氛*

<div align="center">
  <img src="https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=1000&q=85" width="600" alt="Frosted Glass Perfume Commercial" />
</div>

- **Aspect Ratio**: `4:5`
- **Optics**: `Hasselblad H6D-100c, 120mm Macro Lens at f/5.6`
- **Author**: `@vesper_commercial`
- **Key Technique**: Specify "caustic light refractions" and surface tension water droplets.

```text
High-end luxury commercial product photograph of a minimalist frosted glass perfume bottle named "AURA NOIR" embossed in crisp black serif typography on the glass surface. The flacon rests upon a wet, dark porous volcanic basalt rock surrounded by tiny glistening water droplets. Soft warm sunrise light passes through the pale amber perfume liquid inside, casting complex caustic light refractions across the textured stone surface. Crisp macro detail, shallow focus on the polished silver atomizer cap, clean high-fashion cosmetic campaign lighting by Peter Lindbergh style.
```

---

### 4. Exploded Views & Technical Knolling

#### ⚙️ Knolling Exploded Dissection of Mechanical Watch
> *机械腕表全零件精密爆炸解构图*

<div align="center">
  <img src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1000&q=85" width="600" alt="Mechanical Watch Exploded Dissection" />
</div>

- **Aspect Ratio**: `16:9`
- **Optics**: `90mm Tilt-Shift lens, deep depth of field at f/11`
- **Author**: `@marcus_schematics`
- **Key Technique**: Use "top-down isometric exploded knolling layout" and specify parts (gears, balance spring, chassis).

```text
Top-down isometric exploded knolling layout of a Swiss tourbillon mechanical wristwatch, completely disassembled into 160 individual precision components. Brass gears, ruby bearing jewels, polished escapement wheel, coiled balance spring, titanium sub-dials, hands, sapphire crystal, and steel chassis are meticulously arranged on a clean matte blueprint cutting mat with fine millimeter grid lines. Each major subassembly is labeled with crisp, ultra-sharp miniature technical annotations and dimensions in white Helvetica sans-serif text. Studio overhead diffused softbox illumination, zero shadow harshness, surgical engineering accuracy.
```

---

### 5. Neo-Oriental & Cultural Fusion

#### 🏮 Celadon Porcelain Cybernetic Hybrid & Gold Kintsugi
> *宋代汝窑青瓷与钛合金机械骨骼金缮共生*

<div align="center">
  <img src="https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?auto=format&fit=crop&w=1000&q=85" width="600" alt="Song Dynasty Celadon Hybrid" />
</div>

- **Aspect Ratio**: `3:2`
- **Optics**: `Canon EOS R5, 85mm f/1.4 Lens at f/2.2`
- **Author**: `@yixian_ink_ai`
- **Key Technique**: Specify traditional Song Dynasty crackle glaze + modern metallic seams.

```text
Masterpiece sculpture blending an authentic Song Dynasty celadon glazed ceramic vase with futuristic aerodynamic titanium mechanical exoskeletons. Fractured areas of the pale jade-green cracked glaze are repaired with gleaming molten 24k gold kintsugi seams that softly pulse with subtle fiber-optic luminescence. Set in a quiet misty Zen courtyard with bamboo stalks silhouetted through rain-washed rice paper screens. Cinematic moody chiaroscuro lighting, subtle incense smoke curls drifting through light rays, 8k resolution, poetic traditional Chinese aesthetic meets high-tech cyber minimalism.
```

---

### 6. Typography & Editorial Posters

#### 🔤 Swiss Modernist Typography Poster "TOKYO 2026"
> *瑞士极简主义国际主义平面设计海报*

<div align="center">
  <img src="https://images.unsplash.com/photo-1541701494587-cb58502866ab?auto=format&fit=crop&w=1000&q=85" width="600" alt="Swiss Typography Poster" />
</div>

- **Aspect Ratio**: `2:3`
- **Author**: `@mueller_swissgrid`
- **Key Technique**: Direct uppercase quotations `"TOKYO 2026"` + style name "Swiss International Typographic Style".

```text
Graphic design poster in authentic 1960s Swiss International Typographic Style. Bold primary headline reading "TOKYO 2026" perfectly spelled in black uppercase Helvetica Bold, aligned along an asymmetric grid. Secondary subtitle reads "INTERNATIONAL ARCHITECTURE SYMPOSIUM / NOV 12-15" in crisp 14pt sans-serif font. The layout features a minimalist striking circular vermilion red graphic intersecting a black-and-white high-contrast architectural photograph of a brutalist spiral staircase. Printed on heavyweight natural off-white art paper with fine tactile paper texture and subtle offset-lithography ink absorbency.
```

---

### 7. Surreal & Conceptual Art

#### 🌌 Floating Illuminated Biosphere Soap Bubble
> *黄昏沙丘上空悬浮的微型温室生态皂泡*

<div align="center">
  <img src="https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1000&q=85" width="600" alt="Floating Biosphere Bubble" />
</div>

```text
Surreal fine art photography of an iridescent translucent giant soap bubble gently hovering above undulating windswept sand dunes at twilight. Encapsulated inside the fragile bubble is a miniature Victorian botanical glass greenhouse filled with blooming exotic magenta orchids and miniature fireflies that emit a warm golden glow. The bubble surface displays swirling pastel rainbow interference patterns reflecting the indigo starry sky above. Long shadows stretch across the fine rippled sand texture. Ethereal, dreamy, cinematic silence, shot by Tim Walker.
```

---

### 8. Architectural & Spatial Light

#### 🏛️ Tadao Ando Brutalist Gallery with Cross Skylight
> *安藤忠雄式清水混凝土光之十字美术馆*

<div align="center">
  <img src="https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1000&q=85" width="600" alt="Tadao Ando Brutalist Gallery" />
</div>

```text
Architectural interior photograph of a minimalist monumental brutalist art gallery designed in the style of Tadao Ando. Poured smooth gray concrete walls with characteristic formwork tie-rod holes. A dramatic slender cross-shaped geometric skylight in the towering ceiling casts an intense, sharp angular beam of natural midday sunlight diagonally across the textured concrete wall and onto the polished dark terrazzo floor. A solitary visitor in a long charcoal coat stands in contemplative silhouette. Extreme geometric discipline, quiet majesty, architectural minimalism, shot on Arca-Swiss 4x5 view camera with Rodenstock lens.
```

---

### 9. Character Turnarounds & Consistency

#### 👤 Cyberpunk Courier Turnaround & Expression Matrix
> *赛博朋克信使多视角三视图与微表情矩阵*

```text
Concept art character sheet showing front view, 3/4 quarter view, and side profile turnaround of a 28-year-old female high-altitude courier in Neo-Seoul. She wears a modular weathered olive-drab tactical bomber jacket with bright safety-orange inner lining, magnetic cargo harnesses, worn fingerless carbon-knuckle gloves, and low-profile AR tactical visor pushed up on her forehead. On the right side of the sheet, three distinct facial expression studies: intense concentration, smirk, and wind-blown endurance. White neutral studio background with subtle height measurement scale lines. Crisp linework and realistic painterly textures, maintaining 100% facial and costume consistency across all angles.
```

---

### 10. Film Stocks & Vintage CCD

#### 🎞️ Y2K Convenience Store Flash CCD Snapshot
> *千禧年便利店直出闪光灯复古CCD胶片感*

```text
Vintage candid snapshot taken on an early 2000s Olympus Camedia CCD digital point-and-shoot camera inside an authentic Taiwanese night convenience store aisle. Harsh direct on-camera flash illumination bouncing off rows of colorful snack bags and refrigerated drink cans. A young guy in an oversized vintage windbreaker holding an iced tea can, smiling spontaneously with slight motion blur on his hand. Characteristic early 2000s digital sensor color science: vibrant saturated primary colors, subtle chromatic aberration near frame edges, bloom around bright specular reflections, genuine flash falloff into dark background.
```

---

### 11. Culinary Sensual Realism

#### 🍜 Tokyo Ramen Vapor Steam & Torched Chashu Glisten
> *热气腾腾的东京豚骨拉面与炙烤叉烧微距高光*

```text
Mouth-watering macro culinary photograph of a steaming bowl of artisan Tonkotsu Ramen served at a dimly lit traditional wooden ramen counter in Shinjuku. Visible swirls of delicate translucent steam rising from the rich golden-hued pork bone broth. Thick slices of tender chashu pork with caramelized torch-charred edges glistening with savory oil droplets, a perfectly sliced soft-boiled ramen egg showing a gooey custard-like orange yolk, vibrant emerald green scallions, crispy nori sheet, and black garlic oil dripped in artistic spirals. Shot with shallow depth of field, warm inviting amber izakaya atmosphere.
```

---

### 12. Haute Couture Fashion

#### 👗 Liquid Mercury Sculptural Gown Haute Couture
> *液态水银流动雕塑高级定制先锋大片*

```text
Avant-garde haute couture editorial fashion photograph for Vogue runway special. The model wears a sculptural dress resembling cascading molten liquid mercury frozen mid-motion, with hyper-reflective chrome surface reflecting the raw minimalist concrete studio walls. The liquid metal folds transition seamlessly into gossamer-thin iridescent gossamer silk drapery around the hem. Sharp dramatic side rim lighting accentuates the model's statuesque cheekbones and the high-polish metallic curves of the gown. High fashion makeup, slicked-back architectural hair, cinematic high-contrast lighting, 8k resolution, shot by Nick Knight.
```

---

## 🛠️ Tips & Pitfalls

| Objective | Do This ✅ | Don't Do This ❌ |
|:---|:---|:---|
| **Text In Images** | Place exact text in `"DOUBLE QUOTES"`, state typography font family (e.g. `Helvetica`, `Garamond`, `Monospace LCD font`). | Don't say "with some cool words written on it" or give ambiguous strings. |
| **Skin Textures** | Specify `peach fuzz`, `visible pores`, `candid 35mm photo`, `subtle freckles`, `unposed`. | Don't use `photorealistic 8k unreal engine hyperrealistic` (triggers glossy plastic rendering). |
| **Reflections & Glass** | Use `caustic light refractions`, `specular highlight roll-off`, `surface tension droplets`. | Don't omit background light sources, otherwise glass lacks depth. |
| **Camera HUDs** | Detail specific exposure numbers: `"1/250s"`, `"f/2.8"`, `"ISO 400"`, `"battery icon 84%"`. | Don't merely request "camera interface"; define the exact widgets. |
| **Aspect Ratios** | Pick appropriate ratio (`16:9` for cinematic/screens, `4:5` for portraits/Instagram, `1:1` for products/covers, `2:3` for posters). | Avoid forcing square `1:1` for panoramic or full-length portraits. |

---

## 🤝 How to Contribute

We welcome community submissions for new tested prompts!

1. **Fork the Repository**
2. **Add Your Prompt**:
   - Add entry into `src/data/prompts.ts` or `dataset/prompts.json`
   - Include: Title (En + Zh), Category, Prompt, Parameters, Author Handle, Tested Model
3. **Submit a Pull Request**:
   - Provide high-resolution sample image preview or generation seed
   - Describe which 2.1 capability your prompt demonstrates

---

## 📄 License

This repository is distributed under the [MIT License](LICENSE).  
Prompts curated by the global AI art & developer community.
