import React, { useState } from 'react';
import { Copy, Check, Eye, Wand2, Sparkles, SlidersHorizontal } from 'lucide-react';
import { NanoBananaPrompt } from '../data/prompts';

interface PromptCardProps {
  prompt: NanoBananaPrompt;
  lang: 'en' | 'zh';
  onInspect: (prompt: NanoBananaPrompt) => void;
  onRemix: (prompt: NanoBananaPrompt) => void;
}

export const PromptCard: React.FC<PromptCardProps> = ({
  prompt,
  lang,
  onInspect,
  onRemix,
}) => {
  const [copied, setCopied] = useState(false);
  const [imgError, setImgError] = useState(false);

  const handleCopy = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText(prompt.prompt);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const fallbackPlaceholder = 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=85';

  const getAspectClass = (ar: string) => {
    switch (ar) {
      case '16:9':
        return 'aspect-video';
      case '4:5':
        return 'aspect-[4/5]';
      case '3:2':
        return 'aspect-[3/2]';
      case '2:3':
        return 'aspect-[2/3]';
      case '3:4':
        return 'aspect-[3/4]';
      case '1:1':
      default:
        return 'aspect-square';
    }
  };

  return (
    <article
      onClick={() => onInspect(prompt)}
      className="group relative flex flex-col bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden hover:border-zinc-700 transition-all duration-200 cursor-pointer text-zinc-100 shadow-sm hover:shadow-xl"
    >
      {/* Image Preview Container */}
      <div className={`relative w-full overflow-hidden bg-zinc-950 ${getAspectClass(prompt.aspectRatio)}`}>
        <img
          src={imgError ? fallbackPlaceholder : prompt.imageUrl}
          alt={prompt.title}
          loading="lazy"
          onError={() => setImgError(true)}
          className="w-full h-full object-cover object-center group-hover:scale-[1.03] transition-transform duration-300"
        />

        {/* Quiet Top-Right Aspect Ratio & Model Indicator */}
        <div className="absolute top-2.5 right-2.5 flex items-center gap-1.5 bg-zinc-950/80 backdrop-blur-md px-2 py-1 rounded text-[11px] font-mono text-zinc-300 border border-zinc-800/80">
          <span>{prompt.aspectRatio}</span>
        </div>

        {/* Top-Left Category Badge */}
        <div className="absolute top-2.5 left-2.5 flex items-center gap-1.5 bg-amber-500/90 text-zinc-950 px-2 py-0.5 rounded text-[10px] font-semibold tracking-wider uppercase backdrop-blur-sm">
          <span>{prompt.category.replace('_', ' ')}</span>
        </div>

        {/* Quick Hover Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-end justify-between p-3">
          <div className="flex items-center gap-2">
            <button
              onClick={(e) => {
                e.stopPropagation();
                onInspect(prompt);
              }}
              className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-md bg-zinc-900/90 text-xs text-zinc-200 hover:text-white hover:bg-zinc-800 border border-zinc-700 backdrop-blur-sm transition-colors"
            >
              <Eye className="w-3.5 h-3.5" />
              <span>{lang === 'en' ? 'Inspect' : '查看参数'}</span>
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                onRemix(prompt);
              }}
              className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-md bg-amber-500/90 text-xs text-zinc-950 font-medium hover:bg-amber-400 backdrop-blur-sm transition-colors"
            >
              <Wand2 className="w-3.5 h-3.5" />
              <span>{lang === 'en' ? 'Remix' : '调参工坊'}</span>
            </button>
          </div>

          <button
            onClick={handleCopy}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium transition-colors ${
              copied
                ? 'bg-emerald-500 text-zinc-950'
                : 'bg-zinc-100 text-zinc-950 hover:bg-white'
            }`}
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5" />
                <span>{lang === 'en' ? 'Copied' : '已复制'}</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" />
                <span>{lang === 'en' ? 'Copy Prompt' : '复制词'}</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-4 flex flex-col flex-1">
        {/* Quiet unboxed metadata: NO PILLS */}
        <div className="flex items-center gap-2 text-xs text-zinc-400 mb-2 font-mono">
          <span className="text-amber-400">{prompt.authorHandle}</span>
          <span aria-hidden="true" className="text-zinc-600">·</span>
          <span>{prompt.testedModel.replace(' (Gemini-2.5-flash-image)', '')}</span>
        </div>

        {/* Title */}
        <h3 className="text-sm font-semibold text-zinc-100 group-hover:text-amber-300 transition-colors line-clamp-1 mb-1.5">
          {lang === 'en' ? prompt.title : prompt.titleZh}
        </h3>

        {/* Prompt excerpt */}
        <p className="text-xs text-zinc-400 line-clamp-3 font-mono leading-relaxed bg-zinc-950/60 p-2.5 rounded-lg border border-zinc-800/80 mb-3 flex-1 select-all">
          {prompt.prompt}
        </p>

        {/* Card Footer: tags as quiet inline text */}
        <div className="pt-2 border-t border-zinc-800/60 flex items-center justify-between text-[11px] text-zinc-400">
          <div className="flex items-center gap-1.5 truncate">
            {prompt.tags.slice(0, 3).map((tag, idx) => (
              <React.Fragment key={tag}>
                {idx > 0 && <span aria-hidden="true" className="text-zinc-600">/</span>}
                <span className="truncate hover:text-zinc-300 transition-colors">{tag}</span>
              </React.Fragment>
            ))}
          </div>

          <button
            onClick={handleCopy}
            className="text-zinc-400 hover:text-amber-400 transition-colors p-1"
            title="Quick Copy Prompt"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
          </button>
        </div>
      </div>
    </article>
  );
};
