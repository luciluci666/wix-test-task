import { createRouter, createWebHistory } from 'vue-router'
import ProductsView from '../views/ProductsView.vue'
import ProductCreateView from '../views/CreateProductView.vue'
import ProductEditView from '../views/EditProductView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/products',
      name: 'products',
      component: ProductsView
    },
    {
      path: '/products/create',
      name: 'productsCreate',
      component: ProductCreateView
    },
    { path: '/products/:id', component: ProductEditView },
  ]
})

export default router
