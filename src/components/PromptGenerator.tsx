import React, { useState } from 'react';
import { Wand2, Copy, Check, Sparkles, RefreshCw, SlidersHorizontal, ArrowRight } from 'lucide-react';
import { NanoBananaPrompt } from '../data/prompts';

interface PromptGeneratorProps {
  lang: 'en' | 'zh';
  initialPrompt?: NanoBananaPrompt | null;
}

const CAMERAS = [
  { label: 'Leica M11, Summilux 35mm f/1.4 (Street Candid)', value: 'shot on Leica M11 with Summilux 35mm f/1.4 lens, authentic organic film grain' },
  { label: 'Ricoh GR III 28mm f/2.8 (Pocket Street Snapshot)', value: 'shot on Ricoh GR III 28mm f/2.8 compact camera, snappy zone focus, street photography' },
  { label: 'Hasselblad H6D-100c, 120mm Macro (Commercial Product)', value: 'shot on medium format Hasselblad H6D-100c with 120mm macro lens at f/5.6, razor-sharp detail' },
  { label: 'Sony FX3 Cinema Rig + Atomos Monitor (Camera HUD)', value: 'Sony FX3 cinema camera with Atomos 7-inch LCD monitor displaying crisp on-screen exposure HUD metrics' },
  { label: '90mm Tilt-Shift Orthographic (Knolling Dissection)', value: '90mm tilt-shift lens, orthographic top-down knolling perspective, edge-to-edge sharpness' },
  { label: 'Phase One IQ4 150MP, 110mm (Haute Couture Editorial)', value: 'Phase One IQ4 150MP with 110mm f/2.8 lens, high-fashion editorial studio lighting' },
  { label: 'Vintage Olympus Camedia CCD (Y2K Direct Flash)', value: 'early 2000s vintage CCD point-and-shoot camera, direct on-camera xenon flash with harsh shadows' },
];

const LIGHTINGS = [
  { label: 'Golden Hour Slanted Sunlight & Soft Flare', value: 'warm slanted golden hour sunlight casting long soft shadows, subtle lens flare kiss' },
  { label: 'Studio Overhead Diffused Surgical Softbox', value: 'symmetrical diffused overhead softbox lighting, zero harsh shadows, clinical clarity' },
  { label: 'Backlit Caustic Refraction & Rim Light', value: 'strong warm backlighting creating glowing caustic light patterns and sharp rim highlights' },
  { label: 'Moody Chiaroscuro & Volumetric Incense Rays', value: 'dramatic chiaroscuro lighting with volumetric sunbeams piercing through drifting incense mist' },
  { label: 'Cyber Neon Ambient & Wet Reflections', value: 'ambient cyan and magenta street neon bouncing off wet asphalt and puddles' },
  { label: 'Tadao Ando Slender Skylight Beam', value: 'high-contrast natural daylight shaft entering through a slender geometric ceiling slit' },
];

const TEXTURES = [
  { label: 'Micro-Skin Pores & Natural Peach Fuzz', value: 'micro-skin texture, authentic visible pores, fine peach fuzz, delicate freckles, no airbrushing' },
  { label: 'Frosted Glass & Water Droplet Condensation', value: 'frosted sea-glass texture, crisp water droplets with realistic surface tension, liquid refraction' },
  { label: 'Liquid Mercury Chrome & Sculptural Folds', value: 'hyper-reflective liquid mercury mirror surface with smooth fluid curves and raytraced reflections' },
  { label: 'Song Dynasty Celadon & Gold Kintsugi', value: 'pale jade-green crackle celadon glaze with glowing 24k gold kintsugi seams' },
  { label: 'Tactile Heavyweight Offset Paper Grain', value: 'tactile heavyweight off-white art paper grain with subtle lithography ink absorbency' },
  { label: 'Crisp On-Screen Camera UI Numbers', value: 'razor-sharp legible LCD HUD numbers: "+0.3", "1/200s", "f/2.8", "ISO 400", focus brackets' },
];

const ASPECT_RATIOS = ['16:9', '4:5', '1:1', '3:2', '2:3', '9:16'];

export const PromptGenerator: React.FC<PromptGeneratorProps> = ({ lang, initialPrompt }) => {
  const [subject, setSubject] = useState(
    initialPrompt?.formulaBreakdown.subject || 'A young ceramic designer examining a delicate celadon cup'
  );
  const [environment, setEnvironment] = useState(
    initialPrompt?.formulaBreakdown.environment || 'sunlit minimalist studio overlooking a quiet bamboo garden'
  );
  const [selectedCamera, setSelectedCamera] = useState(CAMERAS[0].value);
  const [selectedLighting, setSelectedLighting] = useState(LIGHTINGS[0].value);
  const [selectedTexture, setSelectedTexture] = useState(TEXTURES[0].value);
  const [inImageText, setInImageText] = useState('STUDIO 2026');
  const [aspectRatio, setAspectRatio] = useState('4:5');
  const [copied, setCopied] = useState(false);

  // Generate assembled prompt
  const generatedPrompt = React.useMemo(() => {
    let result = `${subject.trim()}, set in ${environment.trim()}. ${selectedLighting}. ${selectedTexture}.`;
    if (inImageText.trim()) {
      result += ` Featuring crisp typography reading "${inImageText.trim()}" rendered sharply in-image.`;
    }
    result += ` ${selectedCamera}. Natural depth of field, authentic optical physics, masterwork composition.`;
    return result;
  }, [subject, environment, selectedLighting, selectedTexture, inImageText, selectedCamera]);

  const handleCopy = () => {
    navigator.clipboard.writeText(generatedPrompt);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleRandomize = () => {
    const randomCamera = CAMERAS[Math.floor(Math.random() * CAMERAS.length)].value;
    const randomLighting = LIGHTINGS[Math.floor(Math.random() * LIGHTINGS.length)].value;
    const randomTexture = TEXTURES[Math.floor(Math.random() * TEXTURES.length)].value;
    setSelectedCamera(randomCamera);
    setSelectedLighting(randomLighting);
    setSelectedTexture(randomTexture);
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-2 text-xs font-mono text-amber-400 mb-1">
          <Wand2 className="w-4 h-4" />
          <span>NANO BANANA 2.1 PROMPT REMIXER & BUILDER</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
          {lang === 'en' ? 'Prompt Remixer & Formula Builder' : 'Nano Banana 2.1 黄金提示词工坊'}
        </h1>
        <p className="text-sm text-zinc-400 mt-1">
          {lang === 'en'
            ? 'Assemble prompt components adhering to 2.1 model physics: optics, micro-textures, HUD layers, and in-image typography.'
            : '基于 2.1 版本的物理光影、微观毛孔材质、拟真HUD与文字渲染突破，一键组装顶级提示词。'}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Controls Column */}
        <div className="lg:col-span-7 space-y-5">
          {/* Subject & Environment Inputs */}
          <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-5 space-y-4">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-zinc-300 flex items-center justify-between">
              <span>1. {lang === 'en' ? 'Subject & Context' : '主体与环境设定'}</span>
              <button
                onClick={handleRandomize}
                className="flex items-center gap-1 text-[11px] font-normal text-amber-400 hover:text-amber-300 normal-case"
              >
                <RefreshCw className="w-3 h-3" />
                <span>{lang === 'en' ? 'Shuffle Presets' : '随机参数搭配'}</span>
              </button>
            </h3>

            <div>
              <label className="text-xs text-zinc-400 block mb-1">
                {lang === 'en' ? 'Core Subject & Pose / Materials' : '核心主体（人物、静物、建筑、角色）'}
              </label>
              <textarea
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                rows={2}
                className="w-full bg-zinc-950 border border-zinc-800 rounded-lg p-2.5 text-xs text-zinc-200 focus:outline-none focus:border-amber-500 font-mono"
                placeholder="e.g. A 24-year-old barista pouring latte art with intense focus..."
              />
            </div>

            <div>
              <label className="text-xs text-zinc-400 block mb-1">
                {lang === 'en' ? 'Environment & Background Setting' : '空间背景与前景环境'}
              </label>
              <input
                type="text"
                value={environment}
                onChange={(e) => setEnvironment(e.target.value)}
                className="w-full bg-zinc-950 border border-zinc-800 rounded-lg p-2.5 text-xs text-zinc-200 focus:outline-none focus:border-amber-500 font-mono"
                placeholder="e.g. moody industrial coffee shop with rain outside window..."
              />
            </div>
          </div>

          {/* Preset Selectors */}
          <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-5 space-y-4">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-zinc-300">
              2. {lang === 'en' ? 'Optical & Physical Presets' : '光学与质感预设'}
            </h3>

            {/* Camera / Optics */}
            <div>
              <label className="text-xs text-zinc-400 block mb-1">
                {lang === 'en' ? 'Camera Hardware & Lens' : '相机机身与镜头规格'}
              </label>
              <select
                value={selectedCamera}
                onChange={(e) => setSelectedCamera(e.target.value)}
                className="w-full bg-zinc-950 border border-zinc-800 rounded-lg p-2.5 text-xs text-zinc-200 focus:outline-none focus:border-amber-500"
              >
                {CAMERAS.map((c) => (
                  <option key={c.label} value={c.value}>
                    {c.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Lighting Setup */}
            <div>
              <label className="text-xs text-zinc-400 block mb-1">
                {lang === 'en' ? 'Lighting Physics Setup' : '光影物理结构'}
              </label>
              <select
                value={selectedLighting}
                onChange={(e) => setSelectedLighting(e.target.value)}
                className="w-full bg-zinc-950 border border-zinc-800 rounded-lg p-2.5 text-xs text-zinc-200 focus:outline-none focus:border-amber-500"
              >
                {LIGHTINGS.map((l) => (
                  <option key={l.label} value={l.value}>
                    {l.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Texture & Material */}
            <div>
              <label className="text-xs text-zinc-400 block mb-1">
                {lang === 'en' ? 'Micro-Texture Anchor' : '微观材质锚定（防AI塑料感）'}
              </label>
              <select
                value={selectedTexture}
                onChange={(e) => setSelectedTexture(e.target.value)}
                className="w-full bg-zinc-950 border border-zinc-800 rounded-lg p-2.5 text-xs text-zinc-200 focus:outline-none focus:border-amber-500"
              >
                {TEXTURES.map((t) => (
                  <option key={t.label} value={t.value}>
                    {t.label}
                  </option>
                ))}
              </select>
            </div>

            {/* In-Image Typography (2.1 Killer feature) */}
            <div>
              <label className="text-xs text-zinc-400 block mb-1 flex items-center justify-between">
                <span>{lang === 'en' ? 'In-Image Precise Typography (2.1 Feature)' : '画面内精准文字渲染（2.1专属优势）'}</span>
                <span className="text-[10px] text-amber-400 font-mono">Quotes enforced</span>
              </label>
              <input
                type="text"
                value={inImageText}
                onChange={(e) => setInImageText(e.target.value)}
                className="w-full bg-zinc-950 border border-zinc-800 rounded-lg p-2.5 text-xs text-zinc-200 focus:outline-none focus:border-amber-500 font-mono"
                placeholder="e.g. TOKYO 2026 or AURA NOIR (leave empty if none)"
              />
            </div>
          </div>

          {/* Aspect Ratio Selector */}
          <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-5">
            <label className="text-xs font-semibold uppercase tracking-wider text-zinc-300 block mb-2">
              3. {lang === 'en' ? 'Target Aspect Ratio' : '输出画面画幅比例'}
            </label>
            <div className="flex flex-wrap gap-2">
              {ASPECT_RATIOS.map((ar) => (
                <button
                  key={ar}
                  onClick={() => setAspectRatio(ar)}
                  className={`px-3 py-1.5 text-xs font-mono rounded-lg border transition-colors ${
                    aspectRatio === ar
                      ? 'border-amber-500 bg-amber-500/10 text-amber-300 font-semibold'
                      : 'border-zinc-800 bg-zinc-950 text-zinc-400 hover:border-zinc-700'
                  }`}
                >
                  {ar}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Live Output Preview Column */}
        <div className="lg:col-span-5 flex flex-col gap-4">
          <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-5 flex flex-col flex-1 sticky top-24">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-semibold uppercase tracking-wider text-amber-400 flex items-center gap-1.5">
                <Sparkles className="w-4 h-4" />
                {lang === 'en' ? 'Live Assembled Prompt' : '实时组装的 2.1 提示词'}
              </span>
              <span className="text-[11px] font-mono text-zinc-400">
                {generatedPrompt.length} chars
              </span>
            </div>

            {/* Prompt preview box */}
            <div className="p-4 bg-zinc-950 border border-zinc-800 rounded-lg font-mono text-xs text-zinc-200 leading-relaxed flex-1 select-all overflow-y-auto max-h-72 mb-4">
              {generatedPrompt}
            </div>

            {/* Parameters box */}
            <div className="bg-zinc-950/60 p-3 rounded-lg border border-zinc-850 text-xs font-mono text-zinc-400 space-y-1 mb-4">
              <div className="flex justify-between">
                <span>--aspect_ratio:</span>
                <span className="text-amber-300">{aspectRatio}</span>
              </div>
              <div className="flex justify-between">
                <span>--model:</span>
                <span className="text-zinc-300">Nano Banana 2.1</span>
              </div>
            </div>

            {/* Copy CTA */}
            <button
              onClick={handleCopy}
              className={`w-full py-3 px-4 rounded-xl font-semibold text-xs flex items-center justify-center gap-2 transition-colors ${
                copied
                  ? 'bg-emerald-500 text-zinc-950'
                  : 'bg-amber-500 hover:bg-amber-400 text-zinc-950 shadow-md'
              }`}
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4" />
                  <span>{lang === 'en' ? 'Copied to Clipboard!' : '已复制到剪贴板！'}</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" />
                  <span>{lang === 'en' ? 'Copy Full Prompt' : '一键复制完整提示词'}</span>
                </>
              )}
            </button>

            {/* Tip */}
            <p className="text-[11px] text-zinc-400 text-center mt-3">
              {lang === 'en'
                ? 'Ready to test in Google AI Studio, Gemini 2.5 Flash Image, or Discord bot.'
                : '可直接粘贴至 Google AI Studio、Gemini 2.5 Flash Image 或生图接口测试。'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
