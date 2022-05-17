<template>
  <div class="list-group my-3">
    <h1>Recetas</h1>
    <button
        v-for="recipe in recetas"
        :key="recipe"
        type="button"
        class="list-group-item list-group-item-action d-flex justify-content-between align-items-start"
        @click="$emit('change', recipe)"
    >
      {{ recipe.nombre }}
      <span class="badge bg-primary rounded-pill">{{recipe.dificultad}}</span>
    </button>
  </div>
</template>

<script>
import {listarRecetas} from "@/components/recetasService";

export default {
  name: "RecipesListComponent.vue",
  methods:{
    async fetchRecetas(){
      this.recetas = await listarRecetas()
      console.log(this.recetas)
    }
  },
  mounted() {
    this.fetchRecetas()
  },
  data:()=>{
    return{
      recetas:[]
    }
  }
}
</script>

<style scoped>

</style>
