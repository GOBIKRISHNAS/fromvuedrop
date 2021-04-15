<template>
  <div>
  <input type="text" v-model="dataName" v-on:change="updateData(key, output, dataName)"/>
  <span v-if="!error[key]">{{key}} is required</span>
  </div>
</template>

<script>
export default {
  props: {
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
        "key": this.keys,
        "output": this.outputs,
        "error": this.errors,
        "dataName": null
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
