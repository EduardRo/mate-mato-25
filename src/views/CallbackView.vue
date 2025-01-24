<template>
  <div>
    <p>Logging you in...</p>
  </div>
</template>

<script>
import { onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { useAuthStore } from '../store/auth';

export default {
  setup() {
    const router = useRouter();
    const authStore = useAuthStore();

    onMounted(() => {
      // Extract the token and user data from the query parameters
      const token = new URLSearchParams(window.location.search).get('token');
      const user = JSON.parse(new URLSearchParams(window.location.search).get('user'));

      if (token && user) {
        // Save the token and user to the auth store
        authStore.setToken(token);
        authStore.setUser(user);

        // Redirect the user to the home page or dashboard
        router.push({ name: 'home' });
      } else {
        // Handle error: no token or user found
        router.push({ name: 'login' });
      }
    });

    return {};
  },
};
</script>
