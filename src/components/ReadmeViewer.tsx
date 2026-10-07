import React, { useState } from 'react';
import { Download, Copy, Check, FileText, Code, ExternalLink, Github, Terminal } from 'lucide-react';

interface ReadmeViewerProps {
  lang: 'en' | 'zh';
  readmeContent: string;
}

export const ReadmeViewer: React.FC<ReadmeViewerProps> = ({ lang, readmeContent }) => {
  const [viewMode, setViewMode] = useState<'rendered' | 'raw'>('rendered');
  const [copied, setCopied] = useState(false);
  const [downloaded, setDownloaded] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(readmeContent);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownload = () => {
    const blob = new Blob([readmeContent], { type: 'text/markdown;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'README.md');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    setDownloaded(true);
    setTimeout(() => setDownloaded(false), 2500);
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Top action bar */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-zinc-900 border border-zinc-800 rounded-xl p-4 mb-6">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-lg bg-zinc-800 text-amber-400">
            <FileText className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-mono text-sm font-semibold text-white">README.md</span>
              <span className="text-xs text-emerald-400 font-mono bg-emerald-950/60 border border-emerald-800/80 px-2 py-0.5 rounded">
                Ready for GitHub Push
              </span>
            </div>
            <p className="text-xs text-zinc-400 mt-0.5">
              {lang === 'en'
                ? 'Standard GitHub Awesome-List structure with markdown tables, formulas & categories.'
                : '标准 GitHub Awesome 仓库规范文档，含提示词表格、五维公式与分类导航。'}
            </p>
          </div>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-2 w-full sm:w-auto">
          {/* Segmented Mode Button */}
          <div className="flex items-center p-1 bg-zinc-950 rounded-lg border border-zinc-800 text-xs">
            <button
              onClick={() => setViewMode('rendered')}
              className={`px-3 py-1.5 rounded-md font-medium transition-colors ${
                viewMode === 'rendered'
                  ? 'bg-zinc-800 text-amber-400 shadow-xs'
                  : 'text-zinc-400 hover:text-zinc-200'
              }`}
            >
              {lang === 'en' ? 'Preview' : '预览渲染'}
            </button>
            <button
              onClick={() => setViewMode('raw')}
              className={`px-3 py-1.5 rounded-md font-medium transition-colors ${
                viewMode === 'raw'
                  ? 'bg-zinc-800 text-amber-400 shadow-xs'
                  : 'text-zinc-400 hover:text-zinc-200'
              }`}
            >
              <Code className="w-3.5 h-3.5 inline mr-1" />
              {lang === 'en' ? 'Raw Markdown' : '原始代码'}
            </button>
          </div>

          {/* Copy Button */}
          <button
            onClick={handleCopy}
            className="flex items-center gap-1.5 px-3 py-2 text-xs font-medium rounded-lg border border-zinc-700 bg-zinc-800 text-zinc-200 hover:bg-zinc-750 transition-colors"
            title="Copy Raw Markdown"
          >
            {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
            <span className="hidden md:inline">{lang === 'en' ? 'Copy' : '复制'}</span>
          </button>

          {/* Direct Download README.md Button */}
          <button
            onClick={handleDownload}
            className="flex items-center gap-1.5 px-4 py-2 text-xs font-semibold rounded-lg bg-amber-500 hover:bg-amber-400 text-zinc-950 transition-colors shadow-xs"
            title="Download README.md file directly"
          >
            {downloaded ? <Check className="w-4 h-4" /> : <Download className="w-4 h-4" />}
            <span>{downloaded ? (lang === 'en' ? 'Downloaded!' : '已下载！') : (lang === 'en' ? 'Download README.md' : '下载 README.md')}</span>
          </button>
        </div>
      </div>

      {/* GitHub Container */}
      <div className="bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden shadow-lg">
        {/* Repo mock header */}
        <div className="bg-zinc-950/80 px-6 py-3 border-b border-zinc-800 flex items-center justify-between text-xs text-zinc-400 font-mono">
          <div className="flex items-center gap-2">
            <Github className="w-4 h-4 text-zinc-300" />
            <span className="text-zinc-300 font-semibold">your-username / awesome-nano-banana-2-1</span>
            <span className="text-zinc-600">/</span>
            <span className="text-amber-400">README.md</span>
          </div>
          <div>
            <span>{(readmeContent.length / 1024).toFixed(1)} KB</span>
          </div>
        </div>

        {/* Content View */}
        {viewMode === 'raw' ? (
          <div className="p-6 bg-zinc-950 overflow-x-auto">
            <pre className="font-mono text-xs text-zinc-300 leading-relaxed whitespace-pre-wrap select-all">
              {readmeContent}
            </pre>
          </div>
        ) : (
          <div className="p-6 sm:p-10 bg-zinc-900 text-zinc-200 space-y-6 text-sm leading-relaxed font-sans">
            {/* Rendered Markdown representation */}
            <div className="border-b border-zinc-800 pb-6">
              <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight flex items-center gap-2">
                🍌 Awesome Nano Banana 2.1
              </h1>
              <div className="flex flex-wrap gap-2 my-3">
                <span className="inline-flex items-center px-2 py-0.5 text-xs font-mono font-medium bg-emerald-950 text-emerald-300 border border-emerald-800 rounded">
                  awesome: list
                </span>
                <span className="inline-flex items-center px-2 py-0.5 text-xs font-mono font-medium bg-amber-950 text-amber-300 border border-amber-800 rounded">
                  model: nano-banana-2.1
                </span>
                <span className="inline-flex items-center px-2 py-0.5 text-xs font-mono font-medium bg-blue-950 text-blue-300 border border-blue-800 rounded">
                  license: MIT
                </span>
                <span className="inline-flex items-center px-2 py-0.5 text-xs font-mono font-medium bg-purple-950 text-purple-300 border border-purple-800 rounded">
                  PRs: welcome
                </span>
              </div>
              <blockquote className="border-l-4 border-amber-500 pl-4 py-1 text-zinc-300 italic text-sm my-4">
                Curated collection of viral prompts, visual showcases, prompt engineering patterns, and technical guidelines for Nano Banana 2.1 (Gemini-2.5-flash-image / Imagen 3 series).
              </blockquote>
            </div>

            {/* Features section */}
            <div className="space-y-3">
              <h2 className="text-xl font-bold text-white border-b border-zinc-800 pb-2">
                ⚡ What is Nano Banana 2.1?
              </h2>
              <ul className="list-disc list-inside space-y-2 text-zinc-300 text-xs sm:text-sm">
                <li><strong className="text-white">Flawless In-Image Typography:</strong> Exact letter-by-letter rendering without gibberish or melted glyphs.</li>
                <li><strong className="text-white">Authentic Micro-Skin Texture:</strong> Elimination of plastic airbrushing; sub-surface scattering, fine pores, and natural catchlights.</li>
                <li><strong className="text-white">Dual-Layer & HUD Awareness:</strong> Clean camera screen viewfinders with readable exposure HUD meters and timestamps.</li>
                <li><strong className="text-white">Physically Grounded Caustics:</strong> Realistic glass refractions, liquid depth, and volcanic basalt water droplets.</li>
              </ul>
            </div>

            {/* Formula section */}
            <div className="space-y-3">
              <h2 className="text-xl font-bold text-white border-b border-zinc-800 pb-2">
                🧪 The 2.1 Prompt Engineering Formula
              </h2>
              <div className="bg-zinc-950 p-4 rounded-lg border border-zinc-800 font-mono text-xs text-amber-300 leading-relaxed">
                [Subject & Micro-Detail]<br/>
                &nbsp;&nbsp;+ [Environment & Foreground/Background Depth]<br/>
                &nbsp;&nbsp;+ [Lighting Physics & Volumetric Atmosphere]<br/>
                &nbsp;&nbsp;+ [Camera Hardware, Lens Focal Length & Aperture]<br/>
                &nbsp;&nbsp;+ [Color Science, Film Stock & In-Image Typography Directives]
              </div>
            </div>

            {/* Categories Overview & Illustrated Showcase */}
            <div className="space-y-6">
              <h2 className="text-xl font-bold text-white border-b border-zinc-800 pb-2">
                🎨 Showcase Categories & Verified Prompts (图文实测案例)
              </h2>

              {/* Illustrated Prompt 1 */}
              <div className="bg-zinc-950 rounded-xl p-5 border border-zinc-800 space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-bold text-white">📸 1. Cinematic Portraits: Candid Golden Hour 35mm Street Portrait</h3>
                  <span className="text-xs font-mono text-amber-400">Ratio: 4:5 · Leica M11</span>
                </div>
                <div className="rounded-lg overflow-hidden border border-zinc-800 max-h-72 flex justify-center bg-zinc-900">
                  <img
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1000&q=85"
                    alt="Candid Golden Hour Portrait"
                    className="max-h-72 w-auto object-cover"
                  />
                </div>
                <pre className="p-3 bg-zinc-900 rounded-lg text-xs font-mono text-zinc-300 whitespace-pre-wrap leading-relaxed select-all">
A candid 35mm photograph of a 26-year-old woman in Kyoto during late golden hour, warm slanted sunlight illuminating fine peach fuzz and natural skin pores, delicate subtle freckles across the nose bridge, hazel eyes with soft catchlights, relaxed unposed half-smile, wearing an oversized raw-linen ivory trench coat. Shallow depth of field, gentle lens flare kissing the edge of the frame, Kodak Portra 400 color science, authentic grain, natural imperfection, shot on Leica M11 with Summilux 35mm f/1.4 lens.
                </pre>
              </div>

              {/* Illustrated Prompt 2 */}
              <div className="bg-zinc-950 rounded-xl p-5 border border-zinc-800 space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-bold text-white">📷 2. Camera Screen & UI: Ricoh GR III Street Screen Viewfinder HUD</h3>
                  <span className="text-xs font-mono text-amber-400">Ratio: 16:9 · 50mm Macro</span>
                </div>
                <div className="rounded-lg overflow-hidden border border-zinc-800 max-h-72 flex justify-center bg-zinc-900">
                  <img
                    src="https://images.unsplash.com/photo-1502982720700-bfff97f2ecac?auto=format&fit=crop&w=1000&q=85"
                    alt="Ricoh GR III Screen"
                    className="max-h-72 w-auto object-cover"
                  />
                </div>
                <pre className="p-3 bg-zinc-900 rounded-lg text-xs font-mono text-zinc-300 whitespace-pre-wrap leading-relaxed select-all">
Macro eye-level photo of the back of a black Ricoh GR III compact digital camera held in hands on a Tokyo rainy night. The 3-inch LCD screen is crystal clear and actively previewing a bustling neon crosswalk in Shibuya through wet glass. On the LCD screen, realistic camera UI is sharply rendered: exposure scale reading "+0.3", shutter speed "1/160s", aperture "F2.8", ISO "800", green focus brackets locked onto a pedestrian with umbrella, white battery icon at 78%, and grid overlay lines. The camera body shows subtle matte texture and thumb grip wear. Background is moody out-of-focus bokeh of city headlights.
                </pre>
              </div>

              {/* Illustrated Prompt 3 */}
              <div className="bg-zinc-950 rounded-xl p-5 border border-zinc-800 space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-bold text-white">💎 3. Commercial & Macro: Frosted Glass Minimalist Perfume on Wet Basalt</h3>
                  <span className="text-xs font-mono text-amber-400">Ratio: 4:5 · Hasselblad 120mm</span>
                </div>
                <div className="rounded-lg overflow-hidden border border-zinc-800 max-h-72 flex justify-center bg-zinc-900">
                  <img
                    src="https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=1000&q=85"
                    alt="Perfume Commercial"
                    className="max-h-72 w-auto object-cover"
                  />
                </div>
                <pre className="p-3 bg-zinc-900 rounded-lg text-xs font-mono text-zinc-300 whitespace-pre-wrap leading-relaxed select-all">
High-end luxury commercial product photograph of a minimalist frosted glass perfume bottle named "AURA NOIR" embossed in crisp black serif typography on the glass surface. The flacon rests upon a wet, dark porous volcanic basalt rock surrounded by tiny glistening water droplets. Soft warm sunrise light passes through the pale amber perfume liquid inside, casting complex caustic light refractions across the textured stone surface. Crisp macro detail, shallow focus on the polished silver atomizer cap, clean high-fashion cosmetic campaign lighting by Peter Lindbergh style.
                </pre>
              </div>

              {/* Illustrated Prompt 4 */}
              <div className="bg-zinc-950 rounded-xl p-5 border border-zinc-800 space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-bold text-white">⚙️ 4. Exploded Knolling: Mechanical Watch Dissection</h3>
                  <span className="text-xs font-mono text-amber-400">Ratio: 16:9 · 90mm Tilt-Shift</span>
                </div>
                <div className="rounded-lg overflow-hidden border border-zinc-800 max-h-72 flex justify-center bg-zinc-900">
                  <img
                    src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1000&q=85"
                    alt="Watch Exploded View"
                    className="max-h-72 w-auto object-cover"
                  />
                </div>
                <pre className="p-3 bg-zinc-900 rounded-lg text-xs font-mono text-zinc-300 whitespace-pre-wrap leading-relaxed select-all">
Top-down isometric exploded knolling layout of a Swiss tourbillon mechanical wristwatch, completely disassembled into 160 individual precision components. Brass gears, ruby bearing jewels, polished escapement wheel, coiled balance spring, titanium sub-dials, hands, sapphire crystal, and steel chassis are meticulously arranged on a clean matte blueprint cutting mat with fine millimeter grid lines. Each major subassembly is labeled with crisp, ultra-sharp miniature technical annotations and dimensions in white Helvetica sans-serif text. Studio overhead diffused softbox illumination, zero shadow harshness, surgical engineering accuracy.
                </pre>
              </div>
            </div>

            {/* Quick Tips Table */}
            <div className="space-y-3">
              <h2 className="text-xl font-bold text-white border-b border-zinc-800 pb-2">
                🛠️ Tips & Best Practices
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs border border-zinc-800">
                  <thead className="bg-zinc-950 text-zinc-300">
                    <tr>
                      <th className="p-2.5 border-b border-zinc-800">Target</th>
                      <th className="p-2.5 border-b border-zinc-800">Recommended Syntax ✅</th>
                      <th className="p-2.5 border-b border-zinc-800">Avoid ❌</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-zinc-800/80 text-zinc-300">
                    <tr>
                      <td className="p-2.5 font-medium text-white">Text In Images</td>
                      <td className="p-2.5 font-mono text-emerald-400">"EXACT TEXT" in quotes + specify font style</td>
                      <td className="p-2.5 text-rose-400">Vague words like "text on it"</td>
                    </tr>
                    <tr>
                      <td className="p-2.5 font-medium text-white">Realistic Skin</td>
                      <td className="p-2.5 font-mono text-emerald-400">peach fuzz, natural skin pores, unposed, 35mm</td>
                      <td className="p-2.5 text-rose-400">photorealistic 8k unreal engine</td>
                    </tr>
                    <tr>
                      <td className="p-2.5 font-medium text-white">Camera HUD</td>
                      <td className="p-2.5 font-mono text-emerald-400">Explicit HUD values: "1/250s", "f/2.8", "ISO 400"</td>
                      <td className="p-2.5 text-rose-400">Unspecified camera display</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Upload hint */}
            <div className="mt-8 p-4 bg-amber-500/10 border border-amber-500/20 rounded-xl flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Terminal className="w-5 h-5 text-amber-400 shrink-0" />
                <span className="text-xs text-amber-200">
                  {lang === 'en'
                    ? 'Ready to upload? Click "Download README.md" or see the "Upload Repo" tab for git commands.'
                    : '准备好上传到 GitHub 了吗？点击上方“下载 README.md”或切换至“上传指令”查看 git 操作。'}
                </span>
              </div>
              <button
                onClick={handleDownload}
                className="px-3 py-1.5 text-xs font-semibold bg-amber-500 text-zinc-950 rounded-md hover:bg-amber-400 transition-colors shrink-0"
              >
                {lang === 'en' ? 'Download' : '立即下载'}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
