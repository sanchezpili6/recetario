<template>
  <div class="my-3">
    <ul>
      <li v-for="recipe in recipes" :key="recipe">{{ recipe.name }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "RecipesListComponent.vue",
  data:()=>{
    return{
      recipes:[
        {
          name:'Huevos Benedictinos',
          id: 1
        },
        {
          name:'Agua de pepino',
          id: 2
        },
        {
          name:'Nicuatole',
          id: 3
        },
        {
          name:'Tejate',
          id: 4
        },
      ]
    }
  }
}
</script>

<style scoped>

</style>
