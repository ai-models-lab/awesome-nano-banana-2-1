import React, { useState } from 'react';
import { X, Copy, Check, Wand2, Sparkles, ExternalLink, Sliders, Camera, Layers, Share2 } from 'lucide-react';
import { NanoBananaPrompt } from '../data/prompts';

interface PromptDetailModalProps {
  prompt: NanoBananaPrompt | null;
  onClose: () => void;
  lang: 'en' | 'zh';
  onRemix: (prompt: NanoBananaPrompt) => void;
}

export const PromptDetailModal: React.FC<PromptDetailModalProps> = ({
  prompt,
  onClose,
  lang,
  onRemix,
}) => {
  const [copiedPrompt, setCopiedPrompt] = useState(false);
  const [copiedMarkdown, setCopiedMarkdown] = useState(false);

  if (!prompt) return null;

  const handleCopyPrompt = () => {
    navigator.clipboard.writeText(prompt.prompt);
    setCopiedPrompt(true);
    setTimeout(() => setCopiedPrompt(false), 2000);
  };

  const handleCopyMarkdown = () => {
    const md = `### ${prompt.title} (${prompt.titleZh})\n\n- **Aspect Ratio**: \`${prompt.aspectRatio}\`\n- **Optics**: \`${prompt.cameraOptics || 'N/A'}\`\n- **Model**: \`${prompt.testedModel}\`\n- **Author**: ${prompt.authorHandle}\n\n\`\`\`text\n${prompt.prompt}\n\`\`\`\n`;
    navigator.clipboard.writeText(md);
    setCopiedMarkdown(true);
    setTimeout(() => setCopiedMarkdown(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-zinc-950/80 backdrop-blur-md overflow-y-auto">
      <div
        className="relative w-full max-w-4xl bg-zinc-900 border border-zinc-800 rounded-2xl shadow-2xl overflow-hidden my-8 text-zinc-100"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-zinc-800 bg-zinc-950/50">
          <div>
            <div className="flex items-center gap-2 text-xs text-zinc-400 font-mono mb-1">
              <span className="text-amber-400 font-semibold">{prompt.category.replace('_', ' ').toUpperCase()}</span>
              <span aria-hidden="true">·</span>
              <span>{prompt.testedModel}</span>
              <span aria-hidden="true">·</span>
              <span>{prompt.aspectRatio}</span>
            </div>
            <h2 className="text-lg font-bold text-white">
              {lang === 'en' ? prompt.title : prompt.titleZh}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-zinc-400 hover:text-white rounded-lg hover:bg-zinc-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 grid grid-cols-1 lg:grid-cols-12 gap-6 max-h-[80vh] overflow-y-auto">
          {/* Left Column: Image & Quick Specs */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <div className="relative group/img rounded-xl overflow-hidden bg-zinc-950 border border-zinc-800">
              <img
                src={prompt.imageUrl}
                alt={prompt.title}
                className="w-full h-auto object-cover max-h-80"
              />
              <a
                href={prompt.imageUrl}
                target="_blank"
                rel="noreferrer"
                className="absolute bottom-2 right-2 flex items-center gap-1.5 px-2.5 py-1 rounded bg-zinc-950/80 backdrop-blur-md text-[11px] text-zinc-300 hover:text-white border border-zinc-700 opacity-0 group-hover/img:opacity-100 transition-opacity"
              >
                <ExternalLink className="w-3 h-3" />
                <span>{lang === 'en' ? 'Full Image' : '查看原图'}</span>
              </a>
            </div>

            {/* Parameter Box */}
            <div className="bg-zinc-950/70 p-4 rounded-xl border border-zinc-800 text-xs space-y-2.5">
              <div className="flex justify-between pb-2 border-b border-zinc-850">
                <span className="text-zinc-400">{lang === 'en' ? 'Aspect Ratio' : '推荐比例'}</span>
                <span className="font-mono text-amber-300 font-medium">{prompt.aspectRatio}</span>
              </div>
              {prompt.cameraOptics && (
                <div className="flex justify-between pb-2 border-b border-zinc-850">
                  <span className="text-zinc-400">{lang === 'en' ? 'Optics / Lens' : '镜头硬件'}</span>
                  <span className="font-mono text-zinc-200 text-right max-w-[200px] truncate">{prompt.cameraOptics}</span>
                </div>
              )}
              {prompt.lightingSetup && (
                <div className="flex justify-between pb-2 border-b border-zinc-850">
                  <span className="text-zinc-400">{lang === 'en' ? 'Lighting' : '光影结构'}</span>
                  <span className="text-zinc-200 text-right max-w-[200px] truncate">{prompt.lightingSetup}</span>
                </div>
              )}
              <div className="flex justify-between items-center pt-1">
                <span className="text-zinc-400">{lang === 'en' ? 'Curated By' : '作者/整理者'}</span>
                <span className="text-amber-400 font-mono">{prompt.authorHandle}</span>
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => {
                  onClose();
                  onRemix(prompt);
                }}
                className="flex-1 flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg bg-amber-500 hover:bg-amber-400 text-zinc-950 font-semibold text-xs transition-colors"
              >
                <Wand2 className="w-4 h-4" />
                <span>{lang === 'en' ? 'Remix Prompt in Builder' : '在工坊中改造/微调'}</span>
              </button>
            </div>
          </div>

          {/* Right Column: Full Prompt & Formula Anatomy */}
          <div className="lg:col-span-7 flex flex-col gap-5">
            {/* Full Prompt Box */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-xs font-semibold uppercase tracking-wider text-zinc-400">
                  {lang === 'en' ? 'Nano Banana 2.1 Prompt' : '完整提示词指令'}
                </label>
                <div className="flex items-center gap-2">
                  <button
                    onClick={handleCopyMarkdown}
                    className="flex items-center gap-1.5 px-2.5 py-1 text-xs rounded border border-zinc-800 text-zinc-400 hover:text-zinc-200 hover:border-zinc-700 transition-colors"
                  >
                    {copiedMarkdown ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{lang === 'en' ? 'Copy Markdown' : '复制Markdown'}</span>
                  </button>
                  <button
                    onClick={handleCopyPrompt}
                    className="flex items-center gap-1.5 px-3 py-1 text-xs font-medium rounded bg-zinc-100 text-zinc-950 hover:bg-white transition-colors"
                  >
                    {copiedPrompt ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{lang === 'en' ? (copiedPrompt ? 'Copied!' : 'Copy Prompt') : (copiedPrompt ? '已复制！' : '一键复制')}</span>
                  </button>
                </div>
              </div>

              <div className="bg-zinc-950 p-4 rounded-xl border border-zinc-800 text-xs font-mono text-zinc-200 leading-relaxed max-h-48 overflow-y-auto select-all">
                {prompt.prompt}
              </div>
            </div>

            {/* Negative Prompt if exists */}
            {prompt.negativePrompt && (
              <div>
                <label className="text-xs font-semibold uppercase tracking-wider text-zinc-500 block mb-1.5">
                  {lang === 'en' ? 'Negative Directives / Anti-artifacts' : '反向提示词 / 避坑词'}
                </label>
                <div className="bg-zinc-950/60 p-3 rounded-lg border border-zinc-850 text-xs font-mono text-zinc-400">
                  {prompt.negativePrompt}
                </div>
              </div>
            )}

            {/* 5-Pillar Breakdown */}
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-amber-400 mb-3 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                {lang === 'en' ? '2.1 Formula Anatomy Breakdown' : 'Nano Banana 2.1 结构解构剖析'}
              </h4>

              <div className="space-y-2 text-xs">
                <div className="bg-zinc-950/50 p-3 rounded-lg border border-zinc-800/80">
                  <span className="text-zinc-400 font-mono block text-[11px] mb-1">1. [Subject & Texture] 主体与微观质感</span>
                  <p className="text-zinc-200">{prompt.formulaBreakdown.subject}</p>
                </div>
                <div className="bg-zinc-950/50 p-3 rounded-lg border border-zinc-800/80">
                  <span className="text-zinc-400 font-mono block text-[11px] mb-1">2. [Environment & Atmosphere] 空间景深与环境</span>
                  <p className="text-zinc-200">{prompt.formulaBreakdown.environment}</p>
                </div>
                <div className="bg-zinc-950/50 p-3 rounded-lg border border-zinc-800/80">
                  <span className="text-zinc-400 font-mono block text-[11px] mb-1">3. [Lighting Physics] 光学物理与打光方案</span>
                  <p className="text-zinc-200">{prompt.formulaBreakdown.lighting}</p>
                </div>
                <div className="bg-zinc-950/50 p-3 rounded-lg border border-zinc-800/80">
                  <span className="text-zinc-400 font-mono block text-[11px] mb-1">4. [Optics & Hardware] 真实相机镜头规格</span>
                  <p className="text-zinc-200">{prompt.formulaBreakdown.optics}</p>
                </div>
              </div>
            </div>

            {/* Key 2.1 Breakthroughs */}
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-2">
                {lang === 'en' ? 'Model Breakthrough Highlights' : '2.1 版本突破特性'}
              </h4>
              <ul className="space-y-1.5 text-xs text-zinc-300">
                {prompt.highlights.map((h, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
