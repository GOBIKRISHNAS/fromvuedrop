import Vue from 'vue'
import App from './App.vue'
import TextField from './components/TextField.vue'
import DropDown from './components/DropDown.vue'
import Submitbutton from './components/Submitbutton.vue'

Vue.component('textfield', TextField);
Vue.component('dropdown', DropDown);
Vue.component('submitbutton', Submitbutton);

new Vue({
  el: '#app',
  render: h => h(App)
})
