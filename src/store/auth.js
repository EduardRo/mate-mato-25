import { defineStore } from 'pinia';

   export const useAuthStore = defineStore('auth', {
     state: () => ({
       token: null,
       user: null,
     }),
     actions: {
      setToken(token) {
        this.token = token;
        localStorage.setItem('token', token); // Save token to localStorage
        console.log('Token set:', token);

      },
      setUser(user) {
        this.user = user;
        localStorage.setItem('user', JSON.stringify(user)); // Save user to localStorage
        console.log('user set:', this.user);
      },
      clearAuth() {
        this.token = null;
        this.user = null;
        localStorage.removeItem('token'); // Remove token from localStorage
        localStorage.removeItem('user'); // Remove user from localStorage
      },
      initialize() {
        // Load token and user from localStorage on app startup
        const token = localStorage.getItem('token');
        const user = JSON.parse(localStorage.getItem('user'));
        if (token && user) {
          this.token = token;
          this.user = user;
        }
      },
    },
   });
