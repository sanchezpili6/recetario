<template>
  <div class="justify-content-center">
    <h1 class="main">Editar Receta</h1>
    <div class="row">
      <div class="col-sm-10 col-8">
        <form>
            <div class="mb-3">
              <label for="recipeName" class="form-label">Nombre:</label>
              <input class="form-control" id="recipeName" v-model="receta.nombre">
            </div>
              <div class="mb-3">
                <label for="difficulty" class="form-label">Dificultad:</label>
                <input class="form-control" id="difficulty" v-model="receta.dificultad">
              </div>
              <div class="mb-3">
                <label for="time" class="form-label">Tiempo de preparación:</label>
                <input class="form-control" id="time" v-model="receta.tiempoPreparacion">
              </div>
            <label  class="form-label">Ingredientes:</label>
            <ul class="list-group">
              <li class="list-group-item" v-for="ration in receta.raciones" :key="ration">
                <h6>{{ration.cantidad}} {{ration.ingrediente.nombre}}</h6>
              </li>
            </ul>
            <div class="mb-3">
              <label for="description" class="form-label">Descripción:</label>
              <textarea class="form-control" id="description" v-model="receta.descripcion"></textarea>
            </div>
        </form>
      </div>
      <div class="col-sm-2 col-4">
        <RecipesListComponent @change="mostrarReceta"></RecipesListComponent>
      </div>
    </div>
    <div class="row my-3 main">
      <div class="col">
        <button @click="editRecipe" type="button" class="btn btn-primary px-4">Aceptar</button>
      </div>
      <div class="col">
        <router-link to="/" style="text-decoration: none">
          <button type="button" class="btn btn-danger">Cancelar</button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import RecipesListComponent from "@/components/RecipesListComponent";
import {editarReceta, conseguirReceta} from "@/components/recetasService";

export default {
  name: "EditRecipeComponent.vue",
  components:{
    RecipesListComponent
  },
  async created(){
    let recetaID = this.$route.query.Id;
    this.receta = await conseguirReceta(recetaID)
    console.log(this.receta)
  },
  methods:{
    async editRecipe(){
      let recetaID = this.$route.query.Id;
      const data = {
        "url": this.receta.url,
        "id": this.receta.id,
        "nombre": this.receta.nombre,
        "dificultad": this.receta.dificultad,
        "tiempoPreparacion": this.receta.tiempoPreparacion,
        "descripcion": this.receta.descripcion,
        "raciones": []
      };
      this.recetas = await editarReceta(recetaID, data)
      console.log(this.recetas)
      location.reload();
    }
  },
  data:()=>{
    return{
      receta:[]
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
</style>
