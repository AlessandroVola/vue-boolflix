<template>
  <div id="app">
    <div class="searchBar">
      <input type="text" v-model="query"/> <button @click="search">Cerca</button>
    </div>
    <div class="container d-flex flex-wrap justify-content-evenly">
      <div class="card col-5" v-for="movie in movies" :key="movie.id">
        <h3>Title: {{movie.title}}</h3> 
        <p>Original Title: {{movie.original_title}}</p> 
        <p>Vote: {{movie.vote_average}}</p> 
        <p>Language: {{movie.original_language}}</p> 
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios';
  import { apiKey } from '@/env'
  
  export default {
    name: 'App',
    data(){
      return {
        query: '',
        movies: []
      }
    },
    methods:{
      search(){
        this.queryApi(this.query);
      },
      queryApi(textToSearch){
        axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${textToSearch}`)
          .then((response)=>{
            console.log(response);
            if (response.status === 200){
              this.movies = response.data.results;
            }       
          })
      }
    }
  }
</script>
  
<style lang="scss">
@import '~bootstrap/scss/bootstrap';
.searchBar{
  text-align: center;
  margin: 30px auto;
}

.card{
  border: 2px solid #333;
  margin: 10px 0;
}
    
</style>
  
