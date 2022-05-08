<template>
  <form>
    <div class="mb-3">
      <label for="recipeName" class="form-label">Nombre:</label>
      <input class="form-control" id="recipeName">
    </div>
    <div class="mb-3">
      <label for="difficulty" class="form-label">Dificultad:</label>
      <input class="form-control" id="difficulty">
    </div>
    <div class="mb-3">
      <label for="time" class="form-label">Tiempo de preparación:</label>
      <input class="form-control" id="time">
    </div>
    <div class="mb-3">
      <label for="description" class="form-label">Descripción:</label>
      <input class="form-control" id="description">
    </div>
  </form>
</template>

<script>
export default {
  name: "EditRecipeComponent.vue"
}
</script>

<style scoped>

</style>
