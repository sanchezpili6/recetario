<template>
  <div class="card main">
    <div class="card-body">
      <h5 class="card-title"><h1>{{name}}</h1></h5>
      <h6 class="card-subtitle mb-2 text-muted">
      <ul class="list-group list-group-horizontal justify-content-center">
          <li class="list-group-item">
            Tiempo: {{time}}
          </li>
          <li class="list-group-item">
            Dificultad: {{difficulty}}
          </li>
        </ul>
      </h6>
      <ul class="list-group">
        <li class="list-group-item" v-for="ration in rations" :key="ration">
          <h6>{{ration.quantity}} {{ration.ingredient}}</h6>
        </li>
      </ul>
      <div class="row align-items-start my-3">
        <p>{{description}}</p>
      </div>
      <div class="row align-items-start my-3">
        <div class="col">
          <router-link to="/Edit" style="text-decoration: none">
            <button type="button" class="btn btn-primary px-4">Editar</button>
          </router-link>
        </div>
        <div class="col">
          <button type="button" class="btn btn-danger">Eliminar</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ShowRecipeComponent.vue",
  data:()=>{
    return{
      name: 'Huevos Benedictinos',
      difficulty: 6,
      time: '30m',
      description: 'Mezclar las yemas de huevo, el jugo de limón, agua, sal y una pizca de cayena en una licuadora. Mezclar hasta que esté esponjosa la mezcla, como 1 minuto. Después con la licuadora encendida añada la mantequilla derretida. Cheque si necesita más sal o jugo de limón.',
      rations: [
        {
          quantity: 2,
          ingredient: 'huevos'
        },
        {
          quantity: 1,
          ingredient: 'limón'
        },
        {
          quantity: '2 tazas',
          ingredient: 'agua'
        },
        {
          quantity: '1 cucharadita',
          ingredient: 'mantequilla'
        },
        {
          quantity: '1 pizca',
          ingredient: 'sal'
        },
      ]
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
