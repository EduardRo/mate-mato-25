<script setup>
import { ref } from 'vue';
import { RouterLink, RouterView } from 'vue-router';

const isMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const closeMenu = () => {
  isMenuOpen.value = false;
};
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo py-4" src="@/assets/logo.svg" width="100" height="100" />

    <button class="menu-toggle" @click="toggleMenu">
      ☰
    </button>

    <div :class="['wrapper', { open: isMenuOpen }]">
      <nav>
        <RouterLink to="/" @click="closeMenu">Home</RouterLink>

        <RouterLink to="/clase" @click="closeMenu">Clase</RouterLink>
        <RouterLink to="/teorie/clase" @click="closeMenu">Teorie</RouterLink>
        <RouterLink to="/despre" @click="closeMenu">Despre</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
header {
  line-height: 1.5;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #333; /* Dark background for header */
  padding: 1rem;
}

.logo {
  margin: 0 1rem;
}

.menu-toggle {
  background: none;
  border: none;
  font-size: 100;
  color: white; /* Icon color for visibility */
  cursor: pointer;
  display: none; /* Hidden by default */
}

.wrapper {
  display: flex;
  align-items: center;
  transition: all 0.3s ease-in-out;
}

.wrapper nav {
  display: flex;
  flex-direction: row;
}

.wrapper.open {
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.9); /* Semi-transparent dark background */
  z-index: 1000; /* Ensure it overlays the page */
  padding: 2rem;
}

.wrapper.open nav {
  flex-direction: column;
  text-align: center;
}

nav a {
  padding: 1rem;
  text-decoration: none;
  color: white; /* Text color for visibility */
  font-size: 1.5rem;
  font-weight: 100;
  transition: color 0.3s;
}

nav a:hover {
  color: #f39c12; /* Hover color */
}

nav a.router-link-exact-active {
  font-weight: 100;
  color: #f39c12;
}

@media (max-width: 768px) {
  .menu-toggle {
    display: block; /* Show the menu toggle button */
    font-size: 3rem;
  }

  .wrapper {
    display: none;
  }

  .wrapper.open {
    display: flex; /* Show the menu when open */
  }

  nav a {
    padding: 1rem 0;
    display: block;
  }
}
</style>
