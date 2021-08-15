import Vue from 'vue'
import App from './App'
import './index.css'
import Router from "vue-router";
import Home from "./components/Home"
import Studentp from "./components/studentp"
import Gallery from "./components/Gallery"

Vue.use(Router);


const routes = [
  {
    path: "/", component: Home
  },
  {
    path: "/student", component: Studentp
  },
  {
    path: "/gallery", component: Gallery

  }
];

const router = new Router({
  routes
});


Vue.config.productionTip = false


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
