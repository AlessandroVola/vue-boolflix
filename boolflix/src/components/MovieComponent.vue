<template>
      <div class="card">
        <h3>Title: {{movie.title}}</h3> 
        <p>Original Title: {{movie.original_title}}</p> 
        <p>Vote: {{movie.vote_average}}</p> 
        <p>Language: {{movie.original_language}} </p> 
      </div>


</template>

<script>
export default {
    name: 'MovieComponent',
    props: {
        movie: Object
    }
}

</script>

<style lang="scss" scoped>
.card{
  border: 2px solid red;
  margin: 10px 0;
}


</style>