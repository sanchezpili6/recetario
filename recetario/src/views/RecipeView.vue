<template>
  <div class="row">
    <div class="col-sm-10 col-8">
      <RecipeImageComponent :recipe="recipe"></RecipeImageComponent>
      <ShowRecipeComponent :recipe="recipe"></ShowRecipeComponent>
    </div>
    <div class="col-sm-2 col-4">
      <RecipesListComponent @change="mostrarReceta"></RecipesListComponent>
    </div>
  </div>
</template>

<script>
import RecipeImageComponent from "@/components/RecipeImageComponent";
import ShowRecipeComponent from "@/components/ShowRecipeComponent";
import RecipesListComponent from "@/components/RecipesListComponent";
export default {
  name: "RecipeView.vue",
  components:{
    RecipeImageComponent,
    ShowRecipeComponent,
    RecipesListComponent
  },
  data(){
    return{
      recipe:[]
    }
  },
  methods:{
    mostrarReceta(recipe){
      this.recipe = recipe
    }
  }
}
</script>

<style scoped>

</style>
