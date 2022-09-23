import Vue from 'vue'
Vue.use(Vuetify)

const opts = { 
  treeShake: true,  
  theme: { dark: true }, 
}


export default new Vuetify(opts)