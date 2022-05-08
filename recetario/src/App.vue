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

</style>
