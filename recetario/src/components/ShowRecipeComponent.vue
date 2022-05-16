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
            <div class="ratings">
              Dificultad:
              <svg v-for="rating in difficulty" :key="rating" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill rating-color" viewBox="0 0 16 16">
                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
              </svg>
            </div>
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
      difficulty: 3,
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
.rating-color{
  color:#fbc634 !important;
}

</style>
