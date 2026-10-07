import React from 'react';
import { Sparkles, BookOpen, Wand2, UploadCloud, Plus, Github, Star, GitFork, Check, Copy } from 'lucide-react';

interface NavbarProps {
  activeTab: 'gallery' | 'readme' | 'generator' | 'upload' | 'submit';
  setActiveTab: (tab: 'gallery' | 'readme' | 'generator' | 'upload' | 'submit') => void;
  lang: 'en' | 'zh';
  setLang: (lang: 'en' | 'zh') => void;
  promptCount: number;
  onOpenSubmit: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  setActiveTab,
  lang,
  setLang,
  promptCount,
  onOpenSubmit,
}) => {
  const [copiedLink, setCopiedLink] = React.useState(false);
  const [starred, setStarred] = React.useState(false);
  const [starCount, setStarCount] = React.useState(382);

  const handleStar = () => {
    if (!starred) {
      setStarred(true);
      setStarCount((prev) => prev + 1);
    } else {
      setStarred(false);
      setStarCount((prev) => prev - 1);
    }
  };

  const handleCopyShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  return (
    <header className="sticky top-0 z-40 bg-zinc-950/90 backdrop-blur-md border-b border-zinc-800 text-zinc-100">
      {/* Top Banner / Announcement */}
      <div className="bg-amber-500/10 border-b border-amber-500/20 px-4 py-1.5 text-xs text-amber-300 flex items-center justify-between">
        <div className="flex items-center gap-2 mx-auto sm:mx-0">
          <span className="inline-block w-2 h-2 rounded-full bg-amber-400 animate-pulse"></span>
          <span>
            {lang === 'en'
              ? 'Nano Banana 2.1 Trending — Superior in-image typography, micro-skin textures, and zero plastic airbrushing.'
              : 'Nano Banana 2.1 全网火爆 — 突破性图像内文字渲染、真实微观皮肤纹理、拟真相机HUD全新发布。'}
          </span>
        </div>
        <div className="hidden sm:flex items-center gap-3 text-amber-200/80">
          <span>{promptCount} {lang === 'en' ? 'Prompts Curated' : '条精选提示词'}</span>
          <span aria-hidden="true">·</span>
          <span>v2.1.0 Release</span>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-4">
          {/* Logo & Title */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setActiveTab('gallery')}
              className="flex items-center gap-3 text-left group focus:outline-none"
            >
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center text-zinc-950 font-bold text-lg shadow-sm group-hover:scale-105 transition-transform">
                🍌
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-bold text-base tracking-tight text-white group-hover:text-amber-400 transition-colors">
                    awesome-nano-banana-2-1
                  </span>
                  <span className="text-[10px] uppercase font-mono px-1.5 py-0.5 rounded bg-zinc-800 text-amber-400 border border-zinc-700">
                    2.1
                  </span>
                </div>
                <p className="text-xs text-zinc-400 hidden md:block">
                  {lang === 'en'
                    ? 'Curated prompts, formulas & showcase for Nano Banana 2.1'
                    : '精选 Nano Banana 2.1 顶级提示词与实拍复刻案例库'}
                </p>
              </div>
            </button>
          </div>

          {/* Navigation Tabs */}
          <nav className="hidden lg:flex items-center gap-1 bg-zinc-900/80 p-1 rounded-lg border border-zinc-800 text-sm">
            <button
              onClick={() => setActiveTab('gallery')}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-md font-medium transition-colors ${
                activeTab === 'gallery'
                  ? 'bg-zinc-800 text-amber-400 shadow-xs'
                  : 'text-zinc-400 hover:text-zinc-200'
              }`}
            >
              <Sparkles className="w-4 h-4" />
              {lang === 'en' ? 'Gallery & Prompts' : '精选画廊'}
            </button>
            <button
              onClick={() => setActiveTab('readme')}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-md font-medium transition-colors ${
                activeTab === 'readme'
                  ? 'bg-zinc-800 text-amber-400 shadow-xs'
                  : 'text-zinc-400 hover:text-zinc-200'
              }`}
            >
              <BookOpen className="w-4 h-4" />
              {lang === 'en' ? 'README.md (GitHub)' : 'README 仓库文档'}
            </button>
            <button
              onClick={() => setActiveTab('generator')}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-md font-medium transition-colors ${
                activeTab === 'generator'
                  ? 'bg-zinc-800 text-amber-400 shadow-xs'
                  : 'text-zinc-400 hover:text-zinc-200'
              }`}
            >
              <Wand2 className="w-4 h-4" />
              {lang === 'en' ? 'Prompt Remixer' : '提示词工坊'}
            </button>
            <button
              onClick={() => setActiveTab('upload')}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-md font-medium transition-colors ${
                activeTab === 'upload'
                  ? 'bg-zinc-800 text-amber-400 shadow-xs'
                  : 'text-zinc-400 hover:text-zinc-200'
              }`}
            >
              <UploadCloud className="w-4 h-4" />
              {lang === 'en' ? 'Upload Repo' : '一键导出/上传'}
            </button>
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-2">
            {/* Language Toggle */}
            <button
              onClick={() => setLang(lang === 'en' ? 'zh' : 'en')}
              className="px-2.5 py-1 text-xs font-mono font-medium rounded border border-zinc-800 bg-zinc-900 text-zinc-300 hover:border-zinc-700 transition-colors"
              title="Toggle Language / 切换语言"
            >
              {lang === 'en' ? '中 / EN' : 'EN / 中'}
            </button>

            {/* Submit Prompt Button */}
            <button
              onClick={onOpenSubmit}
              className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-md bg-amber-500 text-zinc-950 font-semibold hover:bg-amber-400 transition-colors shadow-xs"
            >
              <Plus className="w-3.5 h-3.5" />
              {lang === 'en' ? 'Submit' : '提交案例'}
            </button>

            {/* GitHub Star Button Simulation */}
            <button
              onClick={handleStar}
              className={`flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-medium rounded-md border transition-colors ${
                starred
                  ? 'border-amber-500/50 bg-amber-500/10 text-amber-300'
                  : 'border-zinc-800 bg-zinc-900 text-zinc-300 hover:border-zinc-700'
              }`}
              title="Star this repository on GitHub"
            >
              <Star className={`w-3.5 h-3.5 ${starred ? 'fill-amber-400 text-amber-400' : ''}`} />
              <span>Star</span>
              <span className="text-zinc-500 font-mono text-[11px] ml-0.5">{starCount}</span>
            </button>

            {/* Share / Copy link */}
            <button
              onClick={handleCopyShare}
              className="p-1.5 text-zinc-400 hover:text-zinc-200 rounded border border-zinc-800 bg-zinc-900 transition-colors"
              title="Copy page link"
            >
              {copiedLink ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {/* Mobile Submenu Tabs */}
        <div className="flex lg:hidden overflow-x-auto py-2 gap-2 border-t border-zinc-800/80 text-xs no-scrollbar">
          <button
            onClick={() => setActiveTab('gallery')}
            className={`px-3 py-1 rounded whitespace-nowrap ${
              activeTab === 'gallery' ? 'bg-zinc-800 text-amber-400' : 'text-zinc-400'
            }`}
          >
            {lang === 'en' ? 'Gallery' : '精选画廊'}
          </button>
          <button
            onClick={() => setActiveTab('readme')}
            className={`px-3 py-1 rounded whitespace-nowrap ${
              activeTab === 'readme' ? 'bg-zinc-800 text-amber-400' : 'text-zinc-400'
            }`}
          >
            {lang === 'en' ? 'README.md' : '仓库文档'}
          </button>
          <button
            onClick={() => setActiveTab('generator')}
            className={`px-3 py-1 rounded whitespace-nowrap ${
              activeTab === 'generator' ? 'bg-zinc-800 text-amber-400' : 'text-zinc-400'
            }`}
          >
            {lang === 'en' ? 'Remixer' : '提示词工坊'}
          </button>
          <button
            onClick={() => setActiveTab('upload')}
            className={`px-3 py-1 rounded whitespace-nowrap ${
              activeTab === 'upload' ? 'bg-zinc-800 text-amber-400' : 'text-zinc-400'
            }`}
          >
            {lang === 'en' ? 'Upload Repo' : '上传指令'}
          </button>
        </div>
      </div>
    </header>
  );
};
