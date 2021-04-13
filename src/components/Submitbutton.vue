<template>
  <div>
      <h2> Preview </h2>
      <p>Name: <b>{{output.name}}</b></p>
      <p>Age: <b>{{output.age}}</b></p>
      <p>Father Name: <b>{{output.fname}}</b></p>
      <p>Country: <b>{{output.country}}</b></p>
      <p>Language: <b>{{output.language}}</b></p>
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
