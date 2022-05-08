<template>
  <div class="image-container">
    <picture>
      <source media="(max-width: 991px)" :srcset="recipeImage">
      <img :src="recipeImage" width="360" height="180">
    </picture>
  </div>
</template>

<script>
export default {
  name: "RecipeImageComponent.vue",
  data:()=>{
    return{
      recipeImage: 'https://static01.nyt.com/images/2021/04/30/dining/ar-eggs-benedict/ar-eggs-benedict-articleLarge.jpg'
    }
  }
}
</script>

<style scoped>
  .image-container{
    background: rgb(9,9,121);
    background: linear-gradient(90deg, rgba(9,9,121,1) 0%, rgba(0,255,238,1) 48%, rgba(2,0,36,1) 100%);
  }
</style>
