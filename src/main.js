import Vue from 'vue'
import Form1 from './Form1.vue'
import Form2 from './Form2.vue'
import TextField from './components/TextField.vue'
import DropDown from './components/DropDown.vue'
import Submitbutton from './components/Submitbutton.vue'

Vue.component('textfield', TextField);
Vue.component('dropdown', DropDown);
Vue.component('submitbutton', Submitbutton);

new Vue({
  el: '#form1',
  render: h => h(Form1)
})

new Vue({
  el: '#form2',
  render: h => h(Form2)
})
