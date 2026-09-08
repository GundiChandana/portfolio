<script setup>
const groups = [
  {
    label: 'Languages',
    items: ['JavaScript (ES6+)', 'TypeScript']
  },
  {
    label: 'Frontend',
    items: ['Vue.js', 'Angular', 'Vuetify', 'Angular Material', 'HTML5', 'CSS3']
  },
  {
    label: 'Backend',
    items: ['Node.js', 'Express.js', 'RESTful APIs', 'Microservices', 'Authentication']
  },
  {
    label: 'Database',
    items: ['MongoDB', 'Aggregation Framework', 'Atlas Search', 'Indexing', 'Query Optimization']
  },
  {
    label: 'Messaging',
    items: ['Azure Service Bus', 'Queues & Topics', 'Pub/Sub']
  },
  {
    label: 'Architecture',
    items: ['Microservices', 'Event-Driven Architecture', 'Dependency Injection (IoC)', 'System Design']
  },
  {
    label: 'Tools',
    items: ['Git', 'GitHub', 'Postman', 'Azure DevOps', 'CI/CD', 'Docker', 'Agile/Scrum']
  }
];
</script>

<template>
  <section id="skills" class="section skills">
    <div class="container">
      <p class="eyebrow">skills</p>
      <h2 class="section-title">Stack, by layer.</h2>
      <p class="section-lede">
        Organized the way a system actually runs — from language up through
        architecture and tooling.
      </p>

      <div class="skills-grid">
        <div v-for="group in groups" :key="group.label" class="skill-group">
          <h3 class="skill-group-title mono">{{ group.label }}</h3>
          <ul class="skill-list">
            <li v-for="item in group.items" :key="item">{{ item }}</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 28px;
}

.skill-group-title {
  font-size: 12px;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: var(--accent-2);
  margin-bottom: 14px;
}

.skill-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 9px;
}

.skill-list li {
  color: var(--text-dim);
  font-size: 14.5px;
  padding-left: 14px;
  position: relative;
}

.skill-list li::before {
  content: '';
  position: absolute;
  left: 0;
  top: 9px;
  width: 5px;
  height: 5px;
  background: var(--text-faint);
  border-radius: 1px;
}
</style>
