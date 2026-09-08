import { db } from './db.js';

// Derived from Chandana's resume. Edit freely — titles/summaries can be
// made more specific once real project names/links are available.
const projects = [
  {
    title: 'Order Management Platform — Microservices',
    company: 'Hub Group',
    period: '2023 – Present',
    summary:
      'Designed and built scalable Node.js and Express.js microservices powering high-volume transportation and order-processing workflows for an enterprise logistics platform.',
    tags: ['Node.js', 'Express.js', 'Microservices', 'MongoDB'],
    metric: '30–40% faster API response times',
    link: '',
    sort_order: 1
  },
  {
    title: 'Legacy Runtime Modernization',
    company: 'Hub Group',
    period: '2023 – Present',
    summary:
      'Upgraded backend services from Node.js 12 to Node.js 20, resolving dependency-compatibility issues and improving application stability, maintainability, and long-term support.',
    tags: ['Node.js', 'Dependency Management', 'CI/CD'],
    metric: 'Node.js 12 → 20 across core services',
    link: '',
    sort_order: 2
  },
  {
    title: 'MongoDB Query & Index Optimization',
    company: 'Hub Group',
    period: '2023 – Present',
    summary:
      'Optimized complex aggregation pipelines and Atlas Search queries, and redesigned search logic to eliminate wildcard-index overhead that was causing production timeouts.',
    tags: ['MongoDB', 'Atlas Search', 'Performance Tuning'],
    metric: '35%+ reduction in query latency',
    link: '',
    sort_order: 3
  },
  {
    title: 'Event-Driven Messaging Pipeline',
    company: 'Hub Group',
    period: '2023 – Present',
    summary:
      'Designed asynchronous messaging workflows using Azure Service Bus queues and topics with a pub/sub architecture, reducing system coupling and improving fault tolerance across services.',
    tags: ['Azure Service Bus', 'Event-Driven Architecture', 'Docker', 'OpenShift'],
    metric: 'Decoupled services via pub/sub',
    link: '',
    sort_order: 4
  },
  {
    title: 'Enterprise CMS — Angular SPA',
    company: 'Infosys',
    period: '2019 – 2023',
    summary:
      'Engineered large-scale Angular single-page applications with TypeScript and RxJS, using lazy loading and advanced routing to shrink initial bundle size and speed up page loads.',
    tags: ['Angular', 'TypeScript', 'RxJS', 'Angular Material'],
    metric: 'Reduced initial bundle size',
    link: '',
    sort_order: 5
  },
  {
    title: 'Real-Time Dashboard & Data Layer',
    company: 'Infosys',
    period: '2019 – 2023',
    summary:
      'Built interactive dashboard interfaces integrated with RESTful APIs for real-time data visualization, backed by optimized MongoDB schemas and indexing strategies.',
    tags: ['Angular Material', 'REST APIs', 'MongoDB'],
    metric: 'Real-time data visualization',
    link: '',
    sort_order: 6
  }
];

const insert = db.prepare(`
  INSERT INTO projects (title, company, period, summary, tags, metric, link, sort_order)
  VALUES (@title, @company, @period, @summary, @tags, @metric, @link, @sort_order)
`);

const clear = db.prepare('DELETE FROM projects');

const seed = db.transaction((rows) => {
  clear.run();
  for (const row of rows) {
    insert.run({ ...row, tags: JSON.stringify(row.tags) });
  }
});

seed(projects);
console.log(`Seeded ${projects.length} projects into portfolio.db`);
