<template>
  <div class="image-container">
    <picture>
      <source media="(max-width: 991px)" :srcset="recipe.url">
      <img :src="recipe.url" width="360" height="180">
    </picture>
  </div>
</template>

<script>
export default {
  name: "RecipeImageComponent.vue",
  props: ['recipe'],
  data:()=>{
    return{
    }
  }
}
</script>

<style scoped>
  .image-container{
    display: flex;
    justify-content: center;
    background: rgb(9,9,121);
    background: linear-gradient(90deg, rgba(9,9,121,1) 0%, rgba(0,255,238,1) 48%, rgba(2,0,36,1) 100%);
  }
</style>
