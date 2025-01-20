<script>


export default {
  name:'TeoriePage'
};
</script>

<template>
  <div class="greetings">
    This is the theory page. It displays the theory of the quiz

  </div>
</template>

<style scoped>
.greetings {
  width: 100%; /* Full width */
  max-width: 1200px; /* Optional: limit the width for better readability */
  margin: 0 auto; /* Center align for larger screens */
  padding: 0rem; /* Consistent padding */
}

.shared-button {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-grow: 1;
  background-color: #3498db;
  color: white;
  font-weight: 100;
  padding: 1.5rem; /* Consistent padding */
  font-size: 1.1rem; /* Consistent font size */
  border: 2px solid #d413c4;
  border-radius: none;
  transition: background-color 0.3s ease, color 0.3s ease;

  /* Ensure consistent size */
  min-height: 5rem;
  width: 100%;
}

.shared-button:hover {
  background-color: #2980b9;
  color: #ecf0f1;
}
</style>
