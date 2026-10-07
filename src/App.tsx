import React, { useState, useMemo } from 'react';
import { Navbar } from './components/Navbar';
import { PromptCard } from './components/PromptCard';
import { PromptDetailModal } from './components/PromptDetailModal';
import { ReadmeViewer } from './components/ReadmeViewer';
import { PromptGenerator } from './components/PromptGenerator';
import { UploadModal } from './components/UploadModal';
import { SubmitPromptModal } from './components/SubmitPromptModal';
import { PROMPTS_DATA, CATEGORIES, NanoBananaPrompt } from './data/prompts';
import { RAW_README_TEXT } from './data/readmeText';
import {
  Search,
  Filter,
  Sparkles,
  Camera,
  Layers,
  Type,
  User,
  Package,
  Moon,
  Home,
  Users,
  Film,
  Coffee,
  Shirt,
  Download,
  BookOpen,
  Wand2,
  FolderGit2,
  Check,
  Copy,
  ExternalLink,
} from 'lucide-react';

export default function App() {
  const [prompts, setPrompts] = useState<NanoBananaPrompt[]>(PROMPTS_DATA);
  const [activeTab, setActiveTab] = useState<'gallery' | 'readme' | 'generator' | 'upload' | 'submit'>('gallery');
  const [lang, setLang] = useState<'en' | 'zh'>('zh');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [aspectFilter, setAspectFilter] = useState<string>('all');
  const [inspectPrompt, setInspectPrompt] = useState<NanoBananaPrompt | null>(null);
  const [remixPrompt, setRemixPrompt] = useState<NanoBananaPrompt | null>(null);
  const [isSubmitOpen, setIsSubmitOpen] = useState(false);
  const [copiedBatch, setCopiedBatch] = useState(false);

  // Readme markdown string
  const [readmeContent, setReadmeContent] = useState<string>(RAW_README_TEXT);

  React.useEffect(() => {
    fetch('/README.md')
      .then((res) => {
        if (res.ok) return res.text();
        return RAW_README_TEXT;
      })
      .then((text) => setReadmeContent(text))
      .catch(() => {
        setReadmeContent(RAW_README_TEXT);
      });
  }, []);

  // Filtered prompts
  const filteredPrompts = useMemo(() => {
    return prompts.filter((p) => {
      // Category filter
      if (selectedCategory !== 'all' && p.category !== selectedCategory) {
        return false;
      }
      // Aspect ratio filter
      if (aspectFilter !== 'all' && p.aspectRatio !== aspectFilter) {
        return false;
      }
      // Search query
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase().trim();
        const matchTitle = p.title.toLowerCase().includes(query) || p.titleZh.toLowerCase().includes(query);
        const matchPrompt = p.prompt.toLowerCase().includes(query);
        const matchAuthor = p.authorHandle.toLowerCase().includes(query);
        const matchTags = p.tags.some((t) => t.toLowerCase().includes(query));
        return matchTitle || matchPrompt || matchAuthor || matchTags;
      }
      return true;
    });
  }, [prompts, selectedCategory, aspectFilter, searchQuery]);

  // Category counts
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { all: prompts.length };
    prompts.forEach((p) => {
      counts[p.category] = (counts[p.category] || 0) + 1;
    });
    return counts;
  }, [prompts]);

  const handleInspect = (p: NanoBananaPrompt) => {
    setInspectPrompt(p);
  };

  const handleRemix = (p: NanoBananaPrompt) => {
    setRemixPrompt(p);
    setActiveTab('generator');
  };

  const handleAddPrompt = (newPrompt: NanoBananaPrompt) => {
    setPrompts((prev) => [newPrompt, ...prev]);
  };

  const handleCopyAllPrompts = () => {
    const allText = filteredPrompts
      .map((p, i) => `--- Prompt #${i + 1}: ${p.title} ---\n${p.prompt}\n(Aspect: ${p.aspectRatio}, Author: ${p.authorHandle})`)
      .join('\n\n');
    navigator.clipboard.writeText(allText);
    setCopiedBatch(true);
    setTimeout(() => setCopiedBatch(false), 2000);
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 flex flex-col font-sans selection:bg-amber-500 selection:text-zinc-950">
      {/* Navbar */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        lang={lang}
        setLang={setLang}
        promptCount={prompts.length}
        onOpenSubmit={() => setIsSubmitOpen(true)}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {activeTab === 'gallery' && (
          <div>
            {/* Hero Header */}
            <section className="border-b border-zinc-850 bg-gradient-to-b from-zinc-900/60 to-zinc-950 px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
              <div className="max-w-7xl mx-auto">
                <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
                  <div className="max-w-3xl">
                    <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-amber-500/10 border border-amber-500/20 text-amber-300 text-xs font-mono mb-3">
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>Nano Banana 2.1 Trending Prompts & Recipes</span>
                    </div>
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white">
                      Awesome Nano Banana 2.1
                    </h1>
                    <p className="mt-3 text-sm sm:text-base text-zinc-400 leading-relaxed max-w-2xl">
                      {lang === 'en'
                        ? 'Master the 2.1 generative leap: letter-perfect in-image typography, photorealistic skin micro-pores, authentic camera HUD viewfinders, and complex optical physics.'
                        : '精准复刻全网爆火 Nano Banana 2.1（Gemini-2.5-flash-image / Imagen 3）高保真提示词：画面内完美字体排版、真实微孔肌理、数码相机取景框HUD与严谨光学架构。'}
                    </p>

                    {/* Quick Formula Highlights */}
                    <div className="mt-4 flex flex-wrap items-center gap-2 text-xs text-zinc-400 font-mono">
                      <span className="text-zinc-300 font-semibold">Formula:</span>
                      <span>[Subject + Micro-Detail]</span>
                      <span aria-hidden="true" className="text-zinc-600">→</span>
                      <span>[Atmospheric Depth]</span>
                      <span aria-hidden="true" className="text-zinc-600">→</span>
                      <span>[Optics/Lens]</span>
                      <span aria-hidden="true" className="text-zinc-600">→</span>
                      <span>[Lighting Physics]</span>
                      <span aria-hidden="true" className="text-zinc-600">→</span>
                      <span className="text-amber-400 font-semibold">["In-Image Text"]</span>
                    </div>
                  </div>

                  {/* Hero Quick Actions */}
                  <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto">
                    <button
                      onClick={() => setActiveTab('readme')}
                      className="flex-1 sm:flex-initial flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-200 border border-zinc-700 text-xs font-semibold transition-colors"
                    >
                      <BookOpen className="w-4 h-4 text-amber-400" />
                      <span>{lang === 'en' ? 'View README.md' : '查看完整 README'}</span>
                    </button>
                    <button
                      onClick={() => setActiveTab('generator')}
                      className="flex-1 sm:flex-initial flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-zinc-950 text-xs font-semibold transition-colors shadow-md"
                    >
                      <Wand2 className="w-4 h-4" />
                      <span>{lang === 'en' ? 'Prompt Remixer' : '提示词工坊'}</span>
                    </button>
                    <button
                      onClick={() => setActiveTab('upload')}
                      className="flex-1 sm:flex-initial flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-zinc-900 hover:bg-zinc-850 text-zinc-300 border border-zinc-800 text-xs font-medium transition-colors"
                    >
                      <FolderGit2 className="w-4 h-4 text-emerald-400" />
                      <span>{lang === 'en' ? 'Git Upload' : '上传到仓库'}</span>
                    </button>
                  </div>
                </div>
              </div>
            </section>

            {/* Filter Bar & Search Controls */}
            <section className="sticky top-16 z-30 bg-zinc-950/95 backdrop-blur-md border-b border-zinc-850 py-3 px-4 sm:px-6 lg:px-8">
              <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3">
                {/* Search Input */}
                <div className="relative flex-1 max-w-md">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder={lang === 'en' ? 'Search prompts, tags, authors, optics...' : '搜索提示词、标签、作者或相机型号...'}
                    className="w-full bg-zinc-900 border border-zinc-800 rounded-lg pl-9 pr-4 py-2 text-xs text-zinc-200 placeholder-zinc-500 focus:outline-none focus:border-amber-500 transition-colors"
                  />
                  {searchQuery && (
                    <button
                      onClick={() => setSearchQuery('')}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-zinc-500 hover:text-zinc-300"
                    >
                      ✕
                    </button>
                  )}
                </div>

                {/* Right controls: aspect filter & copy all */}
                <div className="flex items-center gap-3 overflow-x-auto no-scrollbar">
                  {/* Aspect Ratio Filter (segmented buttons) */}
                  <div className="flex items-center gap-1 p-1 bg-zinc-900 rounded-lg border border-zinc-800 text-xs">
                    <span className="text-[11px] text-zinc-500 px-2 hidden sm:inline">Ratio:</span>
                    {['all', '16:9', '4:5', '1:1', '2:3'].map((ar) => (
                      <button
                        key={ar}
                        onClick={() => setAspectFilter(ar)}
                        className={`px-2.5 py-1 rounded text-xs font-mono transition-colors ${
                          aspectFilter === ar
                            ? 'bg-zinc-800 text-amber-400 font-semibold shadow-xs'
                            : 'text-zinc-400 hover:text-zinc-200'
                        }`}
                      >
                        {ar === 'all' ? (lang === 'en' ? 'All' : '全部') : ar}
                      </button>
                    ))}
                  </div>

                  {/* Batch Copy Button */}
                  <button
                    onClick={handleCopyAllPrompts}
                    className="flex items-center gap-1.5 px-3 py-2 text-xs font-medium rounded-lg border border-zinc-800 bg-zinc-900 text-zinc-300 hover:border-zinc-700 transition-colors shrink-0"
                    title="Copy all currently filtered prompts"
                  >
                    {copiedBatch ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copiedBatch ? (lang === 'en' ? 'Copied All!' : '已复制全部！') : (lang === 'en' ? 'Batch Copy' : '批量复制')}</span>
                  </button>
                </div>
              </div>

              {/* Category Segmented Scrollable Filter */}
              <div className="max-w-7xl mx-auto mt-3 overflow-x-auto no-scrollbar">
                <div className="flex items-center gap-1.5 pb-1">
                  <button
                    onClick={() => setSelectedCategory('all')}
                    className={`px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-colors flex items-center gap-1.5 ${
                      selectedCategory === 'all'
                        ? 'bg-amber-500 text-zinc-950 font-semibold'
                        : 'bg-zinc-900 text-zinc-400 hover:text-zinc-200 border border-zinc-800'
                    }`}
                  >
                    <span>{lang === 'en' ? 'All Categories' : '全部精选'}</span>
                    <span className={`text-[10px] font-mono px-1 rounded ${selectedCategory === 'all' ? 'bg-amber-600/30 text-zinc-950 font-bold' : 'bg-zinc-800 text-zinc-400'}`}>
                      {categoryCounts['all']}
                    </span>
                  </button>

                  {CATEGORIES.map((cat) => {
                    const count = categoryCounts[cat.id] || 0;
                    const isActive = selectedCategory === cat.id;
                    return (
                      <button
                        key={cat.id}
                        onClick={() => setSelectedCategory(cat.id)}
                        className={`px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-colors flex items-center gap-1.5 ${
                          isActive
                            ? 'bg-amber-500 text-zinc-950 font-semibold'
                            : 'bg-zinc-900 text-zinc-400 hover:text-zinc-200 border border-zinc-800'
                        }`}
                      >
                        <span>{lang === 'en' ? cat.nameEn : cat.nameZh}</span>
                        {count > 0 && (
                          <span className={`text-[10px] font-mono px-1 rounded ${isActive ? 'bg-amber-600/30 text-zinc-950 font-bold' : 'bg-zinc-800 text-zinc-400'}`}>
                            {count}
                          </span>
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>
            </section>

            {/* Gallery Grid */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
              {/* Category Header Description if selected */}
              {selectedCategory !== 'all' && (
                <div className="mb-6 p-4 rounded-xl bg-zinc-900/60 border border-zinc-800">
                  {(() => {
                    const currentCat = CATEGORIES.find((c) => c.id === selectedCategory);
                    if (!currentCat) return null;
                    return (
                      <div>
                        <h2 className="text-base font-bold text-white flex items-center gap-2">
                          <span>{lang === 'en' ? currentCat.nameEn : currentCat.nameZh}</span>
                          <span className="text-xs text-amber-400 font-mono font-normal">
                            ({filteredPrompts.length} {lang === 'en' ? 'prompts' : '条提示词'})
                          </span>
                        </h2>
                        <p className="text-xs text-zinc-400 mt-1">
                          {lang === 'en' ? currentCat.descriptionEn : currentCat.descriptionZh}
                        </p>
                      </div>
                    );
                  })()}
                </div>
              )}

              {/* Prompt Cards Grid */}
              {filteredPrompts.length === 0 ? (
                <div className="text-center py-20 bg-zinc-900/30 rounded-2xl border border-zinc-850">
                  <p className="text-zinc-400 text-sm">
                    {lang === 'en' ? 'No prompts found matching your query.' : '没有找到匹配的提示词。'}
                  </p>
                  <button
                    onClick={() => {
                      setSelectedCategory('all');
                      setSearchQuery('');
                      setAspectFilter('all');
                    }}
                    className="mt-3 px-4 py-2 text-xs rounded-lg bg-zinc-800 text-amber-400 font-medium hover:bg-zinc-700"
                  >
                    {lang === 'en' ? 'Reset Filters' : '重置所有筛选条件'}
                  </button>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
                  {filteredPrompts.map((prompt) => (
                    <PromptCard
                      key={prompt.id}
                      prompt={prompt}
                      lang={lang}
                      onInspect={handleInspect}
                      onRemix={handleRemix}
                    />
                  ))}
                </div>
              )}
            </section>
          </div>
        )}

        {/* Tab: README Viewer */}
        {activeTab === 'readme' && (
          <ReadmeViewer lang={lang} readmeContent={readmeContent} />
        )}

        {/* Tab: Prompt Remixer / Generator */}
        {activeTab === 'generator' && (
          <PromptGenerator lang={lang} initialPrompt={remixPrompt} />
        )}

        {/* Tab: Git Push & Upload Guide */}
        {activeTab === 'upload' && (
          <UploadModal lang={lang} readmeContent={readmeContent} />
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-zinc-850 bg-zinc-950 py-8 px-4 sm:px-6 lg:px-8 text-xs text-zinc-400">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="font-bold text-white">awesome-nano-banana-2-1</span>
            <span aria-hidden="true" className="text-zinc-600">·</span>
            <span>Curated by AI Art & Prompt Engineering Community</span>
          </div>

          <div className="flex items-center gap-4 text-zinc-400">
            <button
              onClick={() => setActiveTab('readme')}
              className="hover:text-zinc-200 transition-colors"
            >
              README.md
            </button>
            <span aria-hidden="true" className="text-zinc-600">·</span>
            <button
              onClick={() => setActiveTab('upload')}
              className="hover:text-zinc-200 transition-colors"
            >
              GitHub Git Push
            </button>
            <span aria-hidden="true" className="text-zinc-600">·</span>
            <button
              onClick={() => setIsSubmitOpen(true)}
              className="text-amber-400 hover:text-amber-300 transition-colors"
            >
              Submit Prompt PR
            </button>
          </div>
        </div>
      </footer>

      {/* Inspect Detail Modal */}
      <PromptDetailModal
        prompt={inspectPrompt}
        onClose={() => setInspectPrompt(null)}
        lang={lang}
        onRemix={handleRemix}
      />

      {/* Submit / PR Modal */}
      <SubmitPromptModal
        isOpen={isSubmitOpen}
        onClose={() => setIsSubmitOpen(false)}
        lang={lang}
        onAddPrompt={handleAddPrompt}
      />
    </div>
  );
}
