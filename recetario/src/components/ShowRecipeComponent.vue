<template>
  <div class="card main">
    <div class="card-body">
      <h5 class="card-title"><h1>{{recipe.nombre}}</h1></h5>
      <h6 class="card-subtitle mb-2 text-muted">
      <ul class="list-group list-group-horizontal justify-content-center">
          <li class="list-group-item">
            Tiempo: {{recipe.tiempoPreparacion}}
          </li>
          <li class="list-group-item">
            <div class="ratings">
              Dificultad:
              <svg v-for="rating in recipe.dificultad" :key="rating" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill rating-color" viewBox="0 0 16 16">
                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
              </svg>
            </div>
          </li>
        </ul>
      </h6>
      <ul class="list-group">
        <li class="list-group-item" v-for="ration in recipe.raciones" :key="ration">
          <h6>{{ration.cantidad}} {{ration.ingrediente.nombre}}</h6>
        </li>
      </ul>
      <div class="row align-items-start my-3">
        <p>{{recipe.descripcion}}</p>
      </div>
      <div class="row align-items-start my-3">
        <div class="col">
          <button @click="handleClick" type="button" class="btn btn-primary px-4">Editar</button>
        </div>
        <div class="col">
          <button @click="deleteReceta" type="button" class="btn btn-danger">Eliminar</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {borrarReceta} from "@/components/recetasService";

export default {
  name: "ShowRecipeComponent.vue",
  props: ['recipe'],
  data:()=>{
    return{
    }
  },
  methods:{
    handleClick() {
      this.$router.replace('/Edit/?Id=' + this.recipe.id);
    },
    async deleteReceta(){
      await borrarReceta(this.recipe.id).then(location.reload())
    }
  }
}
</script>

<style scoped>
.main {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.rating-color{
  color:#fbc634 !important;
}

</style>
