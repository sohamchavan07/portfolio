import React, { useState } from "react";
import { motion } from "framer-motion";
import { Terminal, Copy, Check, Code2, Sparkles, FileCode2 } from "lucide-react";

const RUBY_CONFIG = `developer_config = {
  engineer: "Soham Chavan",
  primary_stack: "Ruby on Rails + React (TS)",
  database: "PostgreSQL",
  hosting: "Render",
  location: "Kolhapur, India",
  status: "Building Scalable SaaS & Systems"
}`;

const JSON_CONFIG = `{
  "developer_config": {
    "engineer": "Soham Chavan",
    "primary_stack": "Ruby on Rails + React (TS)",
    "database": "PostgreSQL",
    "hosting": "Render",
    "location": "Kolhapur, India",
    "status": "Building Scalable SaaS & Systems"
  }
}`;

const BASH_CONFIG = `# System Diagnostics & Runtime Environment
$ ruby -v
ruby 3.3.0p0 (2024-01-18 revision 2d0c2e3913) [x86_64-linux]

$ rails --version
Rails 7.1.3

$ node -v
v20.11.0

$ echo $DEVELOPER_STATUS
"Ready for production deployments."`;

export default function DevConfig() {
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState("ruby");

  const getCurrentCode = () => {
    if (activeTab === "json") return JSON_CONFIG;
    if (activeTab === "bash") return BASH_CONFIG;
    return RUBY_CONFIG;
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(getCurrentCode());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-zinc-800">
      <div className="max-w-4xl mx-auto">
        {/* Terminal Card Container */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-lg border border-zinc-800 bg-zinc-950 shadow-2xl overflow-hidden"
        >
          {/* Mac Window Header Bar */}
          <div className="flex items-center justify-between border-b border-zinc-800 bg-zinc-900/90 px-4 py-3">
            <div className="flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-red-500/80 inline-block" />
              <span className="h-3 w-3 rounded-full bg-yellow-500/80 inline-block" />
              <span className="h-3 w-3 rounded-full bg-green-500/80 inline-block" />
              <span className="ml-3 text-xs font-mono text-zinc-400 flex items-center gap-1.5">
                <Terminal className="h-3.5 w-3.5 text-lime-400" />
                soham_config.rb — editorial_overlay
              </span>
            </div>

            {/* Tab Switches */}
            <div className="flex items-center gap-1 bg-zinc-950 p-1 rounded border border-zinc-800">
              <button
                onClick={() => setActiveTab("ruby")}
                className={`px-2.5 py-1 text-[10px] font-mono uppercase tracking-wider rounded transition-colors ${
                  activeTab === "ruby"
                    ? "bg-lime-400 text-black font-bold"
                    : "text-zinc-400 hover:text-white"
                }`}
              >
                config.rb
              </button>
              <button
                onClick={() => setActiveTab("json")}
                className={`px-2.5 py-1 text-[10px] font-mono uppercase tracking-wider rounded transition-colors ${
                  activeTab === "json"
                    ? "bg-lime-400 text-black font-bold"
                    : "text-zinc-400 hover:text-white"
                }`}
              >
                config.json
              </button>
              <button
                onClick={() => setActiveTab("bash")}
                className={`px-2.5 py-1 text-[10px] font-mono uppercase tracking-wider rounded transition-colors ${
                  activeTab === "bash"
                    ? "bg-lime-400 text-black font-bold"
                    : "text-zinc-400 hover:text-white"
                }`}
              >
                env.sh
              </button>
            </div>
          </div>

          {/* Code Window Body */}
          <div className="relative p-6 sm:p-8 font-mono text-xs sm:text-sm bg-zinc-950/95 overflow-x-auto">
            {/* Copy Button */}
            <button
              onClick={handleCopy}
              className="absolute top-4 right-4 z-10 flex items-center gap-1.5 rounded border border-zinc-800 bg-zinc-900 px-3 py-1.5 text-xs font-mono text-zinc-300 hover:border-lime-400 hover:text-lime-400 transition-colors"
            >
              {copied ? (
                <>
                  <Check className="h-3.5 w-3.5 text-lime-400" />
                  <span className="text-lime-400 font-bold">Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="h-3.5 w-3.5" />
                  <span>Copy Code</span>
                </>
              )}
            </button>

            {/* Code Highlighted View */}
            <pre className="text-zinc-300 leading-relaxed font-mono">
              {activeTab === "ruby" && (
                <code>
                  <span className="text-purple-400">developer_config</span> = &#123;
                  {"\n"}  <span className="text-lime-400">engineer</span>: <span className="text-emerald-300">"Soham Chavan"</span>,
                  {"\n"}  <span className="text-lime-400">primary_stack</span>: <span className="text-emerald-300">"Ruby on Rails + React (TS)"</span>,
                  {"\n"}  <span className="text-lime-400">database</span>: <span className="text-emerald-300">"PostgreSQL"</span>,
                  {"\n"}  <span className="text-lime-400">hosting</span>: <span className="text-emerald-300">"Render"</span>,
                  {"\n"}  <span className="text-lime-400">location</span>: <span className="text-emerald-300">"Kolhapur, India"</span>,
                  {"\n"}  <span className="text-lime-400">status</span>: <span className="text-emerald-300">"Building Scalable SaaS &amp; Systems"</span>
                  {"\n"}&#125;
                </code>
              )}

              {activeTab === "json" && (
                <code>
                  &#123;
                  {"\n"}  <span className="text-purple-400">"developer_config"</span>: &#123;
                  {"\n"}    <span className="text-lime-400">"engineer"</span>: <span className="text-emerald-300">"Soham Chavan"</span>,
                  {"\n"}    <span className="text-lime-400">"primary_stack"</span>: <span className="text-emerald-300">"Ruby on Rails + React (TS)"</span>,
                  {"\n"}    <span className="text-lime-400">"database"</span>: <span className="text-emerald-300">"PostgreSQL"</span>,
                  {"\n"}    <span className="text-lime-400">"hosting"</span>: <span className="text-emerald-300">"Render"</span>,
                  {"\n"}    <span className="text-lime-400">"location"</span>: <span className="text-emerald-300">"Kolhapur, India"</span>,
                  {"\n"}    <span className="text-lime-400">"status"</span>: <span className="text-emerald-300">"Building Scalable SaaS &amp; Systems"</span>
                  {"\n"}  &#125;
                  {"\n"}&#125;
                </code>
              )}

              {activeTab === "bash" && (
                <code>
                  <span className="text-zinc-500"># System Diagnostics & Runtime Environment</span>
                  {"\n"}<span className="text-lime-400">$</span> ruby -v
                  {"\n"}<span className="text-emerald-300">ruby 3.3.0p0 (2024-01-18 revision 2d0c2e3913) [x86_64-linux]</span>
                  {"\n\n"}<span className="text-lime-400">$</span> rails --version
                  {"\n"}<span className="text-emerald-300">Rails 7.1.3</span>
                  {"\n\n"}<span className="text-lime-400">$</span> node -v
                  {"\n"}<span className="text-emerald-300">v20.11.0</span>
                  {"\n\n"}<span className="text-lime-400">$</span> echo $DEVELOPER_STATUS
                  {"\n"}<span className="text-amber-400">"Ready for production deployments."</span>
                </code>
              )}
            </pre>
          </div>

          {/* Terminal Footer Bar */}
          <div className="border-t border-zinc-800 bg-zinc-900/60 px-4 py-2 flex items-center justify-between text-[11px] font-mono text-zinc-500">
            <span>Status: 200 OK — UTF-8</span>
            <span className="flex items-center gap-1.5">
              <Sparkles className="h-3 w-3 text-lime-400" />
              Soham Chavan Developer Specs
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
