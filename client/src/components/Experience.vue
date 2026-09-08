<script setup>
const roles = [
  {
    title: 'Full-Stack Developer',
    company: 'Hub Group — Oak Brook, IL',
    period: '2023 — Present',
    points: [
      'Designed scalable Node.js/Express.js microservices for high-volume transportation and order-processing workflows.',
      'Improved API performance 30–40% through refactoring, caching, and optimized MongoDB access patterns.',
      'Built reusable backend modules with Dependency Injection (IoC), cutting code duplication by 25%.',
      'Modernized services from Node.js 12 to Node.js 20; designed Azure Service Bus pub/sub messaging.',
      'Containerized microservices with Docker, deployed to OpenShift, and resolved production issues via log analysis.'
    ]
  },
  {
    title: 'Software Developer',
    company: 'Infosys — Hyderabad, India',
    period: '2019 — 2023',
    points: [
      'Engineered large-scale Angular SPAs with TypeScript and RxJS for enterprise CMS platforms.',
      'Implemented lazy loading and advanced routing, reducing initial bundle size and improving load performance.',
      'Built real-time dashboards with Angular Material integrated against RESTful APIs.',
      'Designed optimized MongoDB schemas and indexing strategies; led code reviews and technical onboarding.'
    ]
  }
];
</script>

<template>
  <section id="experience" class="section experience">
    <div class="container">
      <p class="eyebrow">experience</p>
      <h2 class="section-title">Where the work happened.</h2>

      <div class="timeline">
        <article v-for="role in roles" :key="role.title + role.period" class="role">
          <div class="role-marker" aria-hidden="true"></div>
          <div class="role-body">
            <div class="role-head">
              <h3 class="role-title">{{ role.title }}</h3>
              <span class="role-period mono">{{ role.period }}</span>
            </div>
            <p class="role-company mono">{{ role.company }}</p>
            <ul class="role-points">
              <li v-for="point in role.points" :key="point">{{ point }}</li>
            </ul>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.timeline {
  position: relative;
  padding-left: 28px;
  border-left: 1px solid var(--border);
}

.role {
  position: relative;
  margin-bottom: 48px;
}

.role:last-child {
  margin-bottom: 0;
}

.role-marker {
  position: absolute;
  left: -33px;
  top: 6px;
  width: 9px;
  height: 9px;
  border-radius: 50%;
  background: var(--accent);
  box-shadow: 0 0 0 4px var(--bg), 0 0 0 5px var(--border);
}

.role-head {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 16px;
  flex-wrap: wrap;
}

.role-title {
  font-size: 21px;
}

.role-period {
  color: var(--text-faint);
  font-size: 12.5px;
  white-space: nowrap;
}

.role-company {
  color: var(--accent-2);
  font-size: 13.5px;
  margin: 6px 0 16px;
}

.role-points {
  margin: 0;
  padding-left: 18px;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.role-points li {
  color: var(--text-dim);
  font-size: 14.5px;
  line-height: 1.55;
}
</style>
