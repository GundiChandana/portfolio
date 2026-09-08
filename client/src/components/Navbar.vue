<script setup>
import { ref } from 'vue';

const open = ref(false);
const links = [
  { href: '#about', label: 'about' },
  { href: '#skills', label: 'skills' },
  { href: '#experience', label: 'experience' },
  { href: '#projects', label: 'projects' },
  { href: '#contact', label: 'contact' }
];

function close() {
  open.value = false;
}
</script>

<template>
  <header class="nav">
    <div class="container nav-inner">
      <a href="#" class="brand mono">
        <span class="brand-dot" aria-hidden="true"></span>
        chandana<span class="brand-accent">.dev</span>
      </a>

      <nav class="nav-links" :class="{ open }">
        <a
          v-for="link in links"
          :key="link.href"
          :href="link.href"
          class="mono"
          @click="close"
        >{{ link.label }}</a>
      </nav>

      <button
        class="nav-toggle"
        :aria-expanded="open"
        aria-label="Toggle navigation menu"
        @click="open = !open"
      >
        <span></span><span></span><span></span>
      </button>
    </div>
  </header>
</template>

<style scoped>
.nav {
  position: sticky;
  top: 0;
  z-index: 50;
  background: rgba(11, 15, 23, 0.85);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid var(--border);
}

.nav-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 64px;
}

.brand {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 15px;
  font-weight: 500;
  color: var(--text);
}

.brand-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--accent);
  box-shadow: 0 0 0 3px var(--accent-soft);
}

.brand-accent {
  color: var(--accent);
}

.nav-links {
  display: flex;
  gap: 28px;
}

.nav-links a {
  font-size: 13.5px;
  color: var(--text-dim);
  transition: color 0.15s ease;
}

.nav-links a:hover {
  color: var(--accent);
}

.nav-toggle {
  display: none;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: none;
  padding: 8px;
}

.nav-toggle span {
  width: 20px;
  height: 2px;
  background: var(--text);
}

@media (max-width: 720px) {
  .nav-toggle {
    display: flex;
  }
  .nav-links {
    position: absolute;
    top: 64px;
    left: 0;
    right: 0;
    flex-direction: column;
    background: var(--surface);
    border-bottom: 1px solid var(--border);
    padding: 16px 24px;
    gap: 18px;
    display: none;
  }
  .nav-links.open {
    display: flex;
  }
}
</style>
