<template>
  <div>
    <RecipeImageComponent></RecipeImageComponent>
    <ShowRecipeComponent></ShowRecipeComponent>
  </div>
</template>

<script>
import RecipeImageComponent from "@/components/RecipeImageComponent";
import ShowRecipeComponent from "@/components/ShowRecipeComponent";
export default {
  name: "RecipeView.vue",
  components:{
    RecipeImageComponent,
    ShowRecipeComponent
  }
}
</script>

<style scoped>

</style>
