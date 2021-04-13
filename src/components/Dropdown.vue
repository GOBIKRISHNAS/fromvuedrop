<template>
  <select v-model="dataName" v-on:change= "updateData(key, output, dataName)">
    <option v-for="data in dropData" :value="data" :key="data.id">{{data}}</option>
  </select>
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
      }
    },
  data() {
    return {
        "dropData": this.data,
        "key": this.keys,
        "output": this.outputs,
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
