import React, { useState } from 'react';
import { X, Plus, Copy, Check, Sparkles } from 'lucide-react';
import { NanoBananaPrompt, CATEGORIES } from '../data/prompts';

interface SubmitPromptModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: 'en' | 'zh';
  onAddPrompt: (newPrompt: NanoBananaPrompt) => void;
}

export const SubmitPromptModal: React.FC<SubmitPromptModalProps> = ({
  isOpen,
  onClose,
  lang,
  onAddPrompt,
}) => {
  const [title, setTitle] = useState('');
  const [titleZh, setTitleZh] = useState('');
  const [category, setCategory] = useState<NanoBananaPrompt['category']>('portraits');
  const [promptText, setPromptText] = useState('');
  const [authorHandle, setAuthorHandle] = useState('@my_creator');
  const [aspectRatio, setAspectRatio] = useState<NanoBananaPrompt['aspectRatio']>('16:9');
  const [imageUrl, setImageUrl] = useState('');
  const [tags, setTags] = useState('Nano Banana 2.1, Street Photography');
  const [copiedSnippet, setCopiedSnippet] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !promptText) return;

    const newPrompt: NanoBananaPrompt = {
      id: `nb-custom-${Date.now()}`,
      title: title || 'Custom 2.1 Prompt',
      titleZh: titleZh || title || '自定义提示词',
      category,
      prompt: promptText,
      aspectRatio,
      imageUrl:
        imageUrl.trim() ||
        'https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=1200&q=85',
      author: authorHandle.replace('@', ''),
      authorHandle: authorHandle.startsWith('@') ? authorHandle : `@${authorHandle}`,
      tags: tags.split(',').map((t) => t.trim()).filter(Boolean),
      testedModel: 'Nano Banana 2.1 (Gemini-2.5-flash-image)',
      formulaBreakdown: {
        subject: title,
        environment: 'Curated by community',
        lighting: 'Custom lighting',
        optics: 'Nano Banana 2.1 optimized',
        modifiers: 'High fidelity',
      },
      highlights: ['Community verified prompt', 'Nano Banana 2.1 tested'],
    };

    onAddPrompt(newPrompt);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 1200);
  };

  const getMarkdownPRSnippet = () => {
    return `### ${title || 'New Prompt'} (${titleZh || '中文标题'})

- **Category**: \`${category}\`
- **Aspect Ratio**: \`${aspectRatio}\`
- **Author**: \`${authorHandle}\`
- **Model**: \`Nano Banana 2.1\`

\`\`\`text
${promptText}
\`\`\`
`;
  };

  const handleCopyPRSnippet = () => {
    navigator.clipboard.writeText(getMarkdownPRSnippet());
    setCopiedSnippet(true);
    setTimeout(() => setCopiedSnippet(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-zinc-950/80 backdrop-blur-md overflow-y-auto">
      <div
        className="relative w-full max-w-2xl bg-zinc-900 border border-zinc-800 rounded-2xl shadow-2xl overflow-hidden my-8 text-zinc-100"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between px-6 py-4 border-b border-zinc-800 bg-zinc-950/50">
          <div>
            <h2 className="text-base font-bold text-white flex items-center gap-2">
              <Plus className="w-4 h-4 text-amber-400" />
              {lang === 'en' ? 'Submit a Prompt / Create PR' : '提交新案例 / 生成 PR 代码'}
            </h2>
            <p className="text-xs text-zinc-400">
              {lang === 'en'
                ? 'Adds immediately to this gallery and generates Markdown for GitHub.'
                : '立即加入本地展示画廊，并自动生成 GitHub Pull Request 提交格式。'}
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-zinc-400 hover:text-white rounded-lg hover:bg-zinc-800"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-4 max-h-[75vh] overflow-y-auto text-xs">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-zinc-300 font-medium mb-1">
                {lang === 'en' ? 'Title (English)' : '英文标题 *'}
              </label>
              <input
                type="text"
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full bg-zinc-950 border border-zinc-800 rounded-lg p-2.5 text-zinc-200 focus:outline-none focus:border-amber-500"
                placeholder="e.g. Neon Rain Cyberpunk Snapshot"
              />
            </div>
            <div>
              <label className="block text-zinc-300 font-medium mb-1">
                {lang === 'en' ? 'Title (Chinese)' : '中文标题 *'}
              </label>
              <input
                type="text"
                required
                value={titleZh}
                onChange={(e) => setTitleZh(e.target.value)}
                className="w-full bg-zinc-950 border border-zinc-800 rounded-lg p-2.5 text-zinc-200 focus:outline-none focus:border-amber-500"
                placeholder="例如：赛博朋克雨夜拟真抓拍"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label className="block text-zinc-300 font-medium mb-1">
                {lang === 'en' ? 'Category' : '分类'}
              </label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value as any)}
                className="w-full bg-zinc-950 border border-zinc-800 rounded-lg p-2.5 text-zinc-200 focus:outline-none focus:border-amber-500"
              >
                {CATEGORIES.map((c) => (
                  <option key={c.id} value={c.id}>
                    {lang === 'en' ? c.nameEn : c.nameZh}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-zinc-300 font-medium mb-1">
                {lang === 'en' ? 'Aspect Ratio' : '画面比例'}
              </label>
              <select
                value={aspectRatio}
                onChange={(e) => setAspectRatio(e.target.value as any)}
                className="w-full bg-zinc-950 border border-zinc-800 rounded-lg p-2.5 text-zinc-200 focus:outline-none focus:border-amber-500 font-mono"
              >
                <option value="16:9">16:9 (Landscape)</option>
                <option value="4:5">4:5 (Portrait)</option>
                <option value="1:1">1:1 (Square)</option>
                <option value="3:2">3:2 (35mm Photo)</option>
                <option value="2:3">2:3 (Poster)</option>
                <option value="9:16">9:16 (Vertical)</option>
              </select>
            </div>
            <div>
              <label className="block text-zinc-300 font-medium mb-1">
                {lang === 'en' ? 'Author / Twitter' : '作者 / 推特'}
              </label>
              <input
                type="text"
                value={authorHandle}
                onChange={(e) => setAuthorHandle(e.target.value)}
                className="w-full bg-zinc-950 border border-zinc-800 rounded-lg p-2.5 text-zinc-200 focus:outline-none focus:border-amber-500 font-mono"
                placeholder="@handle"
              />
            </div>
          </div>

          <div>
            <label className="block text-zinc-300 font-medium mb-1">
              {lang === 'en' ? 'Full Nano Banana 2.1 Prompt *' : '完整 Nano Banana 2.1 提示词 *'}
            </label>
            <textarea
              required
              rows={4}
              value={promptText}
              onChange={(e) => setPromptText(e.target.value)}
              className="w-full bg-zinc-950 border border-zinc-800 rounded-lg p-2.5 text-zinc-200 focus:outline-none focus:border-amber-500 font-mono leading-relaxed"
              placeholder="Paste exact prompt text..."
            />
          </div>

          <div>
            <label className="block text-zinc-300 font-medium mb-1">
              {lang === 'en' ? 'Image Preview URL (Optional)' : '图片预览 URL（可选）'}
            </label>
            <input
              type="url"
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
              className="w-full bg-zinc-950 border border-zinc-800 rounded-lg p-2.5 text-zinc-200 focus:outline-none focus:border-amber-500 font-mono"
              placeholder="https://... (defaults to high-res aesthetic placeholder)"
            />
          </div>

          <div>
            <label className="block text-zinc-300 font-medium mb-1">
              {lang === 'en' ? 'Tags (comma separated)' : '标签（逗号分隔）'}
            </label>
            <input
              type="text"
              value={tags}
              onChange={(e) => setTags(e.target.value)}
              className="w-full bg-zinc-950 border border-zinc-800 rounded-lg p-2.5 text-zinc-200 focus:outline-none focus:border-amber-500"
              placeholder="Portrait, 35mm, Golden Hour"
            />
          </div>

          <div className="pt-2 flex items-center justify-between gap-3">
            <button
              type="button"
              onClick={handleCopyPRSnippet}
              className="flex items-center gap-1.5 px-3 py-2 rounded-lg border border-zinc-700 bg-zinc-800 text-zinc-300 hover:text-white"
            >
              {copiedSnippet ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{lang === 'en' ? 'Copy Markdown PR Snippet' : '复制 GitHub PR 片段'}</span>
            </button>

            <button
              type="submit"
              className={`flex items-center gap-1.5 px-5 py-2 rounded-lg font-semibold transition-colors ${
                submitted
                  ? 'bg-emerald-500 text-zinc-950'
                  : 'bg-amber-500 hover:bg-amber-400 text-zinc-950'
              }`}
            >
              {submitted ? (
                <>
                  <Check className="w-4 h-4" />
                  <span>{lang === 'en' ? 'Added!' : '添加成功！'}</span>
                </>
              ) : (
                <>
                  <Plus className="w-4 h-4" />
                  <span>{lang === 'en' ? 'Add to Gallery' : '保存加入画廊'}</span>
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
