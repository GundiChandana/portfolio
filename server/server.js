import express from 'express';
import cors from 'cors';
import './db.js'; // ensures tables exist on boot
import projectsRouter from './routes/projects.js';
import contactRouter from './routes/contact.js';

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

app.get('/api/health', (req, res) => res.json({ status: 'ok' }));
app.use('/api/projects', projectsRouter);
app.use('/api/contact', contactRouter);

app.listen(PORT, () => {
  console.log(`Portfolio API running at http://localhost:${PORT}`);
});
