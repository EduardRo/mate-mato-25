<script setup>
import { ref, onMounted } from 'vue';
import { RouterLink, RouterView } from 'vue-router';
import { useAuthStore } from './store/auth';

const isMenuOpen = ref(false);
const authStore = useAuthStore();

// Initialize the auth store on app startup
onMounted(() => {
  authStore.initialize();
});

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const closeMenu = () => {
  isMenuOpen.value = false;
};

const logout = () => {
  authStore.clearAuth();
  window.location.href = '/'; // Redirect to home page after logout
};
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo py-4" src="@/assets/logo.png" width="150" height="150" />

    <!-- Welcome message above the menu line -->
    <div v-if="authStore.user" class="welcome-message">
      Welcome, {{ authStore.user.name }} {{ authStore.user.iduser }}
      <button @click="logout" class="logout-button">Logout</button>
    </div>

    <button class="menu-toggle" @click="toggleMenu">
      ☰
    </button>

    <div :class="['wrapper', { open: isMenuOpen }]">
      <nav>
        <RouterLink to="/" @click="closeMenu">Home</RouterLink>
        <RouterLink to="/teste" @click="closeMenu">Teste</RouterLink>
        <RouterLink to="/teorie/clase" @click="closeMenu">Teorie</RouterLink>
        <RouterLink to="/abonamente" @click="closeMenu">Abonamente</RouterLink>
        <RouterLink v-if="authStore.user" to="/rezultate/clase" @click="closeMenu">Rezultate</RouterLink>
        <RouterLink to="/despre" @click="closeMenu">Despre</RouterLink>
        <RouterLink v-if="!authStore.user" to="/login" @click="closeMenu">Login</RouterLink>
        <RouterLink v-if="!authStore.user" to="/register" @click="closeMenu">Register</RouterLink>
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
  position: relative; /* Ensure the welcome message is positioned relative to the header */
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

.welcome-message {
  position: absolute;
  top: 0.5rem; /* Adjust the top position as needed */
  right: 1rem; /* Adjust the right position as needed */
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: white;
  font-size: 1rem;
}

.logout-button {
  background: #f39c12;
  border: none;
  padding: 0.25rem 0.5rem;
  color: white;
  cursor: pointer;
  border-radius: 5px;
  transition: background 0.3s;
  font-size: 0.9rem;
}

.logout-button:hover {
  background: #e67e22;
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

  .welcome-message {
    position: static; /* Reset position for mobile */
    margin-top: 1rem;
    justify-content: center;
  }
}
</style>
