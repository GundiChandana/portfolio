import { Router } from 'express';
import { db } from '../db.js';

const router = Router();

// GET /api/projects
router.get('/', (req, res) => {
  const rows = db
    .prepare('SELECT * FROM projects ORDER BY sort_order ASC')
    .all()
    .map((row) => ({ ...row, tags: JSON.parse(row.tags) }));
  res.json(rows);
});

// GET /api/projects/:id
router.get('/:id', (req, res) => {
  const row = db.prepare('SELECT * FROM projects WHERE id = ?').get(req.params.id);
  if (!row) return res.status(404).json({ error: 'Project not found' });
  res.json({ ...row, tags: JSON.parse(row.tags) });
});

export default router;
