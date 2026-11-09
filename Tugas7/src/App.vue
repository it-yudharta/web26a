<script setup></script>

<template>
  <nav>
    <RouterLink to="/">Beranda</RouterLink>
    <RouterLink to="/cart">Keranjang</RouterLink>
  </nav>
  <main>
    <RouterView />
  </main>
</template>

<style scoped>
nav {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}
</style>
