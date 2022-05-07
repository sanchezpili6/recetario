import { createRouter, createWebHistory } from 'vue-router'
import RecipeView from "@/views/RecipeView";
import EditRecipeView from "@/views/EditRecipeView";

const routes = [
  {
    path: '/',
    name: 'Recipe View',
    component: RecipeView
  },
  {
    path: '/Edit',
    name: 'Edit Recipe',
    component: EditRecipeView
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
