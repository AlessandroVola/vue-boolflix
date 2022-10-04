<template>
    <div class="card">
        <h3>Title: {{tv.name}}</h3> 
        <p>Original Title: {{tv.original_name}}</p> 
        <p>Vote: {{tv.vote_average}}</p> 
        <p>Language: {{tv.original_language}}</p> 
    </div>


</template>

<script>
export default {
  name: 'ShowComponent',
  props: {
      show: Object
  }
}

</script>

<style lang="scss" scoped>
.card{
border: 2px solid red;
margin: 10px 0;
}


</style>