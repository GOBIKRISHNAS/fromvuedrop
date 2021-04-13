<template>
  <div>
      <h2> Preview </h2>
      <p v-for= "(value, index) in output" :key="value.id">{{index}}: <b>{{value}}</b></p>
   </div>
</template>

<script>
export default {
  props: {
      submit: {
        type: Boolean,
        required: true
      },
      outputs: {
        type: Object,
        required: true
      }
    },
  data() {
    return {
         "submits": this.submit,
         "output": this.outputs
      };
  },
  methods: {
      
  }
};
</script>

<style>

</style>
