<template>
  <div id="app">
     <div class="bg-dark min-vh-100">
        <h1 class="text-center text-danger">NETFLIX</h1>
      <div class="searchBar">
        <input type="text" v-model="query"/> <button @click="search">Cerca</button>
      </div>
      <div class="container">
        <h2 class="text-white">Our Movies</h2>
        <MovieComponent v-for="movie in movies" :key="movie.id" :movie="movie"/>
        <h2 class="text-white">Our TV Series</h2>
        <ShowComponent v-for="show in shows" :key="show.id" :show="tvSerie"/>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios';
  import { apiKey } from '@/env';

  import MovieComponent from '@/components/MovieComponent.vue'
  import ShowComponent from './components/ShowComponent.vue';
  
  
  export default {
    name: 'App',
      data(){
        return {
          query: '',
          movies: [],
          tvSeries: [],
          apiUrl: 'https://api.themoviedb.org/3/'
        }
      },
  methods:{
    search(){
      this.queryApi(this.query);
    },
    queryApi(textToSearch){
      const params = `?api_key=${apiKey}&query=${textToSearch}&language=it-IT`

      // films
      axios.get(`${this.apiUrl}search/movie${params}`)
        .then((response)=>{
          this.movies = this.getDataFromApiResponse(response);  
        })
        .catch(error=> {
          console.log(error.message)
        });
      // shows
      axios.get(`${this.apiUrl}search/tv${params}`)
        .then((response)=>{
           this.shows = this.getDataFromApiResponse(response);  
        })
        .catch(error=> {
          console.log(error.message)
        });
    },
    getDataFromApiResponse(response){
      console.log(response);
      return response.status === 200? response.data.results : []    
    }
  },
    components:{
      MovieComponent,
      ShowComponent
    }
  }
</script>
  
<style lang="scss">
@import '~bootstrap/scss/bootstrap';
.searchBar{
  text-align: center;
  margin: 30px auto;
}


</style>
  
