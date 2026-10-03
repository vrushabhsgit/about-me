const sections = {
  home: {
    label: "start here",
    html: `<p>Hi, I’m <strong>Vrushabh Damle</strong> — a software engineer and AI engineer interested in agentic systems, developer infrastructure, and products that turn ambitious ideas into useful software.</p>
      <p>I build across the stack, from distributed workers and real-time collaboration to foundational AI implementations. The through-line is simple: understand the system, then make it dependable.</p>
      <h2>Try asking</h2><ul><li>What is Vrushabh building?</li><li>Show me the AI work.</li><li>Which projects best show backend depth?</li><li>How can I contact him?</li></ul>`
  },
  about: {
    label: "about",
    html: `<p>I’m a full-stack developer moving deliberately toward applied AI and agentic engineering. I learn by rebuilding important ideas from first principles, then shipping products around them.</p><p>I’m based in Pune, Maharashtra, India. I write and build in public, with current work spanning Go, TypeScript, Python, Redis, PyTorch, WebSockets, and modern web systems.</p><p>My working principle: question the requirement, understand the trade-offs, and build the smallest system that can earn trust.</p>`
  },
  now: {
    label: "now",
    html: `<p>Currently exploring the intersection of reliable software systems and applied AI.</p><ul><li>Building agentic products that can research, execute, and collaborate.</li><li>Studying transformers and tokenization from the implementation level.</li><li>Improving backend depth through distributed queues, concurrency, retries, and recovery.</li><li>Writing about what I learn on Medium and LinkedIn.</li></ul>`
  },
  projects: {
    label: "selected work",
    html: `<div class="project"><strong><a href="https://github.com/vrushabhsgit/getchitti" target="_blank" rel="noreferrer">Getchitti ↗</a></strong><p>Give it a goal and assemble a team of AI agents to research, build, market, sell, and support a company.</p><span class="tags">agentic ai · product systems</span></div>
      <div class="project"><strong><a href="https://github.com/vrushabhsgit/GoQueue" target="_blank" rel="noreferrer">GoQueue ↗</a></strong><p>A distributed task queue using Redis Streams, concurrent workers, bounded retries, and crash recovery.</p><span class="tags">go · redis · distributed systems</span></div>
      <div class="project"><strong><a href="https://github.com/vrushabhsgit/Attention-Is-All-You-Need" target="_blank" rel="noreferrer">Attention Is All You Need ↗</a></strong><p>A from-scratch PyTorch implementation of the original Transformer architecture.</p><span class="tags">python · pytorch · transformers</span></div>
      <div class="project"><strong><a href="https://github.com/vrushabhsgit/GPT-Tokenizer" target="_blank" rel="noreferrer">GPT Tokenizer ↗</a></strong><p>A byte-level BPE tokenizer built from scratch in pure Python, without external libraries.</p><span class="tags">python · bpe · language models</span></div>
      <div class="project"><strong><a href="https://github.com/vrushabhsgit/Scribble" target="_blank" rel="noreferrer">Scribble ↗</a></strong><p>A real-time collaborative canvas for visual thinking and interactive brainstorming.</p><span class="tags">typescript · realtime · collaboration</span></div>`
  },
  stack: {
    label: "toolbox",
    html: `<h2>Languages</h2><p>TypeScript, JavaScript, Python, Go.</p><h2>Systems</h2><p>Node.js, Express, Redis Streams, WebSockets, REST APIs, MongoDB, PostgreSQL.</p><h2>AI</h2><p>PyTorch, transformer architecture, byte-pair encoding, LLM applications, agentic workflows.</p><h2>Frontend</h2><p>React, Tailwind CSS, collaborative and real-time interfaces.</p>`
  },
  journey: {
    label: "journey",
    html: `<p>Vrushabh earned a postgraduate computer science education in Amravati between 2022 and 2024, then kept expanding through product work and public projects.</p><ul><li>Started with full-stack foundations: Git, JavaScript, APIs, databases, and production web apps.</li><li>Built real-time products including chat and collaborative canvas experiences.</li><li>Moved deeper into backend systems with queues, retries, concurrency, and recovery.</li><li>Now focuses on applied AI, agents, and understanding model internals from scratch.</li></ul>`
  },
  contact: {
    label: "contact",
    html: `<p>For product, engineering, or AI conversations:</p><ul><li><a href="mailto:dwrushabh@gmail.com">dwrushabh@gmail.com</a></li><li><a href="https://www.linkedin.com/in/vrushabh-damle-2a1817216/" target="_blank" rel="noreferrer">LinkedIn</a></li><li><a href="https://github.com/vrushabhsgit" target="_blank" rel="noreferrer">GitHub</a></li><li><a href="https://medium.com/@dwrushabh" target="_blank" rel="noreferrer">Medium</a></li></ul>`
  }
};

const answer = document.querySelector('#answer');
const nav = document.querySelector('#desktopNav');
const mobile = document.querySelector('#mobileSections');
let active = 'home';

function showSection(key) {
  active = key;
  answer.innerHTML = sections[key].html;
  document.querySelectorAll('[data-section]').forEach((button) => button.classList.toggle('active', button.dataset.section === key));
  document.querySelector('.answer-pane').scrollTop = 0;
}

Object.entries(sections).forEach(([key, value]) => {
  const button = document.createElement('button');
  button.type = 'button';
  button.dataset.section = key;
  button.textContent = value.label;
  button.addEventListener('click', () => showSection(key));
  nav.appendChild(button);
  const section = document.createElement('section');
  section.className = 'mobile-section';
  section.innerHTML = `<h2>${value.label}</h2>${value.html}`;
  mobile.appendChild(section);
});

const routes = [
  { terms: ['contact', 'email', 'reach', 'hire'], section: 'contact' },
  { terms: ['project', 'work', 'built', 'building', 'portfolio'], section: 'projects' },
  { terms: ['ai', 'agent', 'transformer', 'token', 'llm'], section: 'projects' },
  { terms: ['stack', 'tech', 'language', 'tool'], section: 'stack' },
  { terms: ['now', 'current', 'learning'], section: 'now' },
  { terms: ['journey', 'education', 'experience', 'background'], section: 'journey' },
  { terms: ['about', 'who', 'vrushabh'], section: 'about' }
];

function respond(query) {
  const normalized = query.toLowerCase();
  const match = routes.find((route) => route.terms.some((term) => normalized.includes(term)));
  if (match) return showSection(match.section);
  answer.innerHTML = `<p>I don’t have a live language model connected in this first version yet. I can still help you explore the verified portfolio.</p><p>Try asking about <a href="#" data-jump="projects">projects</a>, <a href="#" data-jump="stack">the tech stack</a>, <a href="#" data-jump="journey">Vrushabh’s journey</a>, or <a href="#" data-jump="contact">contact details</a>.</p>`;
  answer.querySelectorAll('[data-jump]').forEach((link) => link.addEventListener('click', (event) => { event.preventDefault(); showSection(link.dataset.jump); }));
}

const form = document.querySelector('#promptForm');
const prompt = document.querySelector('#prompt');
form.addEventListener('submit', (event) => { event.preventDefault(); if (prompt.value.trim()) { respond(prompt.value.trim()); prompt.value = ''; } });
prompt.addEventListener('keydown', (event) => { if (event.key === 'Enter' && !event.shiftKey) { event.preventDefault(); form.requestSubmit(); } });

const root = document.documentElement;
const theme = document.querySelector('#themeToggle');
theme.addEventListener('click', () => {
  root.classList.toggle('light');
  theme.textContent = root.classList.contains('light') ? '[dark]' : '[light]';
});

const canvas = document.querySelector('#signalCanvas');
const context = canvas.getContext('2d');
let points = [];
function resizeSignal() {
  const rect = canvas.getBoundingClientRect();
  const ratio = Math.min(window.devicePixelRatio || 1, 2);
  canvas.width = rect.width * ratio; canvas.height = rect.height * ratio;
  context.setTransform(ratio, 0, 0, ratio, 0, 0);
  points = Array.from({ length: 38 }, (_, i) => ({ x: (i / 37) * rect.width, y: Math.random() * rect.height, v: (Math.random() - .5) * .4 }));
}
function drawSignal() {
  const rect = canvas.getBoundingClientRect();
  context.clearRect(0, 0, rect.width, rect.height);
  const color = getComputedStyle(root).getPropertyValue('--accent').trim();
  context.strokeStyle = color; context.fillStyle = color; context.globalAlpha = .58;
  points.forEach((point, index) => {
    point.y += point.v; if (point.y < 6 || point.y > rect.height - 6) point.v *= -1;
    context.fillRect(point.x, point.y, 2, 2);
    if (index && Math.abs(point.y - points[index - 1].y) < 46) { context.beginPath(); context.moveTo(points[index - 1].x, points[index - 1].y); context.lineTo(point.x, point.y); context.stroke(); }
  });
  context.globalAlpha = 1; requestAnimationFrame(drawSignal);
}
window.addEventListener('resize', resizeSignal);
showSection(active); resizeSignal(); drawSignal();
