<template>
  <div class="list-group my-3">
    <h1>Recetas</h1>
    <button
        v-for="recipe in recipes"
        :key="recipe"
        type="button"
        class="list-group-item list-group-item-action d-flex justify-content-between align-items-start"
    >
      {{ recipe.name }}
      <span class="badge bg-primary rounded-pill">{{recipe.difficulty}}</span>
    </button>
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
          id: 1,
          difficulty: 6
        },
        {
          name:'Agua de pepino',
          id: 2,
          difficulty: 2
        },
        {
          name:'Nicuatole',
          id: 3,
          difficulty: 8
        },
        {
          name:'Tejate',
          id: 4,
          difficulty: 10
        },
      ]
    }
  }
}
</script>

<style scoped>

</style>
