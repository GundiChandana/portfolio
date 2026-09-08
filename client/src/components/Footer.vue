<script setup>
const year = new Date().getFullYear();
</script>

<template>
  <footer class="footer">
    <div class="container footer-inner">
      <span class="mono">© {{ year }} Chandana Gundi</span>
      <span class="mono">built with vue + express + sqlite</span>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  border-top: 1px solid var(--border);
  padding: 28px 0;
}

.footer-inner {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 8px;
  font-size: 12px;
  color: var(--text-faint);
}
</style>
