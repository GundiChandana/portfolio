<script setup>
import { ref, onMounted } from 'vue';

const bootLines = [
  { text: 'booting chandana-gundi/portfolio', delay: 0 },
  { text: 'runtime: node@20 · vue@3 · express', delay: 320, ok: true },
  { text: 'connecting services: order-mgmt, cms, messaging-bus', delay: 620, ok: true },
  { text: 'mongodb aggregation pipelines: optimized', delay: 900, ok: true },
  { text: 'azure service bus: pub/sub ready', delay: 1180, ok: true },
  { text: 'status: available for lead engineering roles', delay: 1520, ok: true, highlight: true }
];

const visibleLines = ref([]);
const promptDone = ref(false);

onMounted(() => {
  bootLines.forEach((line, i) => {
    setTimeout(() => {
      visibleLines.value.push(line);
      if (i === bootLines.length - 1) {
        setTimeout(() => (promptDone.value = true), 300);
      }
    }, line.delay);
  });
});
</script>

<template>
  <section class="hero">
    <div class="container hero-grid">
      <div class="hero-copy">
        <p class="eyebrow">available for hire</p>
        <h1 class="hero-title">
          Chandana Gundi<br />
          <span class="hero-title-sub">builds the systems behind the systems.</span>
        </h1>
        <p class="hero-desc">
          Senior Full-Stack Developer, 7+ years deep in Node.js, Vue.js, TypeScript
          and MongoDB — designing microservices, event-driven pipelines, and APIs
          that stay fast under real production load.
        </p>
        <div class="hero-actions">
          <a href="#projects" class="btn btn-primary">See the work</a>
          <a href="#contact" class="btn btn-ghost">Get in touch</a>
        </div>
      </div>

      <div class="terminal" role="img" aria-label="Terminal window showing the portfolio's services starting up successfully">
        <div class="terminal-bar">
          <span class="dot dot-red"></span>
          <span class="dot dot-yellow"></span>
          <span class="dot dot-green"></span>
          <span class="terminal-title mono">status.sh</span>
        </div>
        <div class="terminal-body mono">
          <div
            v-for="(line, i) in visibleLines"
            :key="i"
            class="term-line"
            :class="{ highlight: line.highlight }"
          >
            <span v-if="line.ok" class="ok">[ OK ]</span>
            <span v-else class="arrow">$</span>
            {{ line.text }}
          </div>
          <div v-if="promptDone" class="term-line prompt">
            <span class="arrow">$</span>
            <span class="cursor"></span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  padding: 88px 0 96px;
}

.hero-grid {
  display: grid;
  grid-template-columns: 1.1fr 1fr;
  gap: 56px;
  align-items: center;
}

.hero-title {
  font-size: clamp(34px, 5vw, 52px);
  margin-bottom: 20px;
}

.hero-title-sub {
  color: var(--text-dim);
  font-size: 0.62em;
  font-weight: 500;
}

.hero-desc {
  color: var(--text-dim);
  font-size: 17px;
  max-width: 480px;
  margin-bottom: 32px;
}

.hero-actions {
  display: flex;
  gap: 14px;
}

.btn {
  padding: 12px 22px;
  border-radius: var(--radius);
  font-size: 14px;
  font-weight: 500;
  transition: all 0.15s ease;
  display: inline-block;
}

.btn-primary {
  background: var(--accent);
  color: #06110d;
}

.btn-primary:hover {
  filter: brightness(1.08);
}

.btn-ghost {
  border: 1px solid var(--border);
  color: var(--text);
}

.btn-ghost:hover {
  border-color: var(--accent);
  color: var(--accent);
}

.terminal {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 24px 60px -20px rgba(0, 0, 0, 0.6);
}

.terminal-bar {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 16px;
  background: var(--surface-2);
  border-bottom: 1px solid var(--border);
}

.dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
}

.dot-red { background: #f0603b; }
.dot-yellow { background: #f0a83b; }
.dot-green { background: #45e0c4; }

.terminal-title {
  margin-left: 8px;
  font-size: 12px;
  color: var(--text-faint);
}

.terminal-body {
  padding: 22px 20px;
  min-height: 210px;
  font-size: 13.5px;
}

.term-line {
  color: var(--text-dim);
  margin-bottom: 10px;
  display: flex;
  gap: 10px;
  align-items: baseline;
}

.term-line.highlight {
  color: var(--accent);
}

.ok {
  color: var(--accent);
  flex-shrink: 0;
}

.arrow {
  color: var(--accent-2);
  flex-shrink: 0;
}

.cursor {
  display: inline-block;
  width: 7px;
  height: 14px;
  background: var(--accent);
  animation: blink 1s step-end infinite;
}

@keyframes blink {
  50% { opacity: 0; }
}

@media (max-width: 860px) {
  .hero-grid {
    grid-template-columns: 1fr;
  }
}
</style>
