<script setup>
import { ref, onMounted } from 'vue';

const projects = ref([]);
const status = ref('loading'); // loading | ready | error

async function loadProjects() {
  status.value = 'loading';
  try {
    const res = await fetch('/api/projects');
    if (!res.ok) throw new Error('Request failed');
    projects.value = await res.json();
    status.value = 'ready';
  } catch (err) {
    status.value = 'error';
  }
}

onMounted(loadProjects);
</script>

<template>
  <section id="projects" class="section projects">
    <div class="container">
      <p class="eyebrow">projects</p>
      <h2 class="section-title">Systems shipped, not just described.</h2>
      <p class="section-lede">
        Pulled live from the API — each card is a real piece of work with a
        measurable outcome attached.
      </p>

      <div v-if="status === 'loading'" class="state mono">fetching /api/projects …</div>

      <div v-else-if="status === 'error'" class="state error mono">
        couldn't reach the API. Is the Express server running on port 4000?
        <button class="retry mono" @click="loadProjects">retry</button>
      </div>

      <div v-else class="project-grid">
        <article v-for="p in projects" :key="p.id" class="project-card">
          <div class="project-head">
            <span class="project-company mono">{{ p.company }}</span>
            <span class="project-period mono">{{ p.period }}</span>
          </div>
          <h3 class="project-title">{{ p.title }}</h3>
          <p class="project-summary">{{ p.summary }}</p>
          <p v-if="p.metric" class="project-metric mono">▲ {{ p.metric }}</p>
          <ul class="project-tags">
            <li v-for="tag in p.tags" :key="tag">{{ tag }}</li>
          </ul>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.state {
  color: var(--text-dim);
  font-size: 14px;
  padding: 32px 0;
}

.state.error {
  color: var(--danger);
}

.retry {
  margin-left: 12px;
  background: transparent;
  border: 1px solid var(--border);
  color: var(--text);
  border-radius: 4px;
  padding: 4px 10px;
  font-size: 12px;
}

.project-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
}

.project-card {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 24px;
  display: flex;
  flex-direction: column;
  transition: border-color 0.15s ease;
}

.project-card:hover {
  border-color: var(--accent);
}

.project-head {
  display: flex;
  justify-content: space-between;
  font-size: 11.5px;
  color: var(--text-faint);
  margin-bottom: 12px;
}

.project-company {
  color: var(--accent-2);
}

.project-title {
  font-size: 18px;
  margin-bottom: 10px;
}

.project-summary {
  color: var(--text-dim);
  font-size: 14px;
  line-height: 1.55;
  margin-bottom: 14px;
  flex-grow: 1;
}

.project-metric {
  color: var(--accent);
  font-size: 12.5px;
  margin-bottom: 16px;
}

.project-tags {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.project-tags li {
  font-family: var(--font-mono);
  font-size: 11px;
  color: var(--text-dim);
  background: var(--surface-2);
  border: 1px solid var(--border);
  border-radius: 4px;
  padding: 4px 8px;
}
</style>
