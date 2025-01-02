<template>
    <div class="greetings">
      <h1 class="green">This is Clase Menu</h1>
      <h3>
        You’ve successfully created a project with
        
      </h3>
      


    <div class="flex items-center justify-center min-h-screen">
    <div class="space-y-1">
      <div v-for="item in items" :key="item.id" class="flex justify-center">
        <button 
        @click="goToRoute('MateriiMenu', item.codclasa)"
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded w-30rem ">
          {{ item.denumireclasa }}  
        </button>
      </div>
    </div>
  </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  export default {
    name: 'ClaseMenuPage',
    data(){
        return {
            items:[],
            
        };

    },
    mounted(){
        axios.get('http://127.0.0.1:8000/api/clase').then(response =>{this.items=response.data;})
        .catch(error=>{console.error('Error fetching items', error);});
        console.log(this.items)
        
    }, 
    methods:{
      goToRoute(routeName,codclasa) {
      this.$router.push({ name: routeName, params: { codclasa: codclasa } });
      console.log(codclasa);
      console.log(routeName);
    }
    }
  };
  </script>
  
  <style scoped>
  h1 {
    font-weight: 500;
    font-size: 2.6rem;
    position: relative;
    top: -10px;
  }
  
  h3 {
    font-size: 1.2rem;
  }
  
  .greetings h1,
  .greetings h3 {
    text-align: center;
  }
  
  
  </style>
  