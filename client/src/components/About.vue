<script setup>
const stats = [
  { value: '7+', label: 'years in full-stack engineering' },
  { value: '30–40%', label: 'API performance gains delivered' },
  { value: '35%+', label: 'query latency cut via optimization' },
  { value: '2', label: 'companies, enterprise-scale systems' }
];
</script>

<template>
  <section id="about" class="section about">
    <div class="container about-grid">
      <div>
        <p class="eyebrow">about</p>
        <h2 class="section-title">Backend depth, frontend fluency.</h2>
        <p class="about-body">
          I'm a Senior Full-Stack Developer based in Oswego, IL, with 7+ years
          designing and building enterprise applications on Node.js, TypeScript,
          Express.js, Vue.js, Angular, and MongoDB. My focus is on systems that
          hold up under real traffic — microservices, event-driven architecture,
          and REST APIs — plus the production debugging and query optimization
          that keep them fast once they're live.
        </p>
        <p class="about-body">
          Currently at Hub Group, I work on an enterprise logistics and order
          management platform, modernizing legacy services and designing
          asynchronous messaging pipelines with Azure Service Bus. Before that,
          at Infosys, I built large-scale Angular SPAs and optimized MongoDB
          data layers for global CMS platforms.
        </p>
      </div>

      <dl class="stat-grid">
        <div v-for="stat in stats" :key="stat.label" class="stat">
          <dt class="stat-value mono">{{ stat.value }}</dt>
          <dd class="stat-label">{{ stat.label }}</dd>
        </div>
      </dl>
    </div>
  </section>
</template>

<style scoped>
.about-grid {
  display: grid;
  grid-template-columns: 1.3fr 1fr;
  gap: 56px;
  align-items: start;
}

.about-body {
  color: var(--text-dim);
  font-size: 16px;
  margin-bottom: 18px;
  max-width: 560px;
}

.stat-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  margin: 0;
}

.stat {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 20px;
}

.stat-value {
  font-size: 26px;
  color: var(--accent);
  font-weight: 600;
  margin-bottom: 6px;
}

.stat-label {
  margin: 0;
  color: var(--text-dim);
  font-size: 13px;
  line-height: 1.4;
}

@media (max-width: 860px) {
  .about-grid {
    grid-template-columns: 1fr;
  }
}
</style>
