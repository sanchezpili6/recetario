<template>
  <div class="container">
    <div class="row align-items-start">
      <div class="col-9">
        <router-view/>
      </div>
      <div class="col">
        <RecipesListComponent></RecipesListComponent>
      </div>
    </div>

  </div>
</template>

<script>
import RecipesListComponent from "@/components/RecipesListComponent";
export default {
  components:{
    RecipesListComponent
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
