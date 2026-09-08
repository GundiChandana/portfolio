<script setup>
import { reactive, ref } from 'vue';

const form = reactive({ name: '', email: '', message: '' });
const status = ref('idle'); // idle | sending | sent | error
const errorMsg = ref('');

async function submit() {
  status.value = 'sending';
  errorMsg.value = '';
  try {
    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form)
    });
    const data = await res.json();
    if (!res.ok) throw new Error(data.error || 'Something went wrong.');
    status.value = 'sent';
    form.name = '';
    form.email = '';
    form.message = '';
  } catch (err) {
    status.value = 'error';
    errorMsg.value = err.message;
  }
}
</script>

<template>
  <section id="contact" class="section contact">
    <div class="container contact-grid">
      <div>
        <p class="eyebrow">contact</p>
        <h2 class="section-title">Let's talk about the role.</h2>
        <p class="section-lede">
          Open to Lead / Senior Full-Stack roles working with Node.js, Vue, and
          distributed systems. Reach out directly or send a message below.
        </p>
        <ul class="contact-links mono">
          <li>
            <a href="mailto:chandanag.acharya@gmail.com">chandanag.acharya@gmail.com</a>
          </li>
          <li>
            <a href="tel:+13126612518">+1 312-661-2518</a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/chandanagundi" target="_blank" rel="noopener">linkedin.com/in/chandanagundi</a>
          </li>
        </ul>
      </div>

      <form class="contact-form" @submit.prevent="submit">
        <label class="field">
          <span class="mono">name</span>
          <input v-model="form.name" type="text" required maxlength="120" :disabled="status === 'sending'" />
        </label>
        <label class="field">
          <span class="mono">email</span>
          <input v-model="form.email" type="email" required maxlength="160" :disabled="status === 'sending'" />
        </label>
        <label class="field">
          <span class="mono">message</span>
          <textarea v-model="form.message" required maxlength="5000" rows="5" :disabled="status === 'sending'"></textarea>
        </label>

        <button type="submit" class="btn btn-primary" :disabled="status === 'sending'">
          {{ status === 'sending' ? 'sending…' : 'send message' }}
        </button>

        <p v-if="status === 'sent'" class="form-status ok mono">message received — thank you.</p>
        <p v-if="status === 'error'" class="form-status err mono">{{ errorMsg }}</p>
      </form>
    </div>
  </section>
</template>

<style scoped>
.contact-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 56px;
}

.contact-links {
  list-style: none;
  padding: 0;
  margin-top: 28px;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.contact-links a {
  font-size: 14px;
  color: var(--text-dim);
  transition: color 0.15s ease;
}

.contact-links a:hover {
  color: var(--accent);
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 18px;
}

.field {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.field span {
  font-size: 12px;
  color: var(--text-faint);
  text-transform: uppercase;
  letter-spacing: 0.04em;
}

input, textarea {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  color: var(--text);
  padding: 12px 14px;
  font-family: var(--font-body);
  font-size: 14.5px;
  resize: vertical;
}

input:focus, textarea:focus {
  outline: none;
  border-color: var(--accent);
}

.btn {
  align-self: flex-start;
  border: none;
}

.btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.form-status {
  font-size: 13px;
}

.form-status.ok {
  color: var(--accent);
}

.form-status.err {
  color: var(--danger);
}

@media (max-width: 860px) {
  .contact-grid {
    grid-template-columns: 1fr;
  }
}
</style>
