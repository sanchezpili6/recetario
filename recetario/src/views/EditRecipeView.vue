<template>
  <div class="justify-content-center">
    <h1 class="main">Editar Receta</h1>
    <form>
      <v-row>
        <div class="mb-3">
          <label for="recipeName" class="form-label">Nombre:</label>
          <input class="form-control" id="recipeName" v-model="nombre">
        </div>
      </v-row>
      <v-row>
        <v-col>
          <div class="mb-3">
            <label for="difficulty" class="form-label">Dificultad:</label>
            <input class="form-control" id="difficulty" v-model="dificultad">
          </div>
        </v-col>
        <v-col>
          <div class="mb-3">
            <label for="time" class="form-label">Tiempo de preparación:</label>
            <input class="form-control" id="time" v-model="tiempoPreparacion">
          </div>
        </v-col>
      </v-row>
      <v-row>
        <label for="ingredientes" class="form-label">Ingredientes:</label>
        <ul class="list-group">
          <li class="list-group-item" v-for="ration in raciones" :key="ration">
            <h6>{{ration.cantidad}} {{ration.ingrediente.nombre}}</h6>
          </li>
        </ul>
      </v-row>
      <v-row>
        <div class="mb-3">
          <label for="description" class="form-label">Descripción:</label>
          <textarea class="form-control" id="description" v-model="descripcion"></textarea>
        </div>
      </v-row>
    </form>
    <div class="row my-3 main">
      <div class="col">
        <router-link to="/Edit" style="text-decoration: none">
          <button type="button" class="btn btn-primary px-4">Aceptar</button>
        </router-link>
      </div>
      <div class="col">
        <button type="button" class="btn btn-danger">Cancelar</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "EditRecipeComponent.vue",

  data:()=>{
    return{
      id: '1',
      nombre: 'Huevos Benedictinos',
      dificultad: 6,
      tiempoPreparacion: '30m',
      descripcion: 'Mezclar las yemas de huevo, el jugo de limón, agua, sal y una pizca de cayena en una licuadora. Mezclar hasta que esté esponjosa la mezcla, como 1 minuto. Después con la licuadora encendida añada la mantequilla derretida. Cheque si necesita más sal o jugo de limón.',
      raciones: [
        {
          id: '1',
          cantidad: 2,
          ingrediente: {
            id: '1',
            nombre: 'huevo'
          }
        },
        {
          id: '2',
          cantidad: 1,
          ingrediente: {
            id: '2',
            nombre: 'limón'
          }
        },
      ],
      url:'https://static01.nyt.com/images/2021/04/30/dining/ar-eggs-benedict/ar-eggs-benedict-articleLarge.jpg'
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
