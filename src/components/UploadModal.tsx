import React, { useState } from 'react';
import { Terminal, Download, Copy, Check, Github, FolderGit2, FileText, CheckCircle2 } from 'lucide-react';

interface UploadModalProps {
  lang: 'en' | 'zh';
  readmeContent: string;
}

export const UploadModal: React.FC<UploadModalProps> = ({ lang, readmeContent }) => {
  const [copiedCommands, setCopiedCommands] = useState(false);
  const [downloadedReadme, setDownloadedReadme] = useState(false);
  const [repoName, setRepoName] = useState('awesome-nano-banana-2-1');
  const [githubUser, setGithubUser] = useState('your-github-username');

  const gitBashScript = `# 1. 进入项目根目录
cd ${repoName}

# 2. 初始化 Git 仓库
git init

# 3. 将所有文件（包含 README.md、代码、提示词数据集）加入暂存区
git add .

# 4. 提交初始版本
git commit -m "feat: initial release of awesome-nano-banana-2-1"

# 5. 设置主分支为 main
git branch -M main

# 6. 关联你自己的 GitHub 远程仓库（请在 GitHub 上先新建一个仓库）
git remote add origin https://github.com/${githubUser}/${repoName}.git

# 7. 推送上传到 GitHub
git push -u origin main`;

  const handleCopyCommands = () => {
    navigator.clipboard.writeText(gitBashScript);
    setCopiedCommands(true);
    setTimeout(() => setCopiedCommands(false), 2000);
  };

  const handleDownloadReadme = () => {
    const blob = new Blob([readmeContent], { type: 'text/markdown;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'README.md');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    setDownloadedReadme(true);
    setTimeout(() => setDownloadedReadme(false), 2000);
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Title */}
      <div className="mb-8">
        <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 mb-1">
          <FolderGit2 className="w-4 h-4" />
          <span>GITHUB REPOSITORY EXPORT & UPLOAD GUIDE</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
          {lang === 'en' ? 'Upload to GitHub Repository' : '一键形成 GitHub 仓库与上传指南'}
        </h1>
        <p className="text-sm text-zinc-400 mt-1">
          {lang === 'en'
            ? 'Complete repository structure is already generated in the root directory. Follow these steps to push to your GitHub account.'
            : '本项目的全部仓库核心文件（README.md、CONTRIBUTING.md、LICENSE、prompts.json 等）已在根目录生成完毕，按以下步骤即可快速推送到你的 GitHub！'}
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left: Terminal Commands & TDK Card */}
        <div className="lg:col-span-7 space-y-6">
          {/* GitHub TDK Settings Card */}
          <div className="bg-zinc-900 border border-amber-500/30 rounded-xl p-5 space-y-4 bg-gradient-to-br from-amber-500/5 to-transparent">
            <div className="flex items-center justify-between">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-amber-400 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-amber-400" />
                <span>GitHub 仓库 TDK 配置信息（直接复制到 GitHub）</span>
              </h3>
              <span className="text-[11px] font-mono text-zinc-400">SEO & Repo Metadata</span>
            </div>

            {/* Title (T) */}
            <div className="space-y-1">
              <div className="flex items-center justify-between text-xs">
                <span className="text-zinc-400 font-medium">Title（仓库名 / 标题）：</span>
                <button
                  onClick={() => navigator.clipboard.writeText('awesome-nano-banana-2-1')}
                  className="text-[11px] text-amber-400 hover:text-amber-300 font-mono"
                >
                  复制仓库名
                </button>
              </div>
              <div className="bg-zinc-950 p-2.5 rounded-lg border border-zinc-800 text-xs font-mono text-white select-all">
                awesome-nano-banana-2-1
              </div>
              <p className="text-[11px] text-zinc-500">完整标题：Awesome Nano Banana 2.1 — Curated Prompts, Showcase & Engineering Guide</p>
            </div>

            {/* Description (D) */}
            <div className="space-y-1">
              <div className="flex items-center justify-between text-xs">
                <span className="text-zinc-400 font-medium">Description（GitHub About 简介，350字内）：</span>
                <button
                  onClick={() => navigator.clipboard.writeText('🍌 Curated collection of viral prompts, visual showcases, recipes and prompt engineering formulas for Nano Banana 2.1 (Gemini-2.5-flash-image / Imagen 3). 精选 Nano Banana 2.1 顶级提示词与实拍复刻案例库。')}
                  className="text-[11px] text-amber-400 hover:text-amber-300 font-mono"
                >
                  一键复制简介
                </button>
              </div>
              <div className="bg-zinc-950 p-2.5 rounded-lg border border-zinc-800 text-xs font-mono text-zinc-300 select-all leading-relaxed">
                🍌 Curated collection of viral prompts, visual showcases, recipes and prompt engineering formulas for Nano Banana 2.1 (Gemini-2.5-flash-image / Imagen 3). 精选 Nano Banana 2.1 顶级提示词与实拍复刻案例库。
              </div>
            </div>

            {/* Keywords / Topics (K) */}
            <div className="space-y-1">
              <div className="flex items-center justify-between text-xs">
                <span className="text-zinc-400 font-medium">Keywords / Topics（GitHub 标签）：</span>
                <button
                  onClick={() => navigator.clipboard.writeText('awesome, awesome-list, nano-banana, nano-banana-2, gemini, gemini-flash, prompt-engineering, prompts, ai-art, text-to-image, imagen-3, generative-ai')}
                  className="text-[11px] text-amber-400 hover:text-amber-300 font-mono"
                >
                  一键复制全部标签
                </button>
              </div>
              <div className="bg-zinc-950 p-2.5 rounded-lg border border-zinc-800 text-xs font-mono text-amber-300 select-all">
                awesome, awesome-list, nano-banana, nano-banana-2, gemini, gemini-flash, prompt-engineering, prompts, ai-art, text-to-image, imagen-3, generative-ai
              </div>
            </div>
          </div>

          {/* Config your github username */}
          <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-5">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-zinc-300 mb-3">
              {lang === 'en' ? 'Customize Your GitHub Info' : '填写你的 GitHub 信息'}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs text-zinc-400 block mb-1">
                  {lang === 'en' ? 'GitHub Username' : 'GitHub 用户名'}
                </label>
                <input
                  type="text"
                  value={githubUser}
                  onChange={(e) => setGithubUser(e.target.value)}
                  className="w-full bg-zinc-950 border border-zinc-800 rounded-lg p-2.5 text-xs text-zinc-200 font-mono focus:outline-none focus:border-amber-500"
                  placeholder="your-username"
                />
              </div>
              <div>
                <label className="text-xs text-zinc-400 block mb-1">
                  {lang === 'en' ? 'Repository Name' : '仓库名称'}
                </label>
                <input
                  type="text"
                  value={repoName}
                  onChange={(e) => setRepoName(e.target.value)}
                  className="w-full bg-zinc-950 border border-zinc-800 rounded-lg p-2.5 text-xs text-zinc-200 font-mono focus:outline-none focus:border-amber-500"
                  placeholder="awesome-nano-banana-2-1"
                />
              </div>
            </div>
          </div>

          {/* Terminal Box */}
          <div className="bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden">
            <div className="bg-zinc-950 px-4 py-3 border-b border-zinc-800 flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs font-mono text-zinc-400">
                <Terminal className="w-4 h-4 text-emerald-400" />
                <span>terminal / bash</span>
              </div>
              <button
                onClick={handleCopyCommands}
                className="flex items-center gap-1.5 px-3 py-1 text-xs font-medium rounded bg-zinc-800 hover:bg-zinc-700 text-zinc-200 transition-colors"
              >
                {copiedCommands ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedCommands ? (lang === 'en' ? 'Copied Commands' : '指令已复制') : (lang === 'en' ? 'Copy All Commands' : '一键复制全部命令')}</span>
              </button>
            </div>

            <div className="p-4 bg-zinc-950 overflow-x-auto">
              <pre className="font-mono text-xs text-zinc-300 leading-relaxed select-all">
                {gitBashScript}
              </pre>
            </div>
          </div>

          {/* 3 Step Guide */}
          <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-5 space-y-3">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-amber-400">
              {lang === 'en' ? '3 Simple Steps to Publish' : '发布到 GitHub 的极简 3 步'}
            </h3>
            <ol className="space-y-3 text-xs text-zinc-300">
              <li className="flex items-start gap-2.5">
                <span className="w-5 h-5 rounded-full bg-zinc-800 text-amber-400 flex items-center justify-center font-mono font-bold shrink-0 mt-0.5">1</span>
                <div>
                  <strong className="text-white">在 GitHub 创建新仓库：</strong>
                  <p className="text-zinc-400 mt-0.5">访问 github.com/new，仓库名填 <code className="text-amber-300 bg-zinc-950 px-1 py-0.5 rounded">awesome-nano-banana-2-1</code>，选择 Public。</p>
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-5 h-5 rounded-full bg-zinc-800 text-amber-400 flex items-center justify-center font-mono font-bold shrink-0 mt-0.5">2</span>
                <div>
                  <strong className="text-white">运行上方推送指令：</strong>
                  <p className="text-zinc-400 mt-0.5">直接复制上方 Terminal 指令在本地终端粘贴运行，全部文件立即推送到 GitHub。</p>
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-5 h-5 rounded-full bg-zinc-800 text-amber-400 flex items-center justify-center font-mono font-bold shrink-0 mt-0.5">3</span>
                <div>
                  <strong className="text-white">自动展示 README.md 首页：</strong>
                  <p className="text-zinc-400 mt-0.5">GitHub 仓库首页将自动渲染精美 Markdown，包括提示词分类、徽章、公式和避坑指南！</p>
                </div>
              </li>
            </ol>
          </div>
        </div>

        {/* Right: Repository Structure & Download */}
        <div className="lg:col-span-5 space-y-6">
          {/* File Tree Overview */}
          <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-5">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-zinc-300 mb-3 flex items-center gap-2">
              <FolderGit2 className="w-4 h-4 text-amber-400" />
              <span>{lang === 'en' ? 'Generated Repo File Structure' : '已生成的仓库结构树'}</span>
            </h3>

            <div className="bg-zinc-950 p-4 rounded-lg border border-zinc-850 font-mono text-xs text-zinc-300 space-y-2">
              <div className="text-amber-400 font-bold">awesome-nano-banana-2-1/</div>
              <div className="pl-4 flex items-center justify-between text-zinc-200">
                <span>├── 📄 README.md</span>
                <span className="text-[10px] text-emerald-400 font-sans">✓ 已创建（含中英分类）</span>
              </div>
              <div className="pl-4 flex items-center justify-between text-zinc-200">
                <span>├── 📄 CONTRIBUTING.md</span>
                <span className="text-[10px] text-emerald-400 font-sans">✓ 贡献指南与规范</span>
              </div>
              <div className="pl-4 flex items-center justify-between text-zinc-200">
                <span>├── 📄 LICENSE</span>
                <span className="text-[10px] text-emerald-400 font-sans">✓ MIT 开源协议</span>
              </div>
              <div className="pl-4 flex items-center justify-between text-zinc-200">
                <span>├── 📁 dataset/</span>
                <span className="text-[10px] text-zinc-500 font-sans">提示词数据集</span>
              </div>
              <div className="pl-8 flex items-center justify-between text-zinc-400">
                <span>└── prompts.json</span>
                <span className="text-[10px] text-emerald-400 font-sans">✓ JSON 结构化格式</span>
              </div>
              <div className="pl-4 text-zinc-400">├── 📁 src/ (交互式Web画廊源码)</div>
              <div className="pl-4 text-zinc-400">└── 📄 package.json</div>
            </div>
          </div>

          {/* Quick Direct Download README.md */}
          <div className="bg-gradient-to-br from-amber-500/10 to-amber-600/5 border border-amber-500/20 rounded-xl p-5">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 rounded-lg bg-amber-500 text-zinc-950 font-bold">
                <FileText className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-semibold text-sm text-white">
                  {lang === 'en' ? 'Direct Download README.md' : '直接单独下载 README.md'}
                </h4>
                <p className="text-xs text-zinc-400">
                  {lang === 'en' ? 'Ready to drop into any existing repo.' : '如果你只想单独使用 README.md 文件，可直接下载。'}
                </p>
              </div>
            </div>

            <button
              onClick={handleDownloadReadme}
              className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg bg-amber-500 hover:bg-amber-400 text-zinc-950 font-semibold text-xs transition-colors shadow-sm"
            >
              {downloadedReadme ? <Check className="w-4 h-4" /> : <Download className="w-4 h-4" />}
              <span>{downloadedReadme ? (lang === 'en' ? 'File Downloaded!' : '文件已下载！') : (lang === 'en' ? 'Download README.md File' : '下载 README.md 文件')}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
