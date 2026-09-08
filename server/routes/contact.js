import { Router } from 'express';
import { db } from '../db.js';

const router = Router();

const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// POST /api/contact
router.post('/', (req, res) => {
  const { name, email, message } = req.body || {};

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'name, email, and message are all required.' });
  }
  if (!emailRe.test(email)) {
    return res.status(400).json({ error: 'Please provide a valid email address.' });
  }
  if (message.length > 5000) {
    return res.status(400).json({ error: 'Message is too long.' });
  }

  const stmt = db.prepare(
    'INSERT INTO messages (name, email, message) VALUES (?, ?, ?)'
  );
  const info = stmt.run(name.trim(), email.trim(), message.trim());

  res.status(201).json({ id: info.lastInsertRowid, status: 'received' });
});

export default router;
