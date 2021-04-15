<template>
<div>
  <select v-model="dataName" v-on:change= "updateData(key, output, dataName)">
    <option v-for="data in dropData" :value="data" :key="data.id">{{data}}</option>
  </select>
  <span v-if="!error[key]">{{key}} is required</span>
</div>
</template>

<script>
export default {
  props: {
      data: {
        type: Array,
        required: true
      },
      keys: {
        type: String,
        required: true
      },
      outputs: {
        type: Object,
        required: true
      },
      errors:{
        type: Object,
        required: true
      }
    },
  data() {
    return {
        "dropData": this.data,
        "key": this.keys,
        "output": this.outputs,
        "error": this.errors,
        "dataName": ""
    };
  },
  methods: {
      updateData: function (key, output, dataName) {
         output[key] = dataName;
      }
  }
};
</script>

<style>

</style>
